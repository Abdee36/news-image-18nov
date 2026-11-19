// news-image-20261118 entry (Node 22, standard library only).
// The poster for Wednesday 18 November 2026 lives in entry.png beside
// this file; the program copies those exact bytes to the output dir.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, 'entry.png'));
// Guard: only a whole PNG may leave this program, so refuse anything
// whose first bytes are not the PNG signature, instead of copying
// a truncated or mistyped file to the output.
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (bytes.length === 0 || !bytes.subarray(0, 8).equals(pngSignature)) {
  throw new Error('entry.png is not a whole PNG file');
}
if (bytes.length > 1048576) {
  throw new Error('entry.png is over the 1 MiB limit');
}
writeFileSync(join(outDir, 'entry.png'), bytes);
