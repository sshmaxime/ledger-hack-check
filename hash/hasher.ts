import * as fs from "fs";
import * as CryptoJs from "crypto-js";

let lines = fs
  .readFileSync("ledger_hack.txt", "utf8")
  .split("\n")
  .filter(Boolean);

let m: Map<string, boolean> = new Map<string, boolean>();

var stream = fs.createWriteStream("hashed_ledger_hack.ts", { flags: "a" });
stream.write(
  "export const hashed_ledger_hack: Map<string, boolean> = new Map<string, boolean>([\n"
);

for (let i = 0; i != lines.length; i++) {
  const mailToSha = CryptoJs.SHA256(lines[i].split("|", 1)[0]).toString();

  let value = m.get(mailToSha);

  if (value === undefined) {
    m.set(mailToSha, true);
    if (i + 1 !== lines.length) {
      stream.write('["' + mailToSha + '", true],\n');
    } else {
      stream.write('["' + mailToSha + '", true]\n');
    }
  } else {
  }
}

stream.write("]);");
stream.end();
