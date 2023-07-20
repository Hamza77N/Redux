import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
   reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
























//SUBSCRIPTION FUNCTION TO PASS DATA 
// const counterSubscriber = () => {
//    const latestState = store.getState()
//    console.log(latestState)
// }


// store.subscribe(counterSubscriber)

// store.dispatch({ type: 'increment' }) 
// store.dispatch({ type: 'decrement' }) 



// REDUCER FUNC FOR CHANGING AND UPDATE DATA
// const counterReducer = (state = initialState, action) => {
//    if (action.type === 'increment') {
//       return {
//          counter: state.counter + 1,
//          showCounter: state.showCounter
//       };
//    }

//    if (action.type === 'increase') {
//       return {
//          counter: state.counter + action.amount,
//          showCounter: state.showCounter

//       }
//    }

//    if (action.type === 'decrement') {
//       return {
//          counter: state.counter - 1,
//          showCounter: state.showCounter
//       }
//    }
//    if (action.type === 'toggle') {
//       return {
//          showCounter: !state.showCounter,
//          counter: state.counter
//       }
//    }
//    return state
// };
