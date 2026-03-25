import segno
from PIL import Image, ImageDraw, ImageFont # Importamos ImageFont
import os

# --- CONFIGURACIÓN ---
# Tu enlace
link = "https://cordoba.gob.mx/index.html"

# Ruta a la imagen de tu logo blanco (Asegúrate de que exista esta ruta)
path_logo = "img/logoa.png" 

# Ruta donde guardarás el QR generado
path_qr_output = "qr_cordoba_premium_texto.png"

# Texto a añadir
texto_leyenda = "Somo el origen"  # Cambia esto por el texto que quieras mostrar


# ==============================================================================
# --- SECCIÓN DE PERSONALIZACIÓN DEL DISEÑO ---
# ------------------------------------------------------------------------------
color_marino_oscuro = "#4d0c00" # Azul Marino muy oscuro profesional (para módulos)
color_azul_finder = "#801A00" # Un azul un poco más claro para las esquinas (buscadores)
color_fondo = "#ffffff" # Blanco puro
color_texto = "#4d0000" # Usaremos el mismo azul oscuro para el texto
# ==============================================================================


print("Generando código QR con leyenda superior (Premium)...")

# Verificación de seguridad para el logo
if not os.path.exists(path_logo):
    print(f"❌ ERROR Crítico: No se encuentra el archivo de logo en '{path_logo}'.")
    print("Por favor, verifica la ruta o crea la carpeta 'img' y coloca el archivo 'logoa.png' dentro.")
    exit() # Detiene la ejecución si no hay logo

try:
    # --- 1. GENERACIÓN DEL QR BÁSICO CON SEGNO ---
    qr = segno.make(link, error='h')
    
    # Obtenemos la matriz de datos del QR
    matrix = qr.matrix
    matrix_len = len(matrix)

    # --- 2. CONFIGURACIÓN DEL DIBUJO Y CÁLCULO DE TAMAÑOS ---
    box_size = 10  
    border_modules = 4 # Bordes en términos de módulos
    
    # Tamaño del cuadrado del QR puro
    qr_pure_size = matrix_len * box_size
    
    # Margen silencioso alrededor del QR (píxeles)
    quiet_zone = border_modules * box_size
    
    # Ancho final de la imagen
    final_width = qr_pure_size + (2 * quiet_zone)

    # --- NUEVO: CONFIGURACIÓN DEL TEXTO ---
    # Intentar cargar una fuente del sistema. Si falla, usa la predeterminada.
    # 'arial.ttf' funciona en Windows/Mac. En Linux puede requerir ruta completa.
    try:
        # Ajusta el tamaño (30) según te guste
        font = ImageFont.truetype("arial.ttf", 30
                                  ) 
    except IOError:
        print("Aviso: No se encontró 'arial.ttf', usando fuente predeterminada (se verá más pequeña).")
        font = ImageFont.load_default()

    # Calcular cuánto espacio ocupa el texto
    # Creamos una imagen temporal para calcular el tamaño del texto
    temp_img = Image.new('RGB', (1, 1))
    temp_draw = ImageDraw.Draw(temp_img)
    
    # Obtenemos el rectángulo delimitador del texto (left, top, right, bottom)
    text_bbox = temp_draw.textbbox((0, 0), texto_leyenda, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    # Definimos un margen extra sobre y bajo el texto
    extra_padding_text = 20 
    
    # El espacio total que ocupará la cabecera del texto
    text_area_height = text_height + (extra_padding_text * 2)

    # --- ALTURA FINAL AJUSTADA ---
    # La altura será: espacio texto + el tamaño cuadrado del QR
    final_height = text_area_height + final_width

    # Creamos la imagen final más alta
    img_final = Image.new('RGB', (final_width, final_height), color_fondo)
    draw = ImageDraw.Draw(img_final)


    # --- 3. DIBUJAR EL TEXTO ---
    # Calculamos posición X para centrarlo
    text_x = (final_width - text_width) // 2
    # Posición Y (con el padding superior)
    text_y = extra_padding_text
    
    draw.text((text_x, text_y), texto_leyenda, fill=color_texto, font=font)


    # --- 4. DIBUJAR EL QR MÓDULO POR MÓDULO (DESPLAZADO HACIA ABAJO) ---
    # El desplazamiento vertical es 'text_area_height'
    offset_y = text_area_height

    for r in range(matrix_len): 
        for c in range(matrix_len): 
            if matrix[r][c]: 
                
                # Calcular la posición base X e Y (sumando la zona silenciosa)
                base_x = (c * box_size) + quiet_zone
                base_y = (r * box_size) + quiet_zone
                
                # Coordenadas finales aplicando el desplazamiento del área de texto en Y
                top_left_x = base_x
                top_left_y = base_y + offset_y # <--- AQUÍ ESTÁ LA CLAVE
                bottom_right_x = base_x + box_size
                bottom_right_y = base_y + box_size + offset_y # <--- AQUÍ TAMBIÉN
                
                # Detectar si es un buscador (esquina) o datos
                is_finder = False
                if 0 <= r <= 6 and 0 <= c <= 6:
                    is_finder = True
                elif 0 <= r <= 6 and matrix_len - 7 <= c <= matrix_len - 1:
                    is_finder = True
                elif matrix_len - 7 <= r <= matrix_len - 1 and 0 <= c <= 6:
                    is_finder = True

                current_color = color_azul_finder if is_finder else color_marino_oscuro

                # Dibujar el módulo como un círculo (ellipse)
                draw.ellipse(
                    [(top_left_x, top_left_y), (bottom_right_x, bottom_right_y)],
                    fill=current_color,
                    outline=None
                )


    # --- 5. INSERCIÓN DEL LOGO BLANCO (TAMBIÉN DESPLAZADO) ---
    logo = Image.open(path_logo)
    
    # El tamaño de referencia para el logo sigue siendo el ancho del QR
    reference_width = final_width
    logo_size = reference_width // 5 
    bg_size = reference_width // 4

    logo = logo.convert('RGBA') 
    logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)

    bg_color = color_azul_finder 
    # Crear fondo del logo con esquinas redondeadas es complejo con este método, 
    # usaremos un cuadrado por simplicidad como en tu código original, 
    # pero centrado en el nuevo lienzo.
    logo_bg = Image.new('RGB', (bg_size, bg_size), bg_color)

    logo_inside_bg_pos = ((bg_size - logo_size) // 2, (bg_size - logo_size) // 2)
    logo_bg.paste(logo, logo_inside_bg_pos, mask=logo)

    # Posición central X e Y, pero Y debe considerar el desplazamiento del texto
    qr_center_y = offset_y + (final_width // 2) # Centro de la zona del QR
    
    logo_pos_x = (final_width - bg_size) // 2
    logo_pos_y = qr_center_y - (bg_size // 2)
    
    img_final.paste(logo_bg, (logo_pos_x, logo_pos_y))


    # --- 6. GUARDAR Y FINALIZAR ---
    img_final.save(path_qr_output)
    print(f"✅ ¡Código QR con leyenda generado con éxito en: {path_qr_output}!")

except Exception as e:
    print(f"❌ Ocurrió un error inesperado: {e}")
    import traceback
    traceback.print_exc() # Esto ayuda a depurar dónde falló exactamente