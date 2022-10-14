import './App.css';
import Routes from './routes';
import './firebase';
import { AuthProvider } from './context/authContext';

function App() {
  return <AuthProvider>
    <Routes/>;
  </AuthProvider>
}

export default App;
