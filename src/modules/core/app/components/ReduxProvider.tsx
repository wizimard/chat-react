import { ReactNode } from "react"
import { Provider } from "react-redux";
import { store } from "../../store";

type PropsType = {
  children: ReactNode;
}

const ReduxProvider = ({ children }: PropsType) => {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default ReduxProvider;