import type { User } from "firebase/auth";
import { logOut } from "../../lib/auth";
import Authorization from '../../pages/Authorization/Authorization'

type Props = {
  user: User;
};


const Dashboard = ({ user }: Props) => {


  if (!user) {
    return (
      <Authorization />
    );
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Dashboard;
