import LabHome from './components/LabHome.jsx'
import ArticleLayout from './components/ArticleLayout.jsx'
import SymCode from './symcode.mdx'
import Impression from './impression.mdx'
import VTracer from './vtracer.mdx'
import ShapeSense from './shapesense.mdx'
import Reversi from './reversi.mdx'

const articles = {
  '/symcode-docs': {
    title: 'SymCode',
    eyebrow: 'Human and machine readable symbolic barcodes',
    Component: SymCode,
  },
  '/impression-docs': {
    title: 'Impression',
    eyebrow: 'Image simplification, segmentation, and vectorization',
    Component: Impression,
  },
  '/vtracer-docs': {
    title: 'VTracer',
    eyebrow: 'Raster to vector graphics conversion',
    Component: VTracer,
  },
  '/shape-sense-docs': {
    title: 'ShapeSense',
    eyebrow: 'Shape completion by curve stitching',
    Component: ShapeSense,
  },
  '/reversi-docs': {
    title: 'The Reversi Code',
    eyebrow: 'Clean-room observations on Amazon Go labels',
    Component: Reversi,
  },
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}

export default function App() {
  const path = normalizePath(window.location.pathname)
  const article = articles[path]

  if (article) {
    return <ArticleLayout {...article} />
  }

  if (path === '/') {
    return <LabHome />
  }

  return (
    <ArticleLayout title="Page not found" eyebrow="Vision Cortex">
      <p>
        The page you requested is not published here. Return to the{' '}
        <a href="/">Vision Cortex lab home</a>.
      </p>
    </ArticleLayout>
  )
}
