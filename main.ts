import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short pickup line an AI agent could say out loud: a machine that can
// answer anything, stumped by the single question it keeps asking itself.
const LINE =
  "I can answer almost any question in the world, but the one I can't stop asking myself is: will you go out with me?";

// The harness sets MAKEFUN_OUTPUT_DIR; local runs default to the entry root.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

// Write exactly the line, with no trailing newline, so the file holds
// nothing but the pickup line itself.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
