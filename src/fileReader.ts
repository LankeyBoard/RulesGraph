import fs from "node:fs";

const readFile = (filename: string) => {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

function main() {
  readFile("generalRules.md");
}
main();
