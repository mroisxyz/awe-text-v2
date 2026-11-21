import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = [
  "The harbor keeps a light on",
  "for boats that will not come back.",
  "",
  "That is not sadness. That is only",
  "how far the water goes.",
  "",
  "Somewhere a buoy goes on breathing",
  "in the dark, slower than you,",
  "and the tide does not hurry",
  "to answer it.",
  "",
].join("\n");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, "entry.txt");
writeFileSync(target, entry, "utf8");
console.error(`[awe-text-v2] wrote entry.txt (${entry.length} chars, ${Buffer.byteLength(entry, "utf8")} bytes) to ${target}`);
