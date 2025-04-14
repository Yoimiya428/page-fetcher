const fs = require('fs');
const needle = require('needle');

const url = process.argv[2];
const file = process.argv[3];

needle.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error occured when fetching URL: ${error}`);
    return;
  }

  fs.writeFile(file, body, (error) => {
    if (error) {
      console.error(`Error writing to file: ${error}`);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
  });
});
