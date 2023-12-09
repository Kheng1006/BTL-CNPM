const filePath = './assets/js/pages.txt';
const fs = require('fs');
// Read the content of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // The content of the file is in the 'data' variable
  var fileContent = data;
  
  // Now you can use the file content as needed
  console.log('File Content:', fileContent);
});
