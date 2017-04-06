import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class PageTwo extends Component {
    render() {
        return (
            <div>
                This is a different page
                <Prompt message="Are you sure"/>
            </div>
        );
    }
}
export default PageTwo;