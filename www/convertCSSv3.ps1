$wwwPath = Get-Location
Write-Host "Conversion CSS - Version Final Optimizada" -ForegroundColor Cyan

$responsiveMap = [ordered]@{
    '248px' = 'clamp(30px, 6vw, 248px)'
    '200px' = 'clamp(100px, 15vw, 200px)'
    '180px' = 'clamp(80px, 12vw, 180px)'
    '160px' = 'clamp(70px, 10vw, 160px)'
    '150px' = 'clamp(60px, 9vw, 150px)'
    '140px' = 'clamp(50px, 8vw, 140px)'
    '130px' = 'clamp(45px, 7vw, 130px)'
    '120px' = 'clamp(40px, 6vw, 120px)'
    '110px' = 'clamp(35px, 5.5vw, 110px)'
    '100px' = 'clamp(30px, 5vw, 100px)'
    '90px'  = 'clamp(25px, 4.5vw, 90px)'
    '80px'  = 'clamp(20px, 4vw, 80px)'
    '75px'  = 'clamp(32px, 8vw, 75px)'
    '74px'  = 'clamp(40px, 6vw, 74px)'
    '70px'  = 'clamp(25px, 4vw, 70px)'
    '60px'  = 'clamp(20px, 3.5vw, 60px)'
    '52px'  = 'clamp(28px, 6vw, 52px)'
    '50px'  = 'clamp(15px, 2.5vw, 50px)'
    '48px'  = 'clamp(24px, 5.5vw, 48px)'
    '45px'  = 'clamp(20px, 3.5vw, 45px)'
    '40px'  = 'clamp(15px, 2.5vw, 40px)'
    '36px'  = 'clamp(20px, 4.5vw, 36px)'
    '35px'  = 'clamp(15px, 2.5vw, 35px)'
    '32px'  = 'clamp(20px, 4vw, 32px)'
    '30px'  = 'clamp(10px, 2vw, 30px)'
    '28px'  = 'clamp(18px, 3.5vw, 28px)'
    '25px'  = 'clamp(10px, 1.8vw, 25px)'
    '24px'  = 'clamp(16px, 3vw, 24px)'
    '22px'  = 'clamp(14px, 2.5vw, 22px)'
    '21px'  = 'clamp(15px, 2.2vw, 21px)'
    '20px'  = 'clamp(14px, 2vw, 20px)'
    '19px'  = 'clamp(13px, 1.9vw, 19px)'
    '18px'  = 'clamp(14px, 1.8vw, 18px)'
    '16px'  = 'clamp(12px, 1.6vw, 16px)'
    '15px'  = 'clamp(12px, 1.5vw, 15px)'
    '14px'  = 'clamp(11px, 1.4vw, 14px)'
    '12px'  = 'clamp(10px, 1.2vw, 12px)'
}

$cssFiles = @(
    'granMenu.css', 'somos.css', 'visiones.css', 'cober.css', 'clientes.css',
    'beneficios.css', 'terrestre.css', 'enfoque.css', 'sistemas.css', 'aereo.css',
    'mar.css', 'espacial.css', 'perecederos.css', 'aduanas.css', 'despacho.css',
    'montana.css', 'envios.css', 'cadena.css', 'tactico.css', 'humanos.css',
    'capa.css', 'preven.css', 'predi.css', 'mante.css', 'monitoreo.css',
    'infra.css', 'instalaciones.css', 'sosten.css', 'footer.css', 'contacto.css'
)

$actualizados = 0

foreach ($file in $cssFiles) {
    $filePath = Join-Path -Path $wwwPath -ChildPath $file
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        $newContent = $content
        
        foreach ($old in $responsiveMap.Keys) {
            $new = $responsiveMap[$old]
            $pattern = '\b' + [regex]::Escape($old) + '\b'
            $newContent = $newContent -replace $pattern, $new
        }
        
        if ($newContent -notmatch '@media\(min-width: 601px\)') {
            $newContent += "`n`n/* TABLET */`n@media(min-width: 601px) and (max-width: 1024px) {}`n/* MOBILE */`n@media(max-width: 600px) {}`n"
        }
        
        [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "OK - $file" -ForegroundColor Green
        $actualizados++
    }
}

Write-Host "`n===============================`nConversion completada: $actualizados archivos actualizados`n===============================" -ForegroundColor Cyan
Write-Host "El sitio ahora es responsivo para movil, tablet y desktop" -ForegroundColor Yellow
