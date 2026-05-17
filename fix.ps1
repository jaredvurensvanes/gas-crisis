$content = Get-Content -Path script.js -Raw -Encoding UTF8
$pattern = '(?i)<span([^>]*)font-weight:\s*900[^>]*font-size:\s*1\.[12]\d*rem([^>]*)>(.*?)</span>'

# We can use a MatchEvaluator to keep the id if it exists
$evaluator = [System.Text.RegularExpressions.MatchEvaluator] {
    param($match)
    
    $fullAttrs = $match.Groups[1].Value + $match.Groups[2].Value
    $innerHtml = $match.Groups[3].Value
    
    if ($fullAttrs -match 'id="([^"]+)"') {
        $idStr = ' id="' + $matches[1] + '"'
        return "<h3$idStr>$innerHtml</h3>"
    } else {
        return "<h3>$innerHtml</h3>"
    }
}

$newContent = [System.Text.RegularExpressions.Regex]::Replace($content, $pattern, $evaluator)
Set-Content -Path script.js -Value $newContent -Encoding UTF8
Write-Output "Spans successfully replaced with h3 tags!"
