import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Concept: a dying phone at 1% doesn't rage — it forgives itself and
// hands the guilt back to its owner. You opened TikTok "for 5 minutes"
// four hours ago. The phone has no regrets. The sting is the last two
// words: "You should." A joke with a bite, not a complaint.
// No charger cliche, no screen-time statistics.
const TEXT =
  "1% left. You opened TikTok 'for 5 minutes' four hours ago. I have no regrets. You should.";

function validateEntry(text: string): number {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return length;
}

function main(): void {
  validateEntry(TEXT);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT);
}

main();
