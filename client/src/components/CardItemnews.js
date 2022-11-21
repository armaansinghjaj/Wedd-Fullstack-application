import React from 'react';
import { Link } from 'react-router-dom';


function CardItem(props) {
  return (
    <>
      <li className='cardnews__item'>
        <Link className='cardnews__item__link' to={props.path}>
          <div className='cardnews__item__info'>
            <p>{props.text}</p>
            <h5 className='cardnews__item__text'>{props.name}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;