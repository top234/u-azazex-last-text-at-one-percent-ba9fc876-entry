// Last Text at One Percent — entry for u-azazex-last-text-at-one-percent-ba9fc876
//
// Concept: a dying phone sends its last text as an accusation, not a
// lament. The joke is the twist on the familiar "my battery ran out":
// the battery didn't run out on its own — the owner used the phone up,
// 11 hours of screen time in a single day. The punchline lands in the
// middle ("you used me up"), and the trailing "1%." is the phone
// flatlining mid-sentence. Deliberately avoids the tired
// "tell my charger I love her" cliché: no charger, no goodbye to an
// accessory — just the owner, caught red-handed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Screen time today: 11 hours. I didn't run out of battery — you used me up. 1%.";

// Competition gate: the entry must be 1-200 UTF-8 characters and more
// than whitespace, otherwise the grader rejects it outright.
function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(
      `entry text failed the 1-200 character gate: got ${length} characters`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry text failed the gate: text is only whitespace");
  }
}

function main(): void {
  validateEntry(TEXT);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
}

main();
