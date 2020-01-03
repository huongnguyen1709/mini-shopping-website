import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { AddToCart } from './../actions/index';
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
        var {onAddToCart} = this.props;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                            key = {index} 
                            product = {product}
                            onAddToCart = {onAddToCart}
                        />
            });
        }
        return result;
    }
}

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

const mapStateToProps = state => {
    return {
        products : state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(AddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);