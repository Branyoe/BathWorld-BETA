import './App.css';
import Routes from './routes';
import './dbConf';
import { AuthProvider } from './context/authContext';

function App() {
  return <AuthProvider>
    <Routes/>
  </AuthProvider>
}

export default App;
