// type Product = {
//   type: string;
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// };

// type Cart = {
//   type: string;
//   userId: number;
//   products: { productId: number; quantity: number }[];
// };

// type User = {
//   type: string;
//   id: number;
//   username: string;
//   email: string;
// };

// type Data = {
//   type: string;
//   data: Product[] | Cart[] | User[];
// };

// const productsData: Data = {
//   type: "products",
//   data: [
//     {
//       type: "product",
//       id: 1,
//       title: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       discountPercentage: 12.96,
//       rating: 4.69,
//       stock: 94,
//       brand: "Apple",
//       category: "smartphones",
//       thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       images: [
//         "https://cdn.dummyjson.com/product-images/1/1.jpg",
//         "https://cdn.dummyjson.com/product-images/1/2.jpg",
//         "https://cdn.dummyjson.com/product-images/1/3.jpg",
//         "https://cdn.dummyjson.com/product-images/1/4.jpg",
//         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       ],
//     },

//     {
//       type: "product",
//       id: 2,
//       title: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       discountPercentage: 12.96,
//       rating: 4.69,
//       stock: 94,
//       brand: "Apple",
//       category: "smartphones",
//       thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       images: [
//         "https://cdn.dummyjson.com/product-images/1/1.jpg",
//         "https://cdn.dummyjson.com/product-images/1/2.jpg",
//         "https://cdn.dummyjson.com/product-images/1/3.jpg",
//         "https://cdn.dummyjson.com/product-images/1/4.jpg",
//         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       ],
//     },

//     {
//       type: "product",
//       id: 3,
//       title: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       discountPercentage: 12.96,
//       rating: 4.69,
//       stock: 94,
//       brand: "Apple",
//       category: "smartphones",
//       thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       images: [
//         "https://cdn.dummyjson.com/product-images/1/1.jpg",
//         "https://cdn.dummyjson.com/product-images/1/2.jpg",
//         "https://cdn.dummyjson.com/product-images/1/3.jpg",
//         "https://cdn.dummyjson.com/product-images/1/4.jpg",
//         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       ],
//     },

//     {
//       type: "product",
//       id: 4,
//       title: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       discountPercentage: 12.96,
//       rating: 4.69,
//       stock: 94,
//       brand: "Apple",
//       category: "smartphones",
//       thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       images: [
//         "https://cdn.dummyjson.com/product-images/1/1.jpg",
//         "https://cdn.dummyjson.com/product-images/1/2.jpg",
//         "https://cdn.dummyjson.com/product-images/1/3.jpg",
//         "https://cdn.dummyjson.com/product-images/1/4.jpg",
//         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       ],
//     },

//     {
//       type: "product",
//       id: 5,
//       title: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       discountPercentage: 12.96,
//       rating: 4.69,
//       stock: 94,
//       brand: "Apple",
//       category: "smartphones",
//       thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       images: [
//         "https://cdn.dummyjson.com/product-images/1/1.jpg",
//         "https://cdn.dummyjson.com/product-images/1/2.jpg",
//         "https://cdn.dummyjson.com/product-images/1/3.jpg",
//         "https://cdn.dummyjson.com/product-images/1/4.jpg",
//         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       ],
//     },
//   ],
// };

// const cartsData: Data = {
//   type: "carts",
//   data: [
//     {
//       type: "cart",
//       userId: 123,
//       products: [
//         {
//           productId: 1,
//           quantity: 2,
//         },
//         {
//           productId: 1,
//           quantity: 2,
//         },
//       ],
//     },

//     {
//       type: "cart",
//       userId: 1234,
//       products: [
//         {
//           productId: 1,
//           quantity: 1,
//         },
//         {
//           productId: 3,
//           quantity: 2,
//         },
//       ],
//     },
//   ],
// };

// const usersData: Data = {
//   type: "users",
//   data: [
//     {
//       type: "user",
//       id: 123,
//       username: "john_doe1",
//       email: "john.doe1@example.com",
//     },
//     {
//       type: "user",
//       id: 1234,
//       username: "john_doe2",
//       email: "john.doe2@example.com",
//     },

//     {
//       type: "user",
//       id: 12345,
//       username: "john_doe3",
//       email: "john.doe3@example.com",
//     },
//   ],
// };
// console.log(productsData);
// console.log(cartsData);
// console.log(usersData);




type productType = {
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": string[],
}

const product: productType = 
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  "images": [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  ]
}

type hairType = {
  "color": string,
  "type": string
}

type coordinatesType = {
  "lat": number,
  "lng": number
}


type addressType =  {
  "address": string,
  "city": string,
  "coordinates": coordinatesType,
  "postalCode": string,
        "state": string
}

type bankType = {
  "cardExpire": string,
  "cardNumber": string,
  "cardType": string,
  "currency": string,
  "iban": string
}

type companyType = {
  "address": addressType,
  "department": string,
  "name": string,
  "title": string
}

type cryptoType =  {
  "coin": string,
  "wallet": string,
  "network": string
}



type userType =  {
  "id": number,
  "firstName": string,
  "lastName": string,
  "maidenName": string,
  "age": number,
  "gender": string,
  "email": string,
  "phone": string,
  "username": string,
  "password": string,
  "birthDate": string,
  "image": string,
  "bloodGroup": string,
  "height": number,
  "weight": number,
  "eyeColor": string,
  "hair": hairType,
  "domain": string,
  "ip": string,
  "address": addressType,
  "macAddress": string,
  "university": string,
  "bank": bankType,
  "company": companyType,
  "ein": string,
  "ssn": string,
  "userAgent": string,
  "crypto": cryptoType
}
   









const user: userType =  {
  "id": 1,
  "firstName": "Terry",
  "lastName": "Medhurst",
  "maidenName": "Smitham",
  "age": 50,
  "gender": "male",
  "email": "atuny0@sohu.com",
  "phone": "+63 791 675 8914",
  "username": "atuny0",
  "password": "9uQFF1Lh",
  "birthDate": "2000-12-25",
  "image": "https://robohash.org/Terry.png?set=set4",
  "bloodGroup": "A-",
  "height": 189,
  "weight": 75.4,
  "eyeColor": "Green",
  "hair": {
    "color": "Black",
    "type": "Strands"
  },
  "domain": "slashdot.org",
  "ip": "117.29.86.254",
  "address": {
    "address": "1745 T Street Southeast",
    "city": "Washington",
    "coordinates": {
      "lat": 38.867033,
      "lng": -76.979235
    },
    "postalCode": "20020",
    "state": "DC"
  },
  "macAddress": "13:69:BA:56:A3:74",
  "university": "Capitol University",
  "bank": {
    "cardExpire": "06/22",
    "cardNumber": "50380955204220685",
    "cardType": "maestro",
    "currency": "Peso",
    "iban": "NO17 0695 2754 967"
  },
  "company": {
    "address": {
      "address": "629 Debbie Drive",
      "city": "Nashville",
      "coordinates": {
        "lat": 36.208114,
        "lng": -86.58621199999999
      },
      "postalCode": "37076",
      "state": "TN"
    },
    "department": "Marketing",
    "name": "Blanda-O'Keefe",
    "title": "Help Desk Operator"
  },
  "ein": "20-9487066",
  "ssn": "661-64-2976",
  "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
  "crypto": {
    "coin": "Bitcoin",
    "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    "network": "Ethereum (ERC20)"
  }
}








type cartType<T extends productsType[]> =  {
  "id": number,
  "products": T
}


type productsType = 
  {
    "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total": number,
    "discountPercentage": number,
    "discountedPrice": number,
    "thumbnail": string
  
  }






  const cart: cartType<[productsType]> = {
    "id": 1,
    "products": [
      {
        "id": 59,
        "title": "Spring and summershoes",
        "price": 20,
        "quantity": 3,
        "total": 60,
        "discountPercentage": 8.71,
        "discountedPrice": 55,
        "thumbnail": "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      }
    ]
  }
  














