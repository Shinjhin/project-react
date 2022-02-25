import { useState } from 'react/cjs/react.development';
import { useDispatch } from "react-redux";
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss'
import Button from '../Button/Button';

const CardForm = props => {

    const columnId = props.columnId;
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type : 'ADD_CARD', payload: {title, columnId} })
        // props.action({title: title}, props.columnId)
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add Card</Button>
        </form>
    );
};

export default CardForm; 