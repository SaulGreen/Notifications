import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS

import Home from './components/home';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));