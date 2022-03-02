import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss'
import 'font-awesome/css/font-awesome.min.css';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = props => {
    //const searchString = useSelector(state => state.searchString.searchString)

    //const cards = useSelector(state => state.cards).filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase()))
    const cards = useSelector(state => getFilteredCards(state, props.id));

    return (
        <article className={styles.column}>
            <h1 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h1>
            <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} title={card.title} columnId={card.columnId} cardId={card.id}/>)}
            </ul>
            <CardForm columnId={props.id}/>
        </article>
    )
}

export default Column; 