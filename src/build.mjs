import { createWriteStream } from 'node:fs';
import { readFile, mkdir, rmdir, rm, writeFile } from 'node:fs/promises';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

let content = String(await readFile('./readme.md'));
const srcs = content.match(/src="https:\/\/deno.bundlejs.com[^"]+"/g).map(s => s.slice(5,-1));
await mkdir('../img');
for (const src of srcs) {
  const lib = new URL(src).searchParams.get('q');
  const path = `img/${lib.replace(/[^a-z]/ig, '')}.svg`;
  while (true) {
    try {
      const file = await fetch(src);
      if (!file.ok) continue;

      const target = `../${path}`;
      await rm(target).catch(() => {});
      const fileStream = createWriteStream(target, { flags: 'wx' });
      await finished(Readable.fromWeb(file.body).pipe(fileStream));
      break;
    } catch (err) {
      console.error(`${src} ${err}`);
    }
  }
  content = content.replace(src, `./${path}`);
}
writeFile('../readme.md', content);