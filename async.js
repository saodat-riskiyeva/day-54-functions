const fs = require("fs/promises");

async function readFile() {
  let fileData;

  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    return;
  }

  console.log(fileData.toString());
}

readFile();
