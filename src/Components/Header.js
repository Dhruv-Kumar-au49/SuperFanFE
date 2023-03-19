import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <h1 className='heading'>SuperFan</h1>

        <ul className='header-list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </div>
  );
}

export default Header;
