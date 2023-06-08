import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AppProvider from './contexts';
import SelectTeam from './pages/SelectTeam';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/Routes/PrivateRoute';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/select-team" element={<SelectTeam />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
