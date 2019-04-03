import React from 'react';
import {LanguageStore} from '../Context/LanguageContext';
import ColorContext from '../Context/ColorContext';
import Create from './Create';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    
    //Prop name of value is very special to provider
    render() {
        return (
            <LanguageStore>
                <div className = "ui container">
                    <LanguageSelector />
                    <ColorContext.Provider value = "red">
                        <Create />
                    </ColorContext.Provider>
                </div>
            </LanguageStore>
        );
    }
}

export default App;