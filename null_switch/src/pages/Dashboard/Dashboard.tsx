import { Navigate } from 'react-router-dom';
import type { User } from "firebase/auth";
import { logOut } from "../../lib/auth";
import Authorization from '../../pages/Authorization/Authorization'
import { useAuth } from '../../context/AuthContext';
import AddApplicationForm from '../../components/AddApplicationForm/AddApplicationForm';

const Dashboard = () => {
  const { user } = useAuth();
  if (!user) return;
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logOut}>Log Out</button>
      <AddApplicationForm />
    </div>
  );
};

export default Dashboard;
