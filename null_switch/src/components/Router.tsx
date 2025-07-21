import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Authorization from '../pages/Authorization/Authorization';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import { useAuth } from '../context/AuthContext';

const Router = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            user ? <Navigate to='/dashboard' /> : <Navigate to='/auth' />
          }
        />
        <Route
          path='/auth'
          element={
            user ? <Navigate to='/dashboard' /> : <Authorization />
          }
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
