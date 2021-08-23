import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

const LandingPage = React.lazy(
  () => import('../components/LandingPage/LandingPage')
);
const ChartPage = React.lazy(() => import('../components/ChartPage/ChartPage'));

function App() {
  return (
    <div className="centered">
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/market-charts" component={ChartPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
