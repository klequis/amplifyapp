// import './App.css'
import withThemeProvider from './withThemeProvider'
import Section from './Section'
import Text from './Text'

function App({ classes }) {
  return (
    <Section background="dark">
      <Text variant="h1" align="center">
        Private Money Tech
      </Text>
      <Text variant="h2" align="center">
        Easy - Informative - Private
      </Text>
      <Text variant="body1" align="center">
        We are just getting started.
      </Text>
      <Text variant="body1" align="center">
        Contact: carl@private-money-tech.com
      </Text>
    </Section>
  )
}

export default withThemeProvider(App)
