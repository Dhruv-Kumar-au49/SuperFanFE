import React from 'react';


const Logout = () => {
 

  const handleLogout = async () => {
    try {
      const response = await fetch('https://superfanbankend.onrender.com/logout', {
        method: 'POST',
        credentials: 'include', 
      });
      
      const status = response.status;

      if (status === 200) {
        window.alert('Logout successful');
      
      } else {
        window.alert('Oops...Something went wrong');
      }
    } catch (error) {
      console.error(error);
      window.alert('Oops...Something went wrong');
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
