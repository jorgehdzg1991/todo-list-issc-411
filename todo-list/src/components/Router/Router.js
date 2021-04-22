import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import TodosPage from '../../pages/TodosPage';
import UsersPage from '../../pages/UsersPage';
import TopNavbar from './TopNavbar';
import 'react-toastify/dist/ReactToastify.css';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <TopNavbar />
        <ToastContainer />
        <Switch>
          <Route path="/todos" component={TodosPage} />
          <Route path="/users" component={UsersPage} />
          <Redirect exact path="/" to="/todos" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
