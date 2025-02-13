// const fs = require("fs/promises");

// function myReadFile() {
//     const res = fs.readFile("file.txt", "utf8");
//     res.then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     });
// }

// myReadFile();

const fs = require("fs");

async function writeFileAsync() {
    try {
        const data =
            "Hello, Ayush! This is a file written using async/await in Node.js.";
        await fs.writeFile("example.txt", data, "utf8");
        console.log("File has been written successfully!");
    } catch (error) {
        console.error("Error writing file:", error);
    }
}

async function readFileASync() {
    try {
        const data = await fs.readFile("example.txt", "utf8");
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

// writeFileAsync();
readFileASync();
