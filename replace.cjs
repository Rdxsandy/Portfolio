const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
};

const files = walk('./src/components');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/border-white\/(\d+)/g, 'border-border/$1');
  content = content.replace(/bg-white\/(\d+)/g, 'bg-foreground/$1');
  content = content.replace(/via-white\/(\d+)/g, 'via-border/$1');
  fs.writeFileSync(file, content, 'utf8');
});

console.log("Done");
