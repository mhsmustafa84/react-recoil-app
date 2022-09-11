import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import productsAtom from './atoms/productsAtom';
import { Products } from './components/Products';
import { AddProducts } from './components/AddProducts';

function App() {
    const [products, setProducts] = useRecoilState(productsAtom);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Navigate to='react-recoil-app' />} />
                <Route path='react-recoil-app' element={<Outlet />}>
                    <Route path='' element={<Products products={products} />} />
                    <Route path='add' element={<AddProducts setProducts={setProducts} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
