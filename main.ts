import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// This launcher only writes the poem; it never edits a byte of it.
// The poem is shaped as short, plain lines so the reader slows down
// on purpose: a harbor light, a breathing buoy, an unhurried tide.
// Blank lines give each image room to keep growing after the reading.
// Calm is shown through the water's patience, never stated as advice.

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

// A tiny deterministic summary so a replay always prints the same line.
function describeOutput(outDir: string, chars: number): void {
  const bytes = Buffer.byteLength(entry, "utf8");
  console.error(`[awe-text-v2] wrote entry.txt (${chars} chars, ${bytes} bytes) -> ${outDir}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, "entry.txt");
writeFileSync(target, entry, "utf8");
describeOutput(outputDir, entry.length);
