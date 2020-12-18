/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Figure = (props) => {
  let imgSrc = props.src;
  let descText = props.text || '';
  let height = props.height || null;
  return (
  <div>
    <img
      alt={descText}
      style={{
        display: 'block',
        marginLeft: 'auto', marginRight: 'auto',
        maxWidth: 100 + '%', height
      }}
      src={'/public/' + imgSrc}
    />
    <h4 style={{textAlign: 'center'}}>
      {descText}
    </h4>
  </div>
  )
}
