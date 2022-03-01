import Column from '../Column/Column.js';
import styles from './List.module.scss'
// import { useState } from 'react';
// import shortid from 'shortid';
import { useSelector } from 'react-redux';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { getAllColumns } from '../../redux/store';

const List = () => {

		const columns = useSelector(getAllColumns)
  	console.log(columns);

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon</span></h1>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
            {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm />
        </div>
    )
};

export default List;