const crypto = require("crypto");

const sha1 = "23:26:ED:3C:F2:B5:CC:96:1C:CB:5B:12:CF:C8:07:EC:43:A1:12:1B";

const bytes = Buffer.from(sha1.replace(/:/g, ""), "hex");
const keyHash = crypto.createHash("sha1").update(bytes).digest("base64");

console.log(keyHash);