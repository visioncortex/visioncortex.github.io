import React from 'react'
import { createRoot } from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'
import App from './App.jsx'
import './styles.css'

const mdxComponents = {
  a: props => (
    <a
      {...props}
      target={props.href?.startsWith('http') || props.href?.startsWith('//') ? '_blank' : props.target}
      rel={props.href?.startsWith('http') || props.href?.startsWith('//') ? 'noreferrer' : props.rel}
    />
  ),
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MDXProvider components={mdxComponents}>
      <App />
    </MDXProvider>
  </React.StrictMode>,
)
