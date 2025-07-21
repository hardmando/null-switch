import { useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from './lib/firebase';

import Dashboard from './pages/Dashboard/Dashboard';
import Authorization from './pages/Authorization/Authorization'
import Router from './components/Router'
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
