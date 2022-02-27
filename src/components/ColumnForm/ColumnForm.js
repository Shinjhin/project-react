import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        //dispatch({ type: 'ADD_COLUMN', payload:{title, icon } })
        dispatch( addColumn ({title, icon }))
        // props.action({ title: title, icon: icon})
        setTitle('');
        setIcon('');
    };

    return(
    <form className={styles.columnForm} onSubmit={handleSubmit}>
        <span className={styles.span}>Title:</span> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <span className={styles.span}>Icon:</span> <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
        <Button>Add column</Button>
    </form>
    )
}

export default ColumnForm; 