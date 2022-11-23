import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  const ScrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} onClick={ScrollToTop}>
          <h2 id='cards-h2'>{props.text}</h2>
          <p id='cards-p'>{props.text2}</p>
          <p id='cards-p2'>{props.text3}</p>
          <br/>
          <i class="fa-sharp fa-solid fa-arrow-right-long fa-2x"></i>
        </Link>
      </li>
    </>
  );
}

export default CardItem;