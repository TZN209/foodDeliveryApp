// Categories
export const filterData = [
    { name: 'Fast food', image: require('../assets/data/categories/fastfood.png'), id: '0' },
    { name: 'Burgers', image: require('../assets/data/categories/burger.png'), id: '1' },
    { name: 'Salads', image: require('../assets/data/categories/salads.png'), id: '2' },
    { name: 'Hotdog', image: require('../assets/data/categories/hotdog.png'), id: '3' },
    { name: 'Chinese', image: require('../assets/data/categories/chinese.png'), id: '4' },
    { name: 'Mexican', image: require('../assets/data/categories/mexican.png'), id: '5' },
    { name: 'Sea food', image: require('../assets/data/categories/seafood.png'), id: '6' },
];

export const filterData2 = [
    { name: 'Fast food', image: 'https://images.pexels.com/photos/983297/pexels-photo-983297.jpeg', id: '0' },
    { name: 'Burgers', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg', id: '1' },
    { name: 'Salads', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg', id: '2' },
    { name: 'Hotdog', image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg', id: '3' },
    {
        name: 'Chinese',
        image: 'https://publish.purewow.net/wp-content/uploads/sites/2/2020/02/traditional-chinese-food-peking-duck.jpg?fit=728%2C921',
        id: '4',
    },
    { name: 'Mexican', image: 'https://www.chefspencil.com/wp-content/uploads/Chilaquiles-960x960.jpg.webp', id: '5' },
    { name: 'Sea food', image: 'https://images.pexels.com/photos/2647936/pexels-photo-2647936.jpeg', id: '6' },
    { name: 'Chinese Food', image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg', id: '7' },
    {
        name: 'Mexican pie',
        image: 'https://simpleandseasonal.com/wp-content/uploads/2014/07/mexican-pie-pin.png',
        id: '8',
    },
    {
        name: 'Ocean dish',
        image: 'https://images.pexels.com/photos/179834/pexels-photo-179834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        id: '9',
    },
];

// Restaurant Data
export const restaurantsData = [
    {
        restaurantName: 'Mc Donalds',
        farAway: '21.2',
        businessAddress: '22 Bessie street, Cape Town',
        images: 'https://mcdonalds.vn/uploads/2018/food/evm/EVM_03_6pcs_chicken_mcnuggets_0.png',
        averageReview: 4.9,
        numberOfReview: 272,
        coordinates: { lat: -26.1888612, lng: 28.246325 },
        discount: 10,
        deliveryTime: 15,
        collectTime: 5,
        foodType: 'Burgers, Wraps,Milkshakes...',
        productData: [
            {
                name: 'Hand cut chips',
                price: 29.3,
                image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            },
            {
                name: 'Big Mac',
                price: 50.8,
                image: 'https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg',
            },
            {
                name: 'Chicken Burger',
                price: 70,
                image: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg',
            },
        ],
        id: 0,
    },

    {
        restaurantName: 'KFC',
        farAway: '12.7',
        businessAddress: '22 Bessie street, Cape Town',
        images: 'https://static.kfcvietnam.com.vn/images/items/lg/6-Fried-Chicken.jpg?v=9gMj23',
        averageReview: 4.3,
        numberOfReview: 306,
        coordinates: { lat: -26.1891648, lng: 28.2441808 },
        discount: 20,
        deliveryTime: 30,
        collectTime: 10,
        foodType: 'Chicken,Chicken wings... ',
        productData: [
            {
                name: 'Hand cut chips',
                price: 29.3,
                image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg',
            },
            {
                name: 'Big Mac',
                price: 50.8,
                image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg',
            },
            {
                name: 'Chicken Burger',
                price: 70,
                image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg',
            },
        ],
        id: 1,
    },

    {
        restaurantName: 'Steers',
        farAway: '5',
        businessAddress: ' 17 Olivia Rd, Johannesburg',
        images: 'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        coordinates: { lat: -26.1886781, lng: 28.244879 },
        averageReview: 4.9,
        numberOfReview: 1272,
        discount: 12,
        deliveryTime: 25,
        collectTime: 15,
        foodType: 'Flame grilled beef Burgers',
        productData: [
            {
                name: 'Hand cut chips',
                price: 29.3,
                image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
            },
            {
                name: 'Big Mac',
                price: 50.8,
                image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
            },
            {
                name: 'Chicken Burger',
                price: 70,
                image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
            },
        ],
        id: 2,
    },

    {
        restaurantName: 'Roman Pizza',
        farAway: '7',
        businessAddress: ' 15 Atlas Rd, Kempton Park',
        images: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
        averageReview: 4.3,
        numberOfReview: 700,
        coordinates: { lat: -26.1845336, lng: 28.2481691 },
        discount: null,
        deliveryTime: 20,
        collectTime: 10,
        foodType: 'Chicken pizza, Vegetarian pizza...',
        productData: [
            {
                name: 'Hand cut chips',
                price: 29.3,
                image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
            },
            {
                name: 'Big Mac',
                price: 50.8,
                image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
            },
            {
                name: 'Chicken Burger',
                price: 70,
                image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg',
            },
        ],
        id: 3,
    },
];

// Restaurants and Foods Filtering
export const productData = [
    {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg',
        details: 'Two 100% fresh beef burger patties that are hot,deliciously',
        id: 0,
    },
    {
        name: 'Big Mac',
        price: 50.8,
        image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg',
        details: 'McFeast features two 100% fresh beef burger patties that are hot',
        id: 1,
    },
    {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg',
        details: '',
        id: 2,
    },

    {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg',
        details: 'Two 100% fresh beef burger patties that are hot,deliciously',
        id: 3,
    },
    {
        name: 'Big Mac',
        price: 70.2,
        image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg',
        details: 'McFeast features two 100% fresh beef burger patties that are hot',
        id: 4,
    },
    {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg',
        details: '',
        id: 5,
    },
];
