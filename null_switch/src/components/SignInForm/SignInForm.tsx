import { useState } from "react";
import { logIn } from "../../lib/auth";
import { StyledSignInForm } from './styledSignInForm';
import InputBox from '../elements/InputBox/InputBox';
import SubmitButton from '../elements/SubmitButton/SubmitButton';

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(email, password);
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <StyledSignInForm>
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
        <SubmitButton type="submit" content='Log In' />
        {error && <p>{error}</p>}
      </form>
    </StyledSignInForm>
  );
};

export default SignInForm;
