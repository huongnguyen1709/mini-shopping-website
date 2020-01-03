import React, { Component } from 'react';
import { connect } from 'react-redux';
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
/*
// để check type of các props
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({ // An object taking on a particular shape
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
        })
    ).isRequired // isRequired là yêu cầu array phải tồn tại, rỗng cũng dc nhưng phải có
}
*/
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