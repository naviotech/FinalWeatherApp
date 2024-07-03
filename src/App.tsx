
import { UbicationProvider } from "./context/contextUbi"
import Header from "./layout/Header"
function App() {
  
  return (
    <UbicationProvider>
      <Header/>
    </UbicationProvider>
  )
}

export default App
