/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

export const Banner = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <img
      style={{maxHeight: 72 + 'vh'}}
      src={colorMode === 'light' ? 'public/visioncortex-logo-square.svg' : 'public/visioncortex-logo-square-light.svg'}
    />
  )
}
