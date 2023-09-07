import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <h1> Hola Mundo </h1>
        )
    }
}
render (<App/>, document.getElementById('app')) //Se crea un componente app que es un h1 y se implementa en el div con el id "app".