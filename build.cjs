const fs = require('fs');
const Eleventy = require("@11ty/eleventy");

// TODO: ditch Eleventy 😠
(async function() {
  if (!fs.existsSync('_site')) {
    fs.mkdirSync('_site')
  }

  const elev = new Eleventy('src/');
  const output = await elev.toJSON();

  output.forEach((page) => {
    if (!page.inputPath.match(/\/index.pug$/)) {
      page.outputPath = page.outputPath.replace(/\/index\.html$/, '.html')
    }

    fs.writeFileSync(page.outputPath, page.content)
  })
})();