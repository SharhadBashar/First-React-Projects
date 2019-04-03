import React from 'react';
import LanguageContext from '../Context/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        return (
            <div>
                Select a language: 
                <i className = "flag us" onClick = {() => this.context.onLangChange('english')}/>
                <i className = "flag nl" onClick = {() => this.context.onLangChange('dutch')}/>
            </div>
        );
    }
}

export default LanguageSelector;