import { logOut } from "../../lib/auth";
import { useAuth } from '../../context/AuthContext';
import AddApplicationForm from '../../components/AddApplicationForm/AddApplicationForm';
import { useState, useEffect } from 'react';
import { SubscribeToApplications, type Application } from '../../lib/firestore';

const Dashboard = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);

  if (!user) return;

  useEffect(() => {
    if (!user) return;

    const unsubscribe = SubscribeToApplications(user.uid, setApplications);
    return unsubscribe;

  }, [user]);

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logOut}>Log Out</button>
      <AddApplicationForm />

      <h1>Your Applications</h1>
      {applications.map(app => (
        <div key={app.id} style={{ border: "1px solid #ccc", padding: "8px", marginBottom: "8px" }}>
          <h2>{app.position} @ {app.company}</h2>
          <p>Status: {app.status}</p>
          <p>Applied: {new Date().toLocaleDateString()}</p>
          <p>Notes: {app.notes || "None"}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
