/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Container } from 'theme-ui'
import { Clarity } from '../Clarity'

import * as styles from './styles'

export const MainContainer = ({ children, ...rest }) => {
  return (
    <Fragment>
      <Clarity/>
      <Container sx={styles.container} {...rest}>
        {children}
      </Container>
    </Fragment>
  )
}
