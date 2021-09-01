import React, { Suspense } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

const LandingPage = React.lazy(
  () => import('../components/LandingPage/LandingPage')
);
const ChartPage = React.lazy(() => import('../components/ChartPage/ChartPage'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/stock-market/" component={ChartPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
