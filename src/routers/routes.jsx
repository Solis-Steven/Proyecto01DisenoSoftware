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
import { Episode } from '../pages/Episode';
import ErrorPage from '../pages/ErrorPage';

//This is the main routes of the application
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
                <Route path='episode' element={<RoutesProtector>
                    <Episode/>
                </RoutesProtector>} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}