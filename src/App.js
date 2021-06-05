import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));

function App() {
  return (

    <Suspense fallback={<p>Loading....</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGH_UP} component={SignUp} />
      </Switch>
    </Suspense>
  );
}

export default App;
