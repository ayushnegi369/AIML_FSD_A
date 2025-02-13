const fs = require("fs");

const readData = () => {
    try {
        const data = fs.readFileSync("file.txt", "utf8");
        console.log(data);
    } catch (err) {
        console.error("Error reading file:", err);
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync("file.txt", data);
    } catch (err) {
        console.error("Error writing file:", err);
    }
};

const readDataAsync = () => {
    fs.readFile("file.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log(data);
    });
};

const writeDataAsync = (data) => {
    fs.writeFile("file.txt", data, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
    });
};

module.exports = { readData, writeData, readDataAsync, writeDataAsync };
