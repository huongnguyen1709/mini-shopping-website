var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://sudospaces.com/mobilecity-vn/images/2019/01/iphone-7-plus-pink-1.jpg',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10, // số lượng hàng tồn kho, mỗi lần mua số lượng sẽ giảm xuống
        rating : 4
    },

    {
        id : 2,
        name : 'Samsung Galaxy S7',
        image : 'https://didongthongminh.vn/upload_images/2017/10/samsung-galaxy-s7-gold.png',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 400,
        inventory : 15, // số lượng hàng tồn kho, mỗi lần mua số lượng sẽ giảm xuống
        rating : 3
    },

    {
        id : 3,
        name : 'Oppo F1s',
        image : 'https://cdn.didongthongminh.vn/upload_images/2017/10/oppo-f1s-gold.png',
        description : 'Sản phẩm do China sản xuất',
        price : 300,
        inventory : 5, // số lượng hàng tồn kho, mỗi lần mua số lượng sẽ giảm xuống
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default : 
            return [...state];
    }
}

export default products;