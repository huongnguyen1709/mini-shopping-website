import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import { RemoveProductInCart } from './../actions/index';

// container là kết nối giữa các components và store
class CartContainer extends Component {
    render() {
        var { cart, onDelete } = this.props; 
        return (    
            <div>
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showTotalAmount(cart)}
                </Cart>
            </div>
        );
    }

    showCartItem(cart) { 
        var result = <tr> 
                        <td>{Message.MSG_CART_EMPTY}</td>
                     </tr>;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index}
                        item={item}
                        onDeleteProductInCart={
                            
                        }
                    />
                )
            });
        }
        return result;
    }

    showTotalAmount(cart) {
        var total = 0;
        if(cart.length > 0) {
            for(var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return (
            <CartResult total={total}/>
        );
    }
}

// để check type of các props
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired // isRequired là yêu cầu array phải tồn tại, rỗng cũng dc nhưng phải có
}

const mapStateToProps = state => {
    return {
        cart : state.cart,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(RemoveProductInCart(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);