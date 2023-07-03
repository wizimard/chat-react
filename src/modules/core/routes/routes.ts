import { lazy } from "react";

const Home = lazy(() => import('@/pages/Home'));
const SignIn = lazy(() => import('@/pages/SignIn'));
const SignUp = lazy(() => import('@/pages/SignUp'));

const routes = {
  private: [
    {
      path: '/', element: Home
    }
  ],
  public: [
    {
      path: '/signin', element: SignIn
    },
    {
      path: '/signup', element: SignUp
    }
  ]
}

export default routes;