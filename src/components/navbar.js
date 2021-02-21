import React, { Component } from 'react';
import Tab from './tab';

class Navbar extends Component {

    render() {

        return (

            this.props.tabs.map( (tab) => 
                <Tab out = {tab} activetab = {this.props.activetab} ctab = {this.props.ctab}/>
            )

        )

    }

}

export default Navbar;
