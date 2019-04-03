import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component {
    
    render() {
        const {user} = this.props;
        if(!user) {
            return null;
        }
        return (
            <div className = "header">{user.name}</div>
        );
    }
}

//mapstatetoprops not only has access to state, but also to its own props, a copy of the stuff that gets sent to the class above
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find((user) => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);