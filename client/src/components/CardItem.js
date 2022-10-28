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
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img id={props.id}
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;