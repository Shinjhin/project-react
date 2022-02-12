import styles from './Column.module.scss'

const Column = props => {
    return (
        <article className={styles.column}>
            <h1 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h1>
        </article>
    )
}

export default Column; 