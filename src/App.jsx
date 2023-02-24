import { AuthContextProvider, UserAuth } from "./context/AuthContext"
import { MyRoutes } from "./routers/routes"



function App() {
  // To know which user is logged in 
  // const { user, logOut } = UserAuth();

  return (
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
  )
}

export default App
