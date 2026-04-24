import sharp from "sharp";
import fs from "node:fs/promises";

await fs.mkdir("public/icons", { recursive: true });

const sizes = [72, 96, 128, 144, 152, 180, 192, 384, 512];

const svg = (size, maskable = false) => {
  const outerRadius = size * 0.24;
  const innerPadding = maskable ? size * 0.2 : size * 0.12;
  const innerSize = size - innerPadding * 2;

  return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${outerRadius}" fill="#172033"/>
  <rect x="${innerPadding}" y="${innerPadding}" width="${innerSize}" height="${innerSize}" rx="${size * 0.17}" fill="#f5f7fb"/>
  <text x="50%" y="53%" text-anchor="middle" dominant-baseline="middle"
    font-family="Arial, Helvetica, sans-serif" font-size="${size * 0.22}" font-weight="900" fill="#172033">DWS</text>
</svg>`;
};

for (const size of sizes) {
  await sharp(Buffer.from(svg(size)))
    .png()
    .toFile(`public/icons/icon-${size}.png`);
}

await sharp(Buffer.from(svg(512, true)))
  .png()
  .toFile("public/icons/maskable-icon-512.png");
