import { ThemeProvider } from "styled-components"
import EstiloGlobal, { Container } from "./styles"
import tema from "./theme/tema"
import Cabecalho from "./components/Cabecalho"
import Hero from "./components/Hero"
import ListaVagas from "./containers/ListaVagas"

function App() {
  return (
    <ThemeProvider theme={tema}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
