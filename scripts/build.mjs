import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { Script } from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const assets = {};
for (const name of ['character', 'sidebar', 'decor']) {
  const bytes = await readFile(resolve(root, 'assets', `${name}.png`));
  if (bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
    throw new Error(`assets/${name}.png must be a PNG file`);
  }
  assets[name] = `data:image/png;base64,${bytes.toString('base64')}`;
}
const css = await readFile(resolve(root, 'src/theme.css'), 'utf8');
const source = await readFile(resolve(root, 'src/client.js'), 'utf8');
const content = source
  .replace('/*__BOCCHI_ASSETS__*/ {}', () => JSON.stringify(assets))
  .replace('/*__BOCCHI_CSS__*/ ""', () => JSON.stringify(css));
if (content.includes('/*__BOCCHI_')) throw new Error('Unreplaced build template marker');
new Script(content, { filename: 'client.js' });
await mkdir(resolve(root, 'lib'), { recursive: true });
await writeFile(resolve(root, 'lib/client.js'), content, 'utf8');
console.log(`Built dsh-theme-bocchi-meow: ${(Buffer.byteLength(content) / 1024 / 1024).toFixed(2)} MiB, all artwork embedded; no network assets.`);
