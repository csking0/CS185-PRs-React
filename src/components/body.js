import React, { Component } from 'react';
import Page1 from './text';
import Page2 from './images';
import Page3 from './videos';
import Page4 from './table';
import Page5 from './email';
import './style.css';

class Body extends Component {

    render() {

        var displaycontent = () => {
            var activetab = this.props.activetab;
            if (activetab == 1) {
                return <Page1/>;
            }
            else if (activetab == 2) {
                return <Page2/>;
            }
            else if (activetab == 3) {
                return <Page3/>;
            }
            else if (activetab == 4) {
                return <Page4/>;
            }
            else {
                return <Page5/>;
            }
        }

        return (displaycontent());

    }

}

export default Body;
