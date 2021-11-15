const sharp = require("sharp");

const compressSharpAvatar = async (imagePath) => {
  const a = await sharp(imagePath)
    .resize(200, 200, {
      kernel: sharp.kernel.nearest,
      fit: "inside",
      background: { r: 255, g: 255, b: 255, alpha: 0.5 },
    })
    .toBuffer();
  return a;
};

module.exports = compressSharpAvatar;
