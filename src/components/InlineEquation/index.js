/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

export const InlineEquation = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const imgSrc = props.src;
  const invSrc = (props.invSrc)? props.invSrc : '';

  return (
    <img
      style={{height: 2 + 'em', verticalAlign: 'middle'}}
      src={colorMode === 'light'? imgSrc : invSrc}
    />
  )
}