import Column from '../Column/Column.js';
import styles from './List.module.scss'
// import { useState } from 'react';
// import shortid from 'shortid';
import { useSelector } from 'react-redux';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { getColumnsByList, getListById } from '../../redux/store';
import { Navigate, useParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {

    const { listId } = useParams()
    const columns = useSelector(state => getColumnsByList(state, listId))
  	console.log(columns);
    const listData = useSelector(state => getListById(state, listId))
    // console.log(listData);
    if(!listData) return <Navigate to="/"/>      

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>{listData.title} <span>soon</span></h1>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm/>
            <section className={styles.columns}>
            {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm listId={listId}/>
        </div>
    )
};

export default List;