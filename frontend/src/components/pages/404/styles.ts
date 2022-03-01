// External libraries
import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h5 {
    color: ${theme.colors.primary}
  }
`
