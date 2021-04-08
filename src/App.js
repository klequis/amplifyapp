// import './App.css'
import withThemeProvider from './withThemeProvider'
import Section from './Section'
import Text from './Text'
import injectSheet from 'react-jss'

function App({ classes }) {
  return (
    <Section background="dark" style={{ height: '100%' }}>
      <Text variant="h1" align="center">
        <span style={{ letterSpacing: '.1rem' }}>Private Money Tech</span>
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

const styles = (theme) => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      fontSize: '12pt',
      [theme.breakpoints.up('sm')]: {
        fontSize: '13pt'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '14pt'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '16pt'
      },
      backgroundColor: '#005ca8 !important',
      height: '100%'
    },
    body: {
      margin: 0,
      fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.65,
      webkitTextSizeAdjust: 'none',
      msOverflowStyle: 'scrollbar',
      '@media print': {
        backgroundColor: 'white',
        minWidth: 320
      }
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    p: {
      margin: 0
    }
  }
})

export default withThemeProvider(injectSheet(styles)(App))
