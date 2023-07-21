import { Suspense, useEffect, useState } from "react";
import routes from "../../routes";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { useSelector } from "react-redux";
import { userActions, userSelectors } from "@/modules/auth";
import { useAppDispatch } from "@/hooks/redux";
import constants from "@/constants/constants";

const AppRouter = () => {

  const dispatch = useAppDispatch();

  const user = useSelector(userSelectors.useUser);

  const [isCheckedAuth, setIsCheckedAuth] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(constants.token)) {
      setIsCheckedAuth(true);
    }

    (async() => {
      try {
        await dispatch(userActions.getUser()).unwrap()
      } catch {}
      finally {
        setIsCheckedAuth(true);
      }
    })();
  }, [dispatch]);

  return (
    <>
    {isCheckedAuth ? (
      <BrowserRouter>
        <Routes>
          {user ? (
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
              <Navigate to={user ? routes.private[0].path : routes.public[0].path} replace />
            }
          />
        </Routes>
      </BrowserRouter>
    ) : (
      <span>Loading...</span>
    )}
    </>
  )
}

export default AppRouter;