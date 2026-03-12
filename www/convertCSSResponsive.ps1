$wwwPath = Get-Location
Write-Host "Iniciando conversion de CSS a responsivos..." -ForegroundColor Green

$responsiveMap = @{
    '75px'  = 'clamp(32px, 8vw, 75px)'
    '52px'  = 'clamp(28px, 6vw, 52px)'
    '48px'  = 'clamp(24px, 5.5vw, 48px)'
    '36px'  = 'clamp(20px, 4.5vw, 36px)'
    '32px'  = 'clamp(20px, 4vw, 32px)'
    '28px'  = 'clamp(18px, 3.5vw, 28px)'
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
    '74px'  = 'clamp(40px, 6vw, 74px)'
    '70px'  = 'clamp(25px, 4vw, 70px)'
    '60px'  = 'clamp(20px, 3.5vw, 60px)'
    '50px'  = 'clamp(15px, 2.5vw, 50px)'
    '45px'  = 'clamp(20px, 3.5vw, 45px)'
    '40px'  = 'clamp(15px, 2.5vw, 40px)'
    '35px'  = 'clamp(15px, 2.5vw, 35px)'
    '30px'  = 'clamp(10px, 2vw, 30px)'
    '25px'  = 'clamp(10px, 1.8vw, 25px)'
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
$sinCambios = 0

foreach ($file in $cssFiles) {
    $filePath = Join-Path -Path $wwwPath -ChildPath $file
    
    if (Test-Path $filePath) {
        $originalContent = Get-Content $filePath -Raw -Encoding UTF8
        $newContent = $originalContent
        
        foreach ($old in $responsiveMap.Keys) {
            $new = $responsiveMap[$old]
            $newContent = $newContent -replace [regex]::Escape($old), $new
        }
        
        if ($newContent -notmatch '@media') {
            $newContent += "`n`n/* TABLET - 601px a 1024px */`n@media(min-width: 601px) and (max-width: 1024px) {`n}`n"
            $newContent += "`n/* MOBILE - menos de 600px */`n@media(max-width: 600px) {`n}`n"
        }
        
        [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
        
        if ($originalContent -ne $newContent) {
            Write-Host "OK: $file" -ForegroundColor Green
            $actualizados++
        } else {
            Write-Host "SIN CAMBIOS: $file" -ForegroundColor Yellow
            $sinCambios++
        }
    } else {
        Write-Host "NO ENCONTRADO: $file" -ForegroundColor Red
    }
}

Write-Host "`nRESUMEN: Actualizados=$actualizados, Sin cambios=$sinCambios" -ForegroundColor Cyan
