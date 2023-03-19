import { AuthContextProvider } from "./context/AuthContext"
import { MyRoutes } from "./routers/routes"

//This is the main component of the application, it is the one that is rendered in the index.js file, 
//it is the one that contains the context and the routes of the application
function App() {
  return (
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
  )
}

export default App
