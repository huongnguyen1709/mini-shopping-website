import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';

// container là kết nối giữa các components và store
class MessageContainer extends Component {
    render() {
        var { message } = this.props; 
        return (    
            <Message> {/* truyền function vào bằng props children */}
                { this.showMessage(message) }  
            </Message>
        );
    }

    showMessage(message) {
        var result = message;
        
        return result;
    }
}

// để check type of các props
MessageContainer.propTypes = {
    message : PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message : state.message,
    }
}

/*const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(AddToCart(product, 1));
        }
    }
}*/

export default connect(mapStateToProps, null)(MessageContainer);