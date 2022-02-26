import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';

//const reducer = (state, action) => {
//  if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.newColumn]}
//  return state;
// }
const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};

    case 'ADD_CARD':
      return {...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};

    case 'UPDATE_SEARCHSTRING':
      return {...state, searchString: action.payload}
      
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;