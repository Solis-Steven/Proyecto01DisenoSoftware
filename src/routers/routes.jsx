import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Home, Login } from '../pages';


export function MyRoutes() {
    const { user } =  UserAuth();

    const RequireAuth = ({ children }) => {
        return user ? children : <Navigate to={"/login"} />;
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RequireAuth>
                    <Home/>
                </RequireAuth>} />
                <Route path='login' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
}