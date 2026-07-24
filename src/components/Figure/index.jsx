export const Figure = props => {
  const imgSrc = props.src
  const descText = props.text || ''
  const altText = props.alt ? props.alt : descText
  const width = props.width || null
  const height = props.height || null
  const maxWidth = props.maxWidth || '100%'
  const maxHeight = props.maxHeight || null

  return (
    <figure>
      <img
        alt={altText}
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width,
          height,
          maxWidth,
          maxHeight,
        }}
        src={'/' + imgSrc}
      />
      {descText && <figcaption style={{ textAlign: 'center' }}>{descText}</figcaption>}
    </figure>
  )
}
