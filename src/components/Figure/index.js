/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Figure = (props) => {
  let imgSrc = props.src;
  let descText = props.text || '';
  let altText = props.alt ? props.alt : descText;
  let width = props.width || null;
  let height = props.height || null;
  let maxWidth = props.maxWidth || 100 + '%';
  let maxHeight = props.maxHeight || null;
  return (
  <div>
    <img
      alt={altText}
      style={{
        display: 'block',
        marginLeft: 'auto', marginRight: 'auto',
        width, height, maxWidth, maxHeight,
      }}
      src={'/public/' + imgSrc}
    />
    <h4 style={{textAlign: 'center'}}>
      {descText}
    </h4>
  </div>
  )
}
