import * as React from 'react';
import {Header} from 'react-native-elements';

const AppHeader = (props) =>
{
    return(
        <Header
            centerComponent = {{text: props.title, style: {color: 'white'}}}
            backgroundColor = {{color: props.color}}
        />
    )
}

export default AppHeader;