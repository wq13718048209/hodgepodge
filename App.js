/**
 * @flow
 */
import React, { Component } from "react";
import {Global,Book} from './app/assest';
import {Navigator} from "./app/navigation/navigator";


class App extends Component <any,any> {

    render() {
        return (
            <Navigator/>

        );
    }
}

export default App;