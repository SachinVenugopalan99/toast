import { data } from '../../data/data'
// import Immutable from 'seamless-immutable';
import {createStore} from 'redux'

const defaultState = {
    listData: [...data],
    cart: [],
    pastOrders: []
}

const addCart = (id, state) => {
    const arr = [...state?.cart];
    const ind = arr?.findIndex((item) => item.id === id);
    if (ind > -1) {
        const temp = arr[ind];
        const s= {...temp, number: temp.number +1}
        arr.splice(ind, 1, s);
    } else {
        const index = state?.listData?.findIndex((item) => item.id === id);
        const temp = state.listData[index];
        const s= {...temp, number: 1}
        arr.push(s);
    }
 return arr;
}
const deleteCart = (id, state) => {
    const arr = [...state?.cart];
    const ind = arr?.findIndex((item) => item?.id === id);
    if (ind > -1) {
        const temp = arr[ind];
        const s= {...temp, number: temp.number - 1}
        if (s.number === 0) {
            arr.splice(ind, 1)
        } else {
            arr.splice(ind, 1, s); 
        }  
    }
    return arr;
}

const addOrders = (state) => {
    const arr = [...state.pastOrders];
    const temp=[...state.cart];
    for (let i = 0; i< temp?.length; i++) {
        const ind = arr?.findIndex((item) => item?.id === temp[i]?.id);
        if (ind > -1) {
            const s = {...arr[ind], number: arr[ind].number + temp[i].number};
            arr.splice(ind, 1, s);
        } else {
            arr.push(temp[i]);
        }
    }
    return arr
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
          case 'ADD_ITEM':
            return { ...state, cart: [...addCart(action?.id, state)] };
          case 'DECREMENT_ITEM':
            return { ...state, cart: [...deleteCart(action?.id, state)] };
            case 'PLACE_ORDER':
                return { ...state, pastOrders: [...addOrders(state)], cart: [] };
            default:
                return state
    }
  };

  export const store = createStore(reducer);