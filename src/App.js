import './app.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import SignUp from './routes/sign-up/sign-up.component';
import NavBar from './components/navbar/navbar.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
