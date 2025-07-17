import type { User } from "firebase/auth";
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import { logOut } from "../lib/auth";


type Props = {
  user: User;
};


const Dashboard = ({ user }: Props) => {
 

    if (!user) {
        return (
            <div>
                <h1>Please sign in or sign up</h1>
                <SignUpForm />
                <SignInForm />
            </div>
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
