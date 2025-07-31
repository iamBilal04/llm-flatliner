const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "../public/bomb.html");
const stream = fs.createWriteStream(outputPath);

stream.write("<!DOCTYPE html><html><head><title>Boobie Trap</title></head><body><!--");

const chunk = "H".repeat(258);
for (let i = 0; i < 81925; i++) {
stream.write(chunk);
}

stream.write("--><p>Get zeroed gonk. Thanks https://ache.one for details.</p></body></html>");
stream.end();