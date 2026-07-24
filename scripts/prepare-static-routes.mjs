import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const outDir = 'dist'
const indexPath = join(outDir, 'index.html')
const html = await readFile(indexPath, 'utf8')

const routes = [
  'symcode-docs',
  'impression-docs',
  'vtracer-docs',
  'shape-sense-docs',
  'reversi-docs',
]

await writeFile(join(outDir, '404.html'), html)

for (const route of routes) {
  const routeIndex = join(outDir, route, 'index.html')
  await mkdir(dirname(routeIndex), { recursive: true })
  await writeFile(routeIndex, html)
}

await copyFile('CNAME', join(outDir, 'CNAME'))
