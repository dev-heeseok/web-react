import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./App";

// createStore => configureStore 
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers'
import * as actions from './actions'
import { Provider } from 'react-redux';
import counter from './reducers/counter';
import ui from './reducers/ui';

const store = configureStore({
  reducer: {
    counter,
    ui
  }
})

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrerment());
store.dispatch(actions.setColor([200, 200, 200]));
unsubscribe();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
