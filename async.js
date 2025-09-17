const fs = require("fs/promises");

async function readFile() {
  let fileData;

  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
    return;
  }

  console.log("File parsing is done!");
  console.log(fileData.toString());

  console.log("Hi there!");
}

readFile();
