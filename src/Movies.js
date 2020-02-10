import React from 'react';
import { Link } from 'react-router-dom';

export default function Movies(props) {
    return (
      <Link to={`/${props.id}`} className='item'>
        <img 
          src={props.img} 
          alt={`${props.name} Movie Cover`} 
        />
            <div className='overlay'>
              <h1>{props.name}</h1>
            </div>
      </Link>
    );
  }