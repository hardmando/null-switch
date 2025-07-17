import { useState } from "react";
import { signUp } from "../../lib/auth";
import {StyledSignUpForm} from "./styledSignUpForm";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            await signUp(email, password);
            alert('Signed up successfully!');
        } catch (error: any) {
            setError(error.message);
        }
    }

    return (
        <StyledSignUpForm>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </StyledSignUpForm>
    );
};

export default SignUpForm;
