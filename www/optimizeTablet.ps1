$wwwPath = Get-Location
Write-Host "Optimizando espaciado para tablets Samsung Galaxy Tab A9..." -ForegroundColor Green

$cssFiles = @(
    'granMenu.css', 'visiones.css', 'cober.css', 'clientes.css',
    'beneficios.css', 'terrestre.css', 'enfoque.css', 'sistemas.css', 'aereo.css',
    'mar.css', 'espacial.css', 'perecederos.css', 'aduanas.css', 'despacho.css',
    'montana.css', 'envios.css', 'cadena.css', 'tactico.css', 'humanos.css',
    'capa.css', 'preven.css', 'predi.css', 'mante.css', 'monitoreo.css',
    'infra.css', 'instalaciones.css', 'sosten.css', 'footer.css', 'contacto.css'
)

$tabletMediaQuery = @"

/* TABLET - 601px a 900px (Samsung Galaxy Tab A9) */
@media(min-width: 601px) and (max-width: 900px) {
  * {
    --spacing-multiplier: 1.3;
  }
  
  body {
    padding: 0;
    margin: 0;
  }
  
  /* Aumentar espaciado general */
  section {
    padding: clamp(30px, 6vw, 70px) clamp(20px, 5vw, 50px) !important;
  }
}
"@

$actualizados = 0

foreach ($file in $cssFiles) {
    $filePath = Join-Path -Path $wwwPath -ChildPath $file
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        if ($content -notmatch '@media\(min-width: 601px\) and \(max-width: 900px\)') {
            if ($content -match '@media\(max-width: 600px') {
                $content = $content -replace '(@media\(max-width: 600px)', "$tabletMediaQuery`n`n`$1"
            } else {
                $content = $content.TrimEnd() + $tabletMediaQuery
            }
            
            [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
            Write-Host "ANADIDO: Media query tablet en $file" -ForegroundColor Green
            $actualizados++
        } else {
            Write-Host "EXISTE: Media query tablet en $file" -ForegroundColor Yellow
        }
    }
}

Write-Host "`nOptimizacion completada: Se anadieron media queries en $actualizados archivos" -ForegroundColor Cyan
Write-Host "La tablet Samsung Galaxy Tab A9 ahora tendra mejor espaciado" -ForegroundColor Green
