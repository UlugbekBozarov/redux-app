import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './app/reducers/productReducer';
import userReducer from './app/reducers/userReducer';

// Root Reducer with combinate reduicer method
const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer
})

// Create Store
const store = createStore(
  rootReducer,
  {
    products: [
      {
        name: 'Apple',
        type: 'Phone'
      },
      {
        name: 'Samsung',
        type: 'TV'
      }
    ],
    user: 'Saud'
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

// const updateUserAction = {
//   type: 'userUpdate',
//   payload: {
//     user: "Ulugbek"
//   }
// }

// store.dispatch(updateUserAction)




// function reducer (state, action) {
//   if (action.type === 'stateniOzgartir') {
//     return action.payload.newState
//   }
//   return 'state 111'
// }
// const store = createStore(reducer);
// const action = {
//   type: "stateniOzgartir",
//   payload: {
//     newState: "yangi state 111"
//   }
// }
// const action1 = {
//   type: "stateniOzgartir",
//   payload: {
//     newState: "yangi state 222"
//   }
// }
// store.subscribe(() => {
//   console.log("Store Yangilandi", store.getState());
// })
// store.dispatch(action);
// store.dispatch(action1);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
