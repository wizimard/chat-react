import { ReduxProvider, AppRouter } from "./components";
import './App.scss';

const App = () => {

  return (
    <ReduxProvider>
      <main
        className="App dark"
        id="App"
      >
        <AppRouter />
      </main>
    </ReduxProvider>
  )
}

export default App