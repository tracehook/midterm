import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // go to quiz if username and password are correct
    if (username === 'drowen' && password === 'bobmarley') {
      navigate('/quiz');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="content">
        <header>Login</header>
        <main>
          {/* add fields for input for username and password */}
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Add a button to submit the form */}
            <button type="submit">Login</button>
          </form>
        </main>
        <footer>
          &copy; 2024 CSC 425 Midterm.
        </footer>
      </div>
    </div>
  );
}

export default Login;
