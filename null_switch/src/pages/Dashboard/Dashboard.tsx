import { Navigate } from 'react-router-dom';
import type { User } from "firebase/auth";
import { logOut } from "../../lib/auth";
import Authorization from '../../pages/Authorization/Authorization'
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const user = useAuth();

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Dashboard;
