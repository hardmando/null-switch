import { useState } from "react";
import { logIn } from "../../lib/auth";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            alert('Signed in successfully!');
        } catch (error: any) {
            setError(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Log In</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default SignInForm;