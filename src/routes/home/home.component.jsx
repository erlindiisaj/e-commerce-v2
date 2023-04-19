import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar.component';
import MainPage from '../../components/mainpage/mainpage.component';
import BestSeller from '../../components/bestseller/bestseller.component';

const Home = () => {
  return (
    <Fragment>
      <MainPage />
      <BestSeller />
    </Fragment>
  );
};

export default Home;
