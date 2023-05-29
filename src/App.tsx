import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AppProvider from './contexts';
import SelectTeam from './pages/SelectTeam';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/select-team" element={<SelectTeam />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
