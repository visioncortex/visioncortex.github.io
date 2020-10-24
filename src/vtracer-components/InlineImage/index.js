/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

export const InlineImage = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const imgSrc = props.src;
  const invSrc = (props.invSrc)? props.invSrc : '';
  
return (
	<img
		style={{verticalAlign: 'middle'}}
		src={colorMode === 'light'? imgSrc : invSrc}
	/>
)
}
