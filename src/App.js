import './App.css';
import { AuthGoogleProvider } from './contexts/authGoogle';
import AppRoutes from './routes';

function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
}

export default App;
