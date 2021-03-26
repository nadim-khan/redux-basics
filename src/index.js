import store from './store';
import {bugAdded, bugRemoved, bugResolved} from './actions'

const unsubscribe = store.subscribe(()=>{
    console.log('Store state: ',store.getState());
})

store.dispatch(bugAdded('Bug1'));
store.dispatch(bugAdded('Bug2'));
store.dispatch(bugAdded('Bug3'));
store.dispatch(bugResolved(1));
store.dispatch(bugResolved(2));


