import { mkdir, stat } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import sharp from "sharp";
import ffmpeg from "@ffmpeg-installer/ffmpeg";

const root = process.cwd();
const outDir = path.join(root, "public", "optimized");

const images = [
  {
    name: "hero-section-bg",
    source: "public/hero-section-bg.png",
    widths: [640, 1024, 1440, 1920],
    quality: 58,
  },
  {
    name: "nav-logo",
    source: "public/nav-logo.png",
    widths: [220],
    quality: 64,
  },
  {
    name: "footer-logo",
    source: "public/footer-logo.png",
    widths: [260],
    quality: 64,
  },
  {
    name: "footer-logo-mark",
    source: "public/footer-logo-mark.png",
    widths: [160],
    quality: 64,
  },
  {
    name: "about-team",
    source: "src/assets/about-team.jpg",
    widths: [480, 768, 1024],
    quality: 68,
  },
  {
    name: "about-section",
    source: "src/assets/about-section.jpeg",
    widths: [480, 768, 1024],
    quality: 68,
  },
  {
    name: "services-dashboard",
    source: "src/assets/yadri-services.png",
    widths: [640, 1024, 1536],
    quality: 66,
  },
  {
    name: "case-study-page-3",
    source: "src/assets/case-study/case-study-page-3.png",
    widths: [640, 960, 1280],
    quality: 66,
  },
  {
    name: "case-study-page-4",
    source: "src/assets/case-study/case-study-page-4.png",
    widths: [640, 960, 1280],
    quality: 66,
  },
  {
    name: "prop-commercial",
    source: "src/assets/prop-commercial.jpg",
    widths: [480, 768, 1024],
    quality: 68,
  },
  {
    name: "prop-residential",
    source: "src/assets/prop-residential.jpg",
    widths: [480, 768, 1024],
    quality: 68,
  },
  {
    name: "prop-affordable",
    source: "src/assets/prop-affordable.jpg",
    widths: [480, 768, 1024],
    quality: 68,
  },
  {
    name: "prop-military",
    source: "src/assets/prop-military.jpg",
    widths: [480, 768, 1024],
    quality: 68,
  },
  {
    name: "prop-sfr",
    source: "src/assets/prop-sfr.jpg",
    widths: [480, 768, 1024],
    quality: 68,
  },
  {
    name: "prop-mixed",
    source: "src/assets/prop-mixed.jpg",
    widths: [480, 768, 1024],
    quality: 68,
  },
];

async function fileSize(file) {
  const info = await stat(file);
  return `${Math.round(info.size / 1024)} KB`;
}

async function optimizeImages() {
  await mkdir(outDir, { recursive: true });

  for (const image of images) {
    const source = path.join(root, image.source);
    const metadata = await sharp(source).metadata();

    for (const width of image.widths) {
      const targetWidth = Math.min(width, metadata.width ?? width);
      const output = path.join(outDir, `${image.name}-${targetWidth}.webp`);

      await sharp(source)
        .rotate()
        .resize({
          width: targetWidth,
          withoutEnlargement: true,
        })
        .webp({
          quality: image.quality,
          effort: 6,
          smartSubsample: true,
          alphaQuality: 80,
        })
        .toFile(output);

      console.log(`${image.source} -> public/optimized/${path.basename(output)} (${await fileSize(output)})`);
    }
  }
}

async function optimizeVideo() {
  const source = path.join(root, "public", "hero-bg-video.mp4");
  const output = path.join(outDir, "hero-bg-video-optimized.mp4");

  await new Promise((resolve, reject) => {
    const args = [
      "-y",
      "-i",
      source,
      "-an",
      "-vf",
      "scale='min(1280,iw)':-2,fps=24",
      "-c:v",
      "libx264",
      "-profile:v",
      "main",
      "-preset",
      "slow",
      "-crf",
      "34",
      "-movflags",
      "+faststart",
      "-pix_fmt",
      "yuv420p",
      output,
    ];

    const child = spawn(ffmpeg.path, args, { stdio: "inherit" });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited with code ${code}`));
    });
  });

  console.log(`public/hero-bg-video.mp4 -> public/optimized/hero-bg-video-optimized.mp4 (${await fileSize(output)})`);
}

await optimizeImages();
await optimizeVideo();
