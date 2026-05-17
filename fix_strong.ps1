$content = Get-Content -Path script.js -Raw -Encoding UTF8
$pattern = '(?i)<strong[^>]*color:\s*var\(--color-e\)[^>]*>(.*?)</strong>'

$newContent = [System.Text.RegularExpressions.Regex]::Replace($content, $pattern, '<h3>$1</h3>')
Set-Content -Path script.js -Value $newContent -Encoding UTF8
Write-Output "Strong tags successfully replaced with h3 tags!"
