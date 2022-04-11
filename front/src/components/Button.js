import React from 'react';
import '../assets/css/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Registro</button>
    </Link>
  );
}
