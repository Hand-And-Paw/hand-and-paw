# Hand and paw API

This project will serve as the first introduction to setting up a simple REST backend for the HackYourFuture Web Apps module. The code in the start-of-class branch has all the endpoints for the channels resource implemented and serves as example code and starting point for the lecture.

During the lecture the endpoints of the messages repo should be implemented in order to make the chat client work. A reference implementation of the end goal can be found on the reference-implementation branch.

## Getting Started

### Install database server

Follow the steps explained by [mongodb](https://docs.mongodb.com/manual/administration/install-community/)

### In the Hand and Paw app repo

- `npm install`
- **run the server**
  - `npm run dev:api` - uses `nodemon` to restart the server each time you save a change
- **run the front end**
  - `npm run dev:client` - deploy the front end using `vite` package

### Using the API

- **from postman**
  - `http://localhost:xxxx/api` - the main entry point to the API
- **from the browser**
  - `http://localhost:xxxx/` serves `/api/<route-api>`

### Fetch data from the API

You must run at the same time the server: `npm run dev:api` and the the client `npm run dev:client`(in different VSCode windows)

## The API Documentation

### Users

#### Create new User

Creates a new user.

- **URL**

  /user-register

- **Method:**

  `POST`

- **Body:**

  ```js
  {
    "name": "laura",
    "password": "hello",
    "repeatPassword": "hello",
    "email":"laura@hyf.com"
  }
  ```

- **return:**

  ```js
    {
      "_id": "616ed72339ecbbf9b4c1c0b5",
      "name": "laura",
      "email": "lau@hyf.com"
  }
  ```

---

## Fetch users

Get all users from the collection.

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

Returns json data about a single channel.

- **URL**

/user-register

- **Method:**

`GET`

- **Result:**

```js
[
        }
        "_id": "616ed72339ecbbf9b4c1c0b5",
        "name": "rafael ",
        "email": "lau@hyf.com",
        "password": "aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d",
        "favorites": [],
        "publishPet": [],
        "registerDate": "2021-10-19T14:33:07.051Z",
        "__v": 0,
        "avatar": "c0b692fc-1622-4e1b-9571-eec912b77f1c.png",
        "location": "location phote",
        "phone": "0471758204",
    }
]
```

---

## Fetch one user

Get one user from the system.

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/user-register/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id = string`s

- **Result:**

  ```js
        }
        "_id": "616ed72339ecbbf9b4c1c0b5",
        "name": "rafael ",
        "email": "lau@hyf.com",
        "password": "aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d",
        "favorites": [],
        "publishPet": [],
        "registerDate": "2021-10-19T14:33:07.051Z",
        "__v": 0,
        "avatar": "c0b692fc-1622-4e1b-9571-eec912b77f1c.png",
        "location": "location phote",
        "phone": "0471758204",
    }
  ```

---

## Delete user

Remove a user of the dataBase.

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/user-register/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id = string`s

- **Result:**

  ```js
    }
     "message":"User, with the id: '616ed6d3335cd8cbee70d043' removed successfully"
    }
  ```

  ***

## Update Channel

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/user-register/:id

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `id= string`

- **Body**

Multiform data

id:616ed72339ecbbf9b4c1c0b5
name:rafael
location:location phote
phone:0471758204
email:abcd@hyf.com
repeatEmail:abcd@hyf.com
newPassword:hello
oldPassword:hello123
monday-access:true
monday-hours:8:00
tuesday-access:true
tuesday-hours:9:00 to 18:00
wednesday-access:true
wednesday-hours:9:00 to 18:00
thursday-access:true
thursday-hours:9:00 to 18:00
friday-access:true
friday-hours:9:00 to 18:00
saturday-access:true
saturday-hours:9:00 to 18:00
sunday-access:true
sunday-hours:9:00 to 18:00

- **Result:**

  ```js
  [
    {
      publicAccess: {
        monday: {
          access: true,
          hours: "8:00",
        },
        tuesday: {
          access: true,
          hours: "9:00 to 18:00",
        },
        wednesday: {
          access: true,
          hours: "9:00  to 18:00",
        },
        thursday: {
          access: true,
        },
        friday: {
          access: true,
          hours: "9:00 to 18:00",
        },
        saturday: {
          access: true,
          hours: "9:00 to 18:00",
        },
        sunday: {
          access: true,
          hours: "9:00 to 18:00",
        },
      },
      _id: "616ed72339ecbbf9b4c1c0b5",
      name: "rafael ",
      email: "lau@hyf.com",
      favorites: [],
      publishPet: [],
      registerDate: "2021-10-19T14:33:07.051Z",
      __v: 0,
      avatar: "c0b692fc-1622-4e1b-9571-eec912b77f1c.png",
      location: "location phote",
      phone: "0471758204",
      updateDate: "2021-10-19T14:38:47.047Z",
    },
  ];
  ```

---
