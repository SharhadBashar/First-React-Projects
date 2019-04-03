import React from 'react';
import LanguageContext from '../Context/LanguageContext';
import ColorContext from '../Context/ColorContext';

class Button extends React.Component {
    //This is how you hook up context type to class component
    //contextType property name is special. it has to be done and named like this or it wont work
    //Step 2: define context type
    static contextType = LanguageContext;
    //Step 3: you get this.context
    //console.log(this.context);
    //if using consumer approach, no need to set up this.context
    //We use consumer approach when we have to pull things from multiple context objects
    render () {
        const text = this.context === 'english' ? 'Submit' : "Voorleggen";
        return (
            <ColorContext.Consumer>
                {(value) => 
                    <button className = {`ui button ${value}`}>
                        <LanguageContext.Consumer>
                            {(value) => value.lang === 'english' ? 'Submit' : 'Voorleggen'}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );
    }
}

export default Button;