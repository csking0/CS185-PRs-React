import './App.css';
import { Component } from 'react';
import NavBar from './components/navbar';
import Body from './components/body';

class App extends Component {

    constructor() {
        super();
        this.state = {
            active :1
        }
        this.changetab = (id) => {
            this.setState({active :id})
        }
    }

    render() {

        const tabs = [
            {
                id: 1,
                title: "Introduction"
            },
            {
                id: 2,
                title: "Pictures"
            },
            {
                id: 3,
                title: "Sound Tests"
            },
            {
                id: 4,
                title: "Parts List"
            },
            {
                id: 5,
                title: "Email Verification"
            }
        ]

        return (

            <div className = "App">
                <div className = "navbar">
                    <NavBar tabs = {tabs} activetab = {this.state.active} ctab = {this.changetab}/>
                </div>
                <div className = "body">
                    <Body activetab = {this.state.active}/>
                </div>
            </div>

        );
    }
}

export default App;
