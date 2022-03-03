import { useDispatch, useSelector } from 'react-redux';
import styles from './Card.module.scss'
import { getToggleCardFavorite, removeCard } from '../../redux/cardRedux';
import clsx from 'clsx';

const Card = props => {
    const cardId = props.cardId;
    // console.log(cardId);
    const dispatch = useDispatch();

    const clickingFavorite = e => {
        e.preventDefault();
        dispatch( getToggleCardFavorite ( cardId ))
    }

    const clickingRemove = e => {
      e.preventDefault();
      dispatch ( removeCard (cardId ))
    }

    const card = useSelector(state => state.cards.filter(card => card.id === cardId))
    // console.log(card);
    const isFavorite = card[0].isFavorite
    // console.log(isFavorite);


    return (
      <li className={styles.card}>{props.title}
        <button className={styles.buttonFavorite} onClick={clickingFavorite}>
          <span className={clsx(styles.icon, {[styles.active] : isFavorite}) + ' fa fa-star-o'}></span>
        </button>
        <button className={styles.buttonRemove} onClick={clickingRemove}>
          <span className={styles.icon + ' fa fa-trash'}></span>
        </button> 
      </li>
    );
};

export default Card; 