import * as types from './../constants/ActionTypes';

export const AddToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const ChangeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}

export const RemoveProductInCart = (product) => {
    return {
        type : types.DELETE_PRODUCT_IN_CART,
        product
    }
}