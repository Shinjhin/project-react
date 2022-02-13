import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss'

const Column = props => {
    return (
        <article className={styles.column}>
            <h1 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h1>
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} action={props.action} />
        </article>
    )
}

export default Column; 