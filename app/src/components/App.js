import React from 'react'
import styled from 'styled-components'

const App = ({ children = undefined }) => (
  <AppContainer>
    {children}
  </AppContainer>
)

const AppContainer = styled.div`
  width: 100%;
`

export default App