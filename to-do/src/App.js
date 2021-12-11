import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { Provider } from './components/Provider/Provider';


function App() {
  return (
    <Provider>
      <Header />
      <Layout />
    </Provider>
  );
}

export default App;
