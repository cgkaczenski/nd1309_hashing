import sha256 from "crypto-js/sha256.js";

const data1 = "Blockchain Rock!";
const dataObject = {
  id: 1,
  body: "With Object Works too",
  time: new Date().getTime().toString().slice(0, -3),
};

function generateHash(obj) {
  return sha256(JSON.stringify(obj));
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);
console.log(new Date().getTime().toString().slice(0, -3));
