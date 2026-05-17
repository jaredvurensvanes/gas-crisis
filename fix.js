const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf-8');

// Replace spans that act as headers
const regex = /<span([^>]*)font-weight:\s*900[^>]*font-size:\s*1\.[12]\d*rem([^>]*)>(.*?)<\/span>/g;

content = content.replace(regex, (match, p1, p2, p3) => {
    // Check if it has an id
    const idMatch = match.match(/id="([^"]+)"/);
    const idStr = idMatch ? ` id="${idMatch[1]}"` : '';
    return `<h3${idStr}>${p3}</h3>`;
});

fs.writeFileSync('script.js', content, 'utf-8');
console.log('Done replacing spans with h3 tags.');
