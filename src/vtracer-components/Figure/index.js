/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Figure = (props) => {
  let imgSrc = props.src;
  let descText = (props.text)? props.text : '';
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
