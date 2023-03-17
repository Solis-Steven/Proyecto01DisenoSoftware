import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { RoutesProtector } from '../components';
import { UserAuth } from '../context/AuthContext';
import { FilterProvider } from '../context/FilterContext';
import { Home, Login } from '../pages';
import { Character } from '../pages/Character';
import ErrorPage from '../pages/ErrorPage';

 
export function MyRoutes() {
    const { user } =  UserAuth();

    const RequireAuth = ({ children }) => {
        return user ? children : <Navigate to={"/login"} />;
    }
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                <RequireAuth>
                    <FilterProvider>
                        <Home/>
                    </FilterProvider>
                </RequireAuth>} />
                <Route path='login' element={<Login/>} />
                <Route path='character' element={
                <RoutesProtector>
                    <Character/>
                </RoutesProtector>} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}