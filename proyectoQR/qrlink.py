import qrcode
from PIL import Image

# --- CONFIGURACIÓN ---
# Tu enlace
link = "https://cordoba.gob.mx/"  # ¡Reemplaza con tu enlace!

# Ruta a la imagen de tu logo
path_logo = "img/logoa.png"  #

# Ruta donde guardarás el QR generado
path_qr_output = "qr_cordoba.png"


# --- GENERACIÓN DEL CÓDIGO QR ---
# Crear un objeto QRCode para un control más preciso
qr = qrcode.QRCode(
    version=1,  # Tamaño del código (1 es el más pequeño, aumenta si necesitas más datos o más corrección de errores)
    # IMPORTANTE: Aumentar el nivel de corrección de errores es CLAVE para logos.
    # QRCode.ERROR_CORRECT_H (Alto) permite recuperar hasta un 30% de datos perdidos/cubiertos.
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,  # Tamaño de cada "módulo" (cuadradito) del QR
    border=4,     # Grosor del borde (mínimo recomendado es 4)
)

# Añadir el enlace al código QR
qr.add_data(link)
qr.make(fit=True)

# Crear la imagen básica del QR (en blanco y negro)
# Puedes personalizar 'fill_color' (color del QR) y 'back_color' (color de fondo)
img_qr = qr.make_image(fill_color="black", back_color="white").convert('RGB')


# --- INSERCIÓN DEL LOGO ---
try:
    # Abrir la imagen del logo
    logo = Image.open(path_logo)
    logo = logo.convert('RGB') # Convertir a RGB por seguridad

    # Calcular las dimensiones del QR para redimensionar el logo
    # Queremos que el logo ocupe, por ejemplo, un tercio del ancho del QR
    qr_width, qr_height = img_qr.size
    logo_size = qr_width // 3  # Ajusta este valor (4 o 5 para logos más pequeños)

    # Redimensionar el logo, manteniendo la relación de aspecto si lo prefieres.
    # Aquí lo forzamos a un cuadrado centrado.
    logo = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)

    # Calcular la posición para centrar el logo
    logo_pos = ((qr_width - logo_size) // 2, (qr_height - logo_size) // 2)

    # Pegar el logo sobre el código QR
    # Si tu logo tiene transparencia, puedes pasar la imagen del logo como tercer argumento (máscara).
    # Como lo hemos convertido a RGB, simplemente lo pegamos encima.
    img_qr.paste(logo, logo_pos)

    # Guardar la imagen final
    img_qr.save(path_qr_output)
    print(f"Código QR con logo generado con éxito en: {path_qr_output}")

except FileNotFoundError:
    print(f"Error: No se pudo encontrar el archivo de logo en '{path_logo}'.")
    print("El código QR se generó sin logo.")
    img_qr.save(path_qr_output) # Guardar el QR simple de todas formas
except Exception as e:
    print(f"Ocurrió un error inesperado: {e}")