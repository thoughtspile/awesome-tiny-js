import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from "zlib";
import { makeBadge } from 'badge-maker';
import prettyBytes from 'pretty-bytes';
import { execa } from 'execa';
import { buildSync } from 'esbuild';

await rm('../img', { recursive: true, force: true }).catch(() => {});
await mkdir('../img');
await mkdir('.tmp').catch(() => {});
await execa('npm', ['init', '-y'], { cwd: '.tmp' });

let content = String(await readFile('./readme.md'));
const srcs = content.match(/src="https:\/\/deno.bundlejs.com[^"]+"/g).map(s => s.slice(5,-1));

for (const src of srcs) {
  const imports = new URL(src).searchParams.get('q').split(',');
  const libs = imports.map(e => e.split('/').slice(0, e.startsWith('@') ? 2 : 1).join('/'));
  const memebers = decodeURIComponent(new URL(src).searchParams.get('treeshake') || '').replace(/[\[\]]/g, '');
  await execa('npm', ['i', ...libs], { cwd: '.tmp' });
  const code = imports.map((l, i) => {
    return memebers
      ? `export ${memebers} from '${l}'`
      : `export * from '${l}';export {default as d${i}} from '${l}';`;
  }).join(';\n');
  const bundle = buildSync({
		stdin: {
      contents: code,
      resolveDir: path.resolve('./.tmp')
    },
		bundle: true,
		minify: true,
		write: false,
    format: 'esm',
		target: 'es2020',
    alias: {
      unfetch: path.resolve(".tmp/node_modules/unfetch/dist/unfetch.mjs"),
    }
	}).outputFiles[0].text;
  if (bundle.length === 0) {
    console.error(`[error] empty: ${code}`)
  }
  const gzipSize = gzipSync(bundle).byteLength;
  
  const badgePath = `img/${libs.join('-').replace(/[^a-z-]/ig, '')}.svg`;
  const badgeSvg = makeBadge({
    message: prettyBytes(gzipSize),
    color: 'gray',
  });
  await writeFile(`../${badgePath}`, badgeSvg);
  content = content.replace(src, `./${badgePath}`);

  console.log(`${libs.join(',')}\t${prettyBytes(gzipSize)}`);
}

await writeFile('../readme.md', content);
