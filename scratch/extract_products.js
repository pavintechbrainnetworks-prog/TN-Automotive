import fs from 'fs';
import path from 'path';

const dir = 'src/components/Products/ProductPages';
const results = [];

for (let i = 1; i <= 20; i++) {
  const filePath = path.join(dir, `Product${i}.jsx`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const h1Match = content.match(/<h1>(.*?)<\/h1>/);
    // Find the paragraph inside the hero section or the first paragraph after h1
    // The hero paragraph is typically within the productX-hero-content or similar
    const heroContentStart = content.indexOf('hero-content') !== -1 ? content.indexOf('hero-content') : content.indexOf('<h1>');
    const pMatch = content.slice(heroContentStart).match(/<p>(.*?)<\/p>/);
    
    results.push({
      id: i,
      title: h1Match ? h1Match[1].trim() : `Product ${i}`,
      description: pMatch ? pMatch[1].trim() : ''
    });
  }
}

console.log(JSON.stringify(results, null, 2));
