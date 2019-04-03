import React from 'react';
//Step 1: create the context object
const Context =  React.createContext('english');

export class LanguageStore extends React.Component {
    state = {lang: 'english'};
    
    onLangChange = (lang) => {
        this.setState({lang: lang});
    };

    render() {
        return (
            <Context.Provider value = {{...this.state, onLangChange: this.onLangChange}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;