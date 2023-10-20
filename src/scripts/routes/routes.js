import Detail from '../views/pages/detail';
import homePage from '../views/pages/home-page';
import Like from '../views/pages/like';

const routes = {
  '/': homePage, // default page
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
