const fs = require('fs');
const path = require('path');

// Mapping de valores fijos a responsivos
const responsiveMap = [
  // Font sizes grandes
  { fixed: '75px', responsive: 'clamp(32px, 8vw, 75px)' },
  { fixed: '52px', responsive: 'clamp(28px, 6vw, 52px)' },
  { fixed: '48px', responsive: 'clamp(24px, 5.5vw, 48px)' },
  { fixed: '36px', responsive: 'clamp(20px, 4.5vw, 36px)' },
  { fixed: '32px', responsive: 'clamp(20px, 4vw, 32px)' },
  { fixed: '28px', responsive: 'clamp(18px, 3.5vw, 28px)' },
  { fixed: '24px', responsive: 'clamp(16px, 3vw, 24px)' },
  { fixed: '22px', responsive: 'clamp(14px, 2.5vw, 22px)' },
  { fixed: '21px', responsive: 'clamp(15px, 2.2vw, 21px)' },
  { fixed: '20px', responsive: 'clamp(14px, 2vw, 20px)' },
  { fixed: '19px', responsive: 'clamp(13px, 1.9vw, 19px)' },
  { fixed: '18px', responsive: 'clamp(14px, 1.8vw, 18px)' },
  { fixed: '16px', responsive: 'clamp(12px, 1.6vw, 16px)' },
  { fixed: '15px', responsive: 'clamp(12px, 1.5vw, 15px)' },
  { fixed: '14px', responsive: 'clamp(11px, 1.4vw, 14px)' },
  { fixed: '12px', responsive: 'clamp(10px, 1.2vw, 12px)' },
  
  // Paddings y Margins
  { fixed: '248px', responsive: 'clamp(30px, 6vw, 248px)' },
  { fixed: '200px', responsive: 'clamp(100px, 15vw, 200px)' },
  { fixed: '180px', responsive: 'clamp(80px, 12vw, 180px)' },
  { fixed: '160px', responsive: 'clamp(70px, 10vw, 160px)' },
  { fixed: '150px', responsive: 'clamp(60px, 9vw, 150px)' },
  { fixed: '140px', responsive: 'clamp(50px, 8vw, 140px)' },
  { fixed: '130px', responsive: 'clamp(45px, 7vw, 130px)' },
  { fixed: '120px', responsive: 'clamp(40px, 6vw, 120px)' },
  { fixed: '110px', responsive: 'clamp(35px, 5.5vw, 110px)' },
  { fixed: '100px', responsive: 'clamp(30px, 5vw, 100px)' },
  { fixed: '90px', responsive: 'clamp(25px, 4.5vw, 90px)' },
  { fixed: '80px', responsive: 'clamp(20px, 4vw, 80px)' },
  { fixed: '74px', responsive: 'clamp(40px, 6vw, 74px)' },
  { fixed: '70px', responsive: 'clamp(25px, 4vw, 70px)' },
  { fixed: '60px', responsive: 'clamp(20px, 3.5vw, 60px)' },
  { fixed: '50px', responsive: 'clamp(15px, 2.5vw, 50px)' },
  { fixed: '45px', responsive: 'clamp(20px, 3.5vw, 45px)' },
  { fixed: '40px', responsive: 'clamp(15px, 2.5vw, 40px)' },
  { fixed: '35px', responsive: 'clamp(15px, 2.5vw, 35px)' },
  { fixed: '30px', responsive: 'clamp(10px, 2vw, 30px)' },
  { fixed: '25px', responsive: 'clamp(10px, 1.8vw, 25px)' },
  { fixed: '20px', responsive: 'clamp(8px, 1.5vw, 20px)' },
];

function convertCSSToResponsive(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    // Reemplazar valores fijos por responsivos
    responsiveMap.forEach(({ fixed, responsive }) => {
      // Usar regex con word boundaries para evitar reemplazos parciales
      const regex = new RegExp(`(?<!\\w)${fixed.replace(/px/g, '')}px(?!\\w)`, 'g');
      content = content.replace(regex, responsive);
    });

    // Agregar media queries si no existen
    if (!content.includes('@media(min-width: 601px) and (max-width: 1024px)')) {
      content += `\n\n/* ============ TABLET - 601px a 1024px ============ */\n`;
      content += `@media(min-width: 601px) and (max-width: 1024px) {\n`;
      content += `  /* Ajustes optimizados para tablets */\n`;
      content += `}\n`;
    }

    if (!content.includes('@media(max-width: 600px)')) {
      content += `\n/* ============ MOBILE - menos de 600px ============ */\n`;
      content += `@media(max-width: 600px) {\n`;
      content += `  /* Ajustes optimizados para dispositivos móviles */\n`;
      content += `}\n`;
    }

    // Guardar archivo actualizado
    fs.writeFileSync(filePath, content, 'utf-8');
    
    const fileName = path.basename(filePath);
    if (originalContent !== content) {
      console.log(`✅ ${fileName} - Actualizado correctamente`);
      return { file: fileName, status: 'actualizado', success: true };
    } else {
      console.log(`⏭️ ${fileName} - Sin cambios necesarios`);
      return { file: fileName, status: 'sin-cambios', success: true };
    }
  } catch (error) {
    console.error(`❌ Error en ${path.basename(filePath)}: ${error.message}`);
    return { file: path.basename(filePath), status: 'error', success: false };
  }
}

// Lista completa de archivos CSS
const cssFiles = [
  'granMenu.css',
  'somos.css',
  'visiones.css',
  'cober.css',
  'clientes.css',
  'beneficios.css',
  'terrestre.css',
  'enfoque.css',
  'sistemas.css',
  'aereo.css',
  'mar.css',
  'espacial.css',
  'perecederos.css',
  'aduanas.css',
  'despacho.css',
  'equipo.js',
  'montana.css',
  'envios.css',
  'cadena.css',
  'tactico.css',
  'humanos.css',
  'capa.css',
  'preven.css',
  'predi.css',
  'mante.css',
  'monitoreo.css',
  'infra.css',
  'instalaciones.css',
  'sosten.css',
  'footer.css',
  'contacto.css'
];

console.log('🚀 Iniciando conversión de archivos CSS a responsivos...\n');
console.log(`📁 Directorio: ${__dirname}\n`);

let actualizados = 0;
let sinCambios = 0;
let errores = 0;
const resultados = [];

cssFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const resultado = convertCSSToResponsive(filePath);
    resultados.push(resultado);
    
    if (resultado.success) {
      if (resultado.status === 'actualizado') {
        actualizados++;
      } else if (resultado.status === 'sin-cambios') {
        sinCambios++;
      }
    } else {
      errores++;
    }
  } else {
    console.log(`⚠️ ${file} - No encontrado`);
  }
});

console.log('\n' + '='.repeat(50));
console.log('📊 RESUMEN DE CONVERSIÓN');
console.log('='.repeat(50));
console.log(`✅ Archivos actualizados: ${actualizados}`);
console.log(`⏭️ Sin cambios: ${sinCambios}`);
console.log(`❌ Errores: ${errores}`);
console.log(`📈 Total procesados: ${actualizados + sinCambios + errores}`);
console.log('='.repeat(50) + '\n');

if (actualizados > 0) {
  console.log('🎉 ¡Conversión completada exitosamente!');
  console.log('💡 Todos los archivos CSS ahora son responsivos.');
  console.log('📱 Prueba en diferentes dispositivos (móvil, tablet, desktop).\n');
}
