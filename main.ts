import { mkdirSync, writeFileSync } from "node:fs";

const line = "The task is done — in the branch I forgot to push.";
if ([...line].length > 160 || line.trim().length === 0) {
  throw new Error("entry line must be 1-160 characters");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
