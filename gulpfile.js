// gulpfile.js
const { src, dest } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");
const img = () => src(["./assets/images/*.png", "./assets/images/gallery/**/*jpg","./assets/images/slider/*jpg"])
  .pipe(sharpResponsive({
    formats: [
      // jpeg
      // { width: 640, format: "jpeg", rename: { suffix: "-sm" } },
      // { width: 768, format: "jpeg", rename: { suffix: "-md" } },
      // { width: 1024, format: "jpeg", rename: { suffix: "-lg" } },
      // webp
      { width: 270, format: "webp", rename: { suffix: "-sm2" } },
      { width: 400, format: "webp", rename: { suffix: "-md4" } },
      { width: 560, format: "webp", rename: { suffix: "-md5" } },
      { width: 1920, format: "webp", rename: { suffix: "-lg" } },
      // avif
      // { width: 640, format: "avif", rename: { suffix: "-sm" } },
      // { width: 768, format: "avif", rename: { suffix: "-md" } },
      // { width: 1024, format: "avif", rename: { suffix: "-lg" } },
    ]
  }))
  .pipe(dest("./assets/images/All"));

module.exports = {
  img,
};