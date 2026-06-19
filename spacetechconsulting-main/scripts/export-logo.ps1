Add-Type -AssemblyName System.Drawing

$src = "src\assets\nav-logo.png"
$dst = "public\spacetech-logo-5000.png"
$svgDst = "public\spacetech-logo.svg"

$img = [System.Drawing.Image]::FromFile($src)
$width = 5000
$height = [int]($img.Height * $width / $img.Width)
$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)

$graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
$graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.Clear([System.Drawing.Color]::Transparent)
$graphics.DrawImage($img, 0, 0, $width, $height)

$bmp.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)

$base64 = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes($src))
$svg = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800" width="1600" height="800" role="img" aria-labelledby="title desc">
  <title id="title">SpaceTech Consulting logo</title>
  <desc id="desc">Exact SpaceTech Consulting logo artwork preserved from the supplied transparent PNG source.</desc>
  <image href="data:image/png;base64,$base64" x="0" y="0" width="1600" height="800" preserveAspectRatio="xMidYMid meet" />
</svg>
"@
[System.IO.File]::WriteAllText($svgDst, $svg, [System.Text.Encoding]::UTF8)

$graphics.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Output "$dst $width x $height"
Write-Output $svgDst
