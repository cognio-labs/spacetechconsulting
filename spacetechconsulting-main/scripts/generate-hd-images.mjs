import { mkdir, stat, copyFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public", "optimized");

const jobs = [
  {
    name: "hero-section-bg",
    source: "public/hero-section-bg.png",
    widths: [640, 960, 1280, 1600, 1920, 2560, 3840],
    avifQuality: 78,
    webpQuality: 85,
    sharpen: true,
  },
  {
    name: "hero-section-bg-clean",
    source: "public/hero-section-bg.png",
    widths: [640, 960, 1280, 1600, 1920, 2560, 3840],
    avifQuality: 78,
    webpQuality: 85,
    sharpen: true,
  },
  {
    name: "about-team",
    source: "src/assets/about-team.jpg",
    widths: [480, 768, 1024, 1536],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "about-section",
    source: "src/assets/about-section.jpeg",
    widths: [480, 768, 1024, 1536],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "services-dashboard",
    source: "src/assets/services-dashboard.jpg",
    widths: [640, 960, 1280, 1536, 1800],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "case-study-page-3",
    source: "src/assets/case-study/case-study-page-3.png",
    widths: [640, 960, 1280, 1600],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "case-study-page-4",
    source: "src/assets/case-study/case-study-page-4.png",
    widths: [640, 960, 1280, 1600],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "prop-commercial",
    source: "src/assets/prop-commercial.jpg",
    widths: [480, 768, 1024, 1400],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "prop-residential",
    source: "src/assets/prop-residential.jpg",
    widths: [480, 768, 1024, 1400],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "prop-affordable",
    source: "src/assets/prop-affordable.jpg",
    widths: [480, 768, 1024, 1400],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "prop-military",
    source: "src/assets/prop-military.jpg",
    widths: [480, 768, 1024, 1400],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "prop-sfr",
    source: "src/assets/prop-sfr.jpg",
    widths: [480, 768, 1024, 1400],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "prop-mixed",
    source: "src/assets/prop-mixed.jpg",
    widths: [480, 768, 1024, 1400],
    avifQuality: 75,
    webpQuality: 82,
  },
  {
    name: "nav-logo",
    source: "src/assets/nav-logo.png",
    widths: [220, 440, 600],
    avifQuality: 80,
    webpQuality: 88,
  },
  {
    name: "footer-logo",
    source: "src/assets/footer-logo.png",
    widths: [260, 400, 600],
    avifQuality: 80,
    webpQuality: 88,
  },
];

async function run() {
  await mkdir(outDir, { recursive: true });
  console.log("Generating high-definition AVIF and WebP responsive images...");

  const report = [];

  for (const job of jobs) {
    const srcPath = path.join(root, job.source);
    const meta = await sharp(srcPath).metadata();
    console.log(`\nProcessing ${job.name} (Source: ${meta.width}x${meta.height} ${meta.format})`);

    for (const width of job.widths) {
      let pipeline = sharp(srcPath).rotate();

      // Only resize if different from source or target specified
      if (width > meta.width) {
        // High quality Lanczos upsampling for high-DPI
        pipeline = pipeline.resize(width, null, {
          kernel: sharp.kernel.lanczos3,
          fit: "cover",
        });
        if (job.sharpen) {
          pipeline = pipeline.sharpen({ sigma: 0.8, m1: 0.5, m2: 2.0 });
        }
      } else {
        pipeline = pipeline.resize(width, null, {
          kernel: sharp.kernel.lanczos3,
          fit: "cover",
        });
      }

      // Generate AVIF
      const avifOut = path.join(outDir, `${job.name}-${width}.avif`);
      await pipeline
        .clone()
        .avif({
          quality: job.avifQuality,
          effort: 6,
          chromaSubsampling: "4:2:0",
        })
        .toFile(avifOut);

      // Generate WebP
      const webpOut = path.join(outDir, `${job.name}-${width}.webp`);
      await pipeline
        .clone()
        .webp({
          quality: job.webpQuality,
          effort: 6,
          smartSubsample: true,
        })
        .toFile(webpOut);

      const avifSize = (await stat(avifOut)).size;
      const webpSize = (await stat(webpOut)).size;

      console.log(
        `  ${width}w: AVIF = ${Math.round(avifSize / 1024)} KB, WebP = ${Math.round(webpSize / 1024)} KB`
      );

      report.push({
        name: job.name,
        width,
        avifKB: Math.round(avifSize / 1024),
        webpKB: Math.round(webpSize / 1024),
      });
    }
  }

  console.log("\nDone generating all responsive images!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
