const fs = require("fs");
const path = require("path");

const process = async (req, res, next) => {
  const { user, password } = req.body;
  const data = { user, password };
  const filePath = path.resolve(__dirname, "../user.json");

  try {
    // Membaca file JSON yang sudah ada
    const fileData = fs.readFileSync(filePath, "utf8");
    const extractedData = JSON.parse(fileData);

    // Menambahkan data baru ke array
    extractedData.push(data);

    // Menulis kembali data ke file JSON
    fs.writeFileSync(filePath, JSON.stringify(extractedData, null, 2));

    console.log("Data berhasil ditambahkan ke file JSON");
  } catch (err) {
    console.error(err);
  }

  next();
};

module.exports = process;