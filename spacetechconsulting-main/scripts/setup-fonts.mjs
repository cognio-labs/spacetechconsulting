import https from "node:https";
import fs from "node:fs";
import path from "node:path";

const fontsDir = path.join(process.cwd(), "public", "fonts");
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });

https.get(
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap",
  {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  },
  (res) => {
    let css = "";
    res.on("data", (chunk) => (css += chunk));
    res.on("end", async () => {
      const blocks = css.split("@font-face");
      const downloads = [];
      for (const b of blocks) {
        if (!b.includes("U+0000-00FF")) continue;
        const weightMatch = b.match(/font-weight:\s*(\d+)/);
        const urlMatch = b.match(/url\((https:[^)]+\.woff2)\)/);
        if (weightMatch && urlMatch) {
          downloads.push({ weight: weightMatch[1], url: urlMatch[1] });
        }
      }
      console.log("Found latin weights:", downloads);
      for (const d of downloads) {
        const fileName = `plus-jakarta-sans-${d.weight}.woff2`;
        const filePath = path.join(fontsDir, fileName);
        await new Promise((resolve) => {
          https.get(d.url, (fileRes) => {
            const stream = fs.createWriteStream(filePath);
            fileRes.pipe(stream);
            stream.on("finish", () => {
              console.log(
                "Saved:",
                fileName,
                fs.statSync(filePath).size,
                "bytes"
              );
              resolve();
            });
          });
        });
      }
    });
  }
);
