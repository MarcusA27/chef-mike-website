import { cpSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, "dist");

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const entry of ["index.html", "styles.css", "_headers", "assets"]) {
  cpSync(resolve(root, entry), resolve(output, entry), { recursive: true });
}

console.log(`Prepared static site in ${output}`);
