/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

export const Banner = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <img
      src={colorMode === 'light' ? 'public/visioncortex-banner.svg' : 'public/visioncortex-banner-light.svg'}
    />
  )
}
