/*import * as types from './../constants/ActionTypes';*/

var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : '',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10 // số lượng hàng tồn kho, mỗi lần mua số lượng sẽ giảm xuống
    },

    {
        id : 2,
        name : 'Samsung Galaxy S7',
        image : '',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 400,
        inventory : 15 // số lượng hàng tồn kho, mỗi lần mua số lượng sẽ giảm xuống
    },

    {
        id : 3,
        name : 'Oppo F1s',
        image : '',
        description : 'Sản phẩm do China sản xuất',
        price : 300,
        inventory : 5 // số lượng hàng tồn kho, mỗi lần mua số lượng sẽ giảm xuống
    }
];

const product = (state = initialState, action) => {
    switch(action.type) {
        default : return [...state];
    }
}

export default product;