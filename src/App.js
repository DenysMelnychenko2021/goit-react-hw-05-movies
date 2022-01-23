import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import { AppBar } from 'components/appBar';

const HomePage = lazy(() =>
  import('components/pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const Movies = lazy(() =>
  import('components/pages/MoviesPage' /* webpackChunkName: "Movies" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    'components/pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    'components/pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */
  ),
);

function App() {
  return (
    <>
      <header className="header">
        <AppBar />
      </header>
      <section className="section">
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <Movies />
            </Route>
            <Route path="/movies/:idMovie">
              <MovieDetailsPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
        <ToastContainer position="top-center" />
      </section>
    </>
  );
}

export default App;
