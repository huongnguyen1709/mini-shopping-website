import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { AddToCart, ChangeMessage } from './../actions/index';

// container là kết nối giữa các components và store
class ProductsContainer extends Component {
    render() {
        var { products } = this.props; 
        return (    
            <Products> {/* truyền function vào bằng props children */}
                { this.showProducts(products) }  
            </Products>
        );
    }

    showProducts(products) {
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                            key = {index} 
                            product = {product}
                            onAddToCart = {onAddToCart}
                            onChangeMessage = {onChangeMessage}
                        />
            });
        }
        return result;
    }
}

// để check type of tất cả các props
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
    ).isRequired, // isRequired là yêu cầu array phải tồn tại, rỗng cũng dc nhưng phải có
    onChangeMessage : PropTypes.func.isRequired,
    onAddToCart : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products : state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(AddToCart(product, 1));
        },

        onChangeMessage : (message) => {
            dispatch(ChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);