/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Figure = (props) => {
  const imgSrc = props.src;
  const descText = (props.text)? props.text : '';
  return (
	<div>
		<img
		style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
		src={'public/vtracer/' + imgSrc}
		/>
		<h6 style={{textAlign: 'center'}}>
			{descText}
		</h6>
	</div>
  )
}
