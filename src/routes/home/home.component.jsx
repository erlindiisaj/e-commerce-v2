import { Fragment } from 'react';
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
