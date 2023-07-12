import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { DisplayMessages } from './redux/Manage_State_Locally_First';
import { Provider, connect } from 'react-redux';
import { store } from './redux/Extract_State_Logic_to_Redux';
import { ConnectedComponent } from './redux/Connect_Redux_to_React';
import { mapDispatchToProps, mapStateToProps } from './redux/Map_State_to_Props';
import { Presentation1 } from './redux/Extract_Local_State_into_Redux';

const Container = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages)
const Container_1 = connect(mapStateToProps,mapDispatchToProps)(Presentation1)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DisplayMessages />
    
    <Provider store={store}>
      <h1>Use Provider to Connect Redux to React</h1>
      <DisplayMessages />
      <ConnectedComponent />
      <h1>Connect Redux to the Messages App</h1>
      <Container />
      <Container_1 />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
