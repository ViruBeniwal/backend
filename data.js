const products = [
    {
        id: 101,
        name: "Wireless Mouse",
        price: 799,
        brand: "LogiTech",
        inStock: true,
        rating: 4.2
    },
    {
        id: 102,
        name: "Mechanical Keyboard",
        price: 2999,
        brand: "KeyChron",
        inStock: true,
        rating: 4.6
    },
    {
        id: 103,
        name: "Gaming Monitor",
        price: 12999,
        brand: "Acer",
        inStock: false,
        rating: 4.4
    },
    {
        id: 104,
        name: "Bluetooth Speaker",
        price: 1599,
        brand: "JBL",
        inStock: true,
        rating: 4.3
    }
];

const users = [
    {
        userId: 1,
        username: "viru_dev",
        email: "viru@example.com",
        isActive: true,
        age: 21
    },
    {
        userId: 2,
        username: "code_master",
        email: "coder@example.com",
        isActive: true,
        age: 23
    },
    {
        userId: 3,
        username: "debug_king",
        email: "debug@example.com",
        isActive: false,
        age: 22
    },
    {
        userId: 4,
        username: "js_ninja",
        email: "ninja@example.com",
        isActive: true,
        age: 20
    }
];

module.exports = {products, users};