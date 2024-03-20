var productsData = {
    type: "products",
    data: [
        {
            type: "product",
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            images: [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            ],
        },
        {
            type: "product",
            id: 2,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            images: [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            ],
        },
        {
            type: "product",
            id: 3,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            images: [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            ],
        },
        {
            type: "product",
            id: 4,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            images: [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            ],
        },
        {
            type: "product",
            id: 5,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            images: [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            ],
        },
    ],
};
var cartsData = {
    type: "carts",
    data: [
        {
            type: "cart",
            userId: 123,
            products: [
                {
                    productId: 1,
                    quantity: 2,
                },
                {
                    productId: 1,
                    quantity: 2,
                },
            ],
        },
        {
            type: "cart",
            userId: 1234,
            products: [
                {
                    productId: 1,
                    quantity: 1,
                },
                {
                    productId: 3,
                    quantity: 2,
                },
            ],
        },
    ],
};
var usersData = {
    type: "users",
    data: [
        {
            type: "user",
            id: 123,
            username: "john_doe1",
            email: "john.doe1@example.com",
        },
        {
            type: "user",
            id: 1234,
            username: "john_doe2",
            email: "john.doe2@example.com",
        },
        {
            type: "user",
            id: 12345,
            username: "john_doe3",
            email: "john.doe3@example.com",
        },
    ],
};
console.log(productsData);
console.log(cartsData);
console.log(usersData);
