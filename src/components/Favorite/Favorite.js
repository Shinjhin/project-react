import { useSelector } from 'react-redux';
import { getFilteredIsFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const cards = useSelector(state => getFilteredIsFavoriteCards(state))

  return(
    <div className={styles.container}>
      <article className={styles.column}>
        <ul className={styles.card}>
          {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title}/>)}
        </ul>
      </article>
    </div>
  )
}

export default Favorite; 