import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Products } from './components/Products';
import { AddProducts } from './components/AddProducts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Navigate to='react-recoil-app' />} />
                <Route path='react-recoil-app' element={<Outlet />}>
                    <Route path='' element={<Products />} />
                    <Route path='add' element={<AddProducts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
