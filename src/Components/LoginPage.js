import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../style/login.css';
import Logout from '../Components/Logout';
import { GoogleLoginButton} from "react-social-login-buttons";
import{LoginSocialGoogle} from "reactjs-social-login";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://superfanbankend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const status = response.status;

      if (status === 200 ) {
        window.alert('successfully logged');
        navigate("/products");
      } else {
        window.alert('Login failed!');
      }
    } catch (error) {
      console.log('Error occurred in login:', error);
      window.alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button className="login-submit-btn" type="submit">
              Login
            </button>
            <div className='google-login'>
      <LoginSocialGoogle
        client_id={"577425724826-4ehk16h9ig3ga7a2fvgn5nt18lb4g4b1.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
          </form>
          <div><Logout/></div>
          <div className="signup">
            Don't have an account yet? <Link to="/signup">Click here to sign up.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
