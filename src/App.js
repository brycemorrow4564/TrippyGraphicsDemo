import React, { useReducer } from "react"; 
import { RootProvider } from "./context/context"; 
import { reducer, reducerInitialState } from "./reducers/reducer"; 
import AppContent from "./components/AppContent"; 

import './css/App.css';
import 'antd/dist/antd.css';

/*
Demo Video: 
    * Loading, Saving, and Editing static configurations + colors 
    * Loading and running an animation composed of static configurations
*/ 

function App(props) {

    const [state, dispatch] = useReducer(reducer, reducerInitialState); 

    return (
        <RootProvider value={{ state, dispatch }}>
            <AppContent/>
        </RootProvider>
    ); 

}

export default App; 