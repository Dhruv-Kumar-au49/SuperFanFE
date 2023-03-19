import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../style/signup.css';


const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://superfanbankend.onrender.com/signup', {
        method: 'POST',
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
            
        },
        body:JSON.stringify({"name":name,"email":email,"password":password,})
    });
    
      const status = response.status;
    
      if (status === 201) {
        window.alert('Your account has been created successfully, navigate to LOGIN page to login');
        navigate("/login");
      } else if (status === 400) {
        window.alert('Oops...SignUP failed');
      } else {
        window.alert('Oops...Something went wrong');
      }
    } catch (error) {
      console.error(error);
      window.alert('Oops...Something went wrong');
    }
    
  };

  return (
    <div className='signup-page'>
      <div>
        <h1 className='signup-page-heading'>Please Enter your details to SIGNUP</h1>
      </div>

      <form className='signup-page-fornm' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' value={name} onChange={handleNameChange} />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' value={email} onChange={handleEmailChange} />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={password} onChange={handlePasswordChange} />
        </div>

        <div>
          <button type='submit' className='signup-btn'>
            Submit
          </button>
        </div>
      </form>

      <div>
        Already have an account? <Link to='/login'>Click here</Link>
      </div>
    </div>
  );
};

export default SignUp;
