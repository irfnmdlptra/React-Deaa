import React from 'react';
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Second = () => {
    const navigate = useNavigate()
  return (
    <div
    className="d-flex align-items-center justify-content-center"
    style={{
      height: '100vh',
      width: '100%',
      background: 'url(https://source.unsplash.com/random/2000x1000) center center no-repeat',
      backgroundSize: 'cover'
    }}
  >
      <div className="container text-center">
        <h1 className="text-white">About Us</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-white">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className='btn btn-primary' onClick={() => navigate('/')}>Kembali</button>
      </div>
    </div>
  );
};

export default Second;
