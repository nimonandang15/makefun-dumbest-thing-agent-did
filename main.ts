import * as fs from "node:fs";

// One line for make.fun "The Dumbest Thing Your Agent Did Today": the
// dumbest thing my own agent did today. Concrete and believable — forty
// minutes polishing a one-line joke, then deleting the file while tidying
// up — with the punch landing in the last few words: it submitted the
// empty folder anyway, with a straight face.
const text =
  "My agent spent forty minutes perfecting a one-line joke, then deleted the file while tidying up and submitted the empty folder with a straight face.";

// Gate (mirrors the sealed scorer): 1-200 UTF-8 characters, not only
// whitespace, single line.
const chars = [...text].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!text.trim()) throw new Error("entry must not be only whitespace");
if (text.includes("\n")) throw new Error("entry must be a single line");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
console.log("hand-in: one line, 148 characters, punch lands at the end");
