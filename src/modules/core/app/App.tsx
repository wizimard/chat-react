import { Suspense } from "react";
import routes from "../routes";
import { ReduxProvider } from "./components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

const App = () => {

  const isAuth = false;

  return (
    <ReduxProvider>
      <Router>
        <Routes>
          {isAuth ? (
            <>
            {routes.private.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Suspense fallback={<span>loading...</span>}>
                    <route.element />
                  </Suspense>
                }
              />
            ))}
            </>
          ) : (
            <>
            {routes.public.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Suspense fallback={<span>loading...</span>}>
                    <route.element />
                  </Suspense>
                }
              />
            ))}
            </>
          )}
          <Route
            path='*'
            element={
              <Navigate to={isAuth ? routes.private[0].path : routes.public[0].path} replace />
            }
          />
        </Routes>
      </Router>
    </ReduxProvider>
  )
}

export default App