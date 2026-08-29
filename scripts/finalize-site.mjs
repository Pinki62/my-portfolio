import { access, readFile } from 'node:fs/promises';

const required = ['dist/client/index.html', 'dist/server/index.js', 'dist/server/wrangler.json', 'dist/.openai/hosting.json'];
await Promise.all(required.map((path) => access(path)));
const html = await readFile('dist/client/index.html', 'utf8');
if (!html.includes('Pinki Kaur') || !html.includes('og:image')) throw new Error('Portfolio metadata validation failed');
console.log('Angular Sites build is ready.');