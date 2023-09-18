import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './store/user/user.action';
import { Globalstyle } from './global.styles';
const Home = lazy(() => import('./routes/home/home.component'))
const Navigation = lazy(() => import('./routes/navigation/navigation.component'))
const Authentication = lazy(() => import('./routes/authentication/authentication.component'))
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))
const Product = lazy(() => import('./routes/product/product.component'))
const History = lazy(() => import('./routes/history/history.component'))

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Globalstyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path=':id' element={<Product />} />
          <Route path='history' element={<History />} />
        </Route>
      </Routes>
    </Suspense>

  );
};

export default App;
