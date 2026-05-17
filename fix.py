import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any span that acts as a header (has font-weight: 900 and font-size: 1.2rem or 1.15rem)
# If it has an id, keep the id.
def replace_span(match):
    id_match = re.search(r'id=\"([^\"]+)\"', match.group(0))
    id_str = f' id="{id_match.group(1)}"' if id_match else ''
    # Replace with h3
    inner_text = match.group(1)
    return f'<h3{id_str}>{inner_text}</h3>'

# Regex to match spans with font-weight: 900 and font-size >= 1.15rem
# In the original file, it was: font-weight: 900; font-size: 1.2rem
# Or: font-weight: 900; font-size: 1.15rem
content = re.sub(r'<span[^>]*font-weight: 900[^>]*font-size: 1\.[12]\d*rem[^>]*>(.*?)</span>', replace_span, content)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done replacing spans with h3 tags.")
