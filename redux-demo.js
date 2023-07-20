import { legacy_createStore as createStore, } from 'redux'



// REDUCER FUNC FOR CHANGING AND UPDATE DATA
const counterReducer = (state = { counter: 0 }, action) => {
   if (action.type === 'increment'){
      return {
         counter: state.counter + 1
      };
   }
if(action.type === 'decrement'){
   return{
      counter : state.counter - 1
   } 
   
}; 
}


// CENTER STORE DATA (STATE)
const store = createStore(counterReducer)
console.log(store.getState());


//SUBSCRIPTION FUNCTION TO PASS DATA 
const counterSubscriber = () => {
   const latestState = store.getState()
   console.log(latestState)
}


store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' }) 
store.dispatch({ type: 'decrement' }) 
