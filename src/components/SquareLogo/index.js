/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

export const SquareLogo = () => {
  const colorMode = useColorMode()[0]
  return (
    <img
      alt=''
      style={{maxHeight: 72 + 'vh'}}
      src={colorMode === 'light' ? '/public/visioncortex-logo-square.svg' : '/public/visioncortex-logo-square-light.svg'}
    />
  )
}
