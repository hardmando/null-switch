import { useState } from "react";
import { signUp } from "../../lib/auth";
import { StyledSignUpForm } from "./styledSignUpForm";
import InputBox from '../elements/InputBox/InputBox'
import SubmitButton from '../elements/SubmitButton/SubmitButton'

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
        <InputBox
          label='email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <InputBox
          label='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <InputBox
          label='confirm password'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
        />
        <SubmitButton content='Sign Up' type="submit" />
        {error && <p>{error}</p>}
      </form>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
