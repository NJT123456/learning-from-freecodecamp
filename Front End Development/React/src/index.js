// @ts-nocheck
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Simple_element_Class_and_Selft_Closing, TypesOfFood, Calendar } from './JSX';
import { MyComponent, Component, ParentComponent, ToDo } from './App';
import reportWebVitals from './reportWebVitals';
import { ShoppingCart, App, CampSite, StatefulComponent } from './props'
import { MyComponent1, MyComponent2, Counter, ControlledInput, MyForm } from './setState'
import { MyApp, MyApp1 } from './PassStateasProps'
import { Controller, MyComponent3, MyComponent4, MyComponent5 } from './LifeCycle';
import { Colorful, MagicEightBall } from './AddStyle';
import { CheckUserAge, GameOfChance, GateKeeper, MyComponent6 } from './If-else';
import { MyComponent7, MyToDoList } from './Array_function';

const root = ReactDOM.createRoot(document.getElementById('root','challenge-node'));
root.render(
<StrictMode>
    <Simple_element_Class_and_Selft_Closing /> 
    <MyComponent />
    <Component />
    <ParentComponent />
    <TypesOfFood />
    <Calendar />
    <ToDo />
    <ShoppingCart />
    <App />
    <CampSite />
    <hr />
    <StatefulComponent />
    <hr />
    <MyComponent1 />
    <hr />
    <MyComponent2 />
    <hr />
    <Counter />
    <hr />
    <ControlledInput />
    <hr />
    <MyForm />
    <hr />
    <MyApp />
    <hr />
    <MyApp1 />
    <hr />
    <MyComponent3 />
    <hr />
    <MyComponent4 />
    <hr />
    <MyComponent5 />
    <hr />
    <Controller />
    <hr />
    <Colorful />
    <hr />
    <MagicEightBall />
    <hr />
    <MyComponent6 />
    <hr />
    <CheckUserAge />
    <hr />
    <GameOfChance />
    <hr />
    <GateKeeper />
    <hr />
    <MyToDoList />
    <hr />
    <MyComponent7 />
</StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
