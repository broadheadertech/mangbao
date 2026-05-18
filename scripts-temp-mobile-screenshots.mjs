// Drive the live /presentation route at iPhone 14 viewport (390×844)
// and screenshot every scene. Then do a tablet pass (768×1024) for comparison.
import { chromium, devices } from "playwright";
import fs from "node:fs";

const SCENES = ["hero", "menu", "mascot", "packaging", "kiosk", "voice", "cta"];
const OUT = "c:/tmp/mobile-shots";
fs.mkdirSync(OUT, { recursive: true });

async function captureViewport(label, viewport) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    ...viewport,
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  // Hit the showcase
  await page.goto("http://localhost:5173/presentation", { waitUntil: "networkidle" });
  await page.waitForTimeout(800); // let initial scene settle

  for (const id of SCENES) {
    // Scroll the scene into view inside the .sc-root scroll container
    await page.evaluate((sceneId) => {
      const target = document.querySelector(`#${sceneId}`);
      if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
    }, id);
    await page.waitForTimeout(700); // wait for animations + image load

    const file = `${OUT}/${label}-${id}.png`;
    await page.screenshot({ path: file, fullPage: false });
    console.log(`  ${label}-${id}.png`);
  }

  // Also screenshot the marketing site root in this viewport
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/${label}-home.png`, fullPage: false });
  console.log(`  ${label}-home.png`);

  // Marketing site - scroll to menu/locations to test stacking
  await page.evaluate(() => document.querySelector("#menu")?.scrollIntoView());
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/${label}-home-menu.png`, fullPage: false });
  console.log(`  ${label}-home-menu.png`);

  await browser.close();
}

console.log("iPhone 14 (390×844)");
await captureViewport("iphone", { viewport: { width: 390, height: 844 } });

console.log("iPad (768×1024)");
await captureViewport("ipad", { viewport: { width: 768, height: 1024 } });

console.log("Done.");
