const sharp = require("sharp");

const compressSharp = async (imagePath) => {
  const a = await sharp(imagePath)
    .resize(670, 502, {
      kernel: sharp.kernel.nearest,
      fit: "inside",
      background: { r: 255, g: 255, b: 255, alpha: 0.5 },
    })
    .toBuffer();
  return a;
};

module.exports = compressSharp;
