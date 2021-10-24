# Hand and paw API

This project will serve as the first introduction to setting up a simple REST backend for the HackYourFuture Web Apps module. The code in the start-of-class branch has all the endpoints for the channels resource implemented and serves as example code and starting point for the lecture.

During the lecture the endpoints of the messages repo should be implemented in order to make the chat client work. A reference implementation of the end goal can be found on the reference-implementation branch.

## Index

- [Hand and paw API](#hand-and-paw-api)
  - [Index](#index)
  - [Getting Started](#getting-started)
    - [Install database server](#install-database-server)
    - [In the Hand and Paw app repo](#in-the-hand-and-paw-app-repo)
    - [Using the API](#using-the-api)
    - [Fetch data from the API](#fetch-data-from-the-api)
  - [The API Documentation](#the-api-documentation)
    - [Routes](#routes)
  - [Users](#users)
    - [Create new User](#create-new-user)
    - [Fetch users](#fetch-users)
    - [Fetch one user](#fetch-one-user)
    - [Delete user](#delete-user)
    - [Update User](#update-user)
    - [Delete user publication](#delete-user-publication)
  - [Animals](#animals)
    - [Create new animal](#create-new-animal)
    - [Get animals](#get-animals)
    - [Get one animal](#get-one-animal)
    - [Delete Animal](#delete-animal)
    - [Update Animal](#update-animal)
    - [Upload Pictures](#upload-pictures)
    - [Delete Picture](#delete-picture)
    - [Update Picture](#update-picture)
    - [Update Principal picture](#update-principal-picture)

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

### Routes

- [Users](#users)
- [animals](#animals)

## Users

### Create new User

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

### Fetch users

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

### Fetch one user

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

### Delete user

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

---

### Update User

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/user-register/:id

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  `i`

- **Body**

Multiform data

| key              | value                    | type    |
| ---------------- | ------------------------ | ------- |
| id               | 616ed72339ecbbf9b4c1c0b5 | text    |
| name             | rafael                   | text    |
| location         | location phote           | text    |
| phone            | 0471758204               | text    |
| email            | abcd@hyf.com             | text    |
| repeatEmail      | abcd@hyf.com             | text    |
| newPassword      | hello                    | text    |
| oldPassword      | hello123                 | text    |
| monday-access    | true                     | boolean |
| monday-hours     | 8:00                     | text    |
| tuesday-access   | true                     | boolean |
| tuesday-hours    | 9:00 to 18:00            | text    |
| wednesday-access | true                     | boolean |
| wednesday-hours  | 9:00 to 18:00            | text    |
| thursday-access  | true                     | boolean |
| thursday-hours   | 9:00 to 18:00            | text    |
| friday-access    | true                     | boolean |
| friday-hours     | 9:00 to 18:00            | text    |
| saturday-access  | true                     | boolean |
| saturday-hours   | 9:00 to 18:00            | text    |
| sunday-access    | true                     | boolean |
| sunday-hours     | 9:00 to 18:00            | text    |
| avatar           | profile.jpg              | file    |

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

### Delete user publication

Remove the animal id in the `publishedAnimals` property, and deletes the animal in Animal collection

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/user-register/delete-animal/:id

- **Method:**

  `PATCH`

- **URL Params**

  `id = string`

  **Required:**

  `id = string, animalId = string`

  **Body**

```js
  {
    "animalId": "61701cf768400ebe536a57c8"
  }
```

- **Result:**

  ```js
    }
      "message": "publication id: 61701cf768400ebe536a57c8 was removed successfully"
    }
  ```

---

## Animals

### Create new animal

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

Creates a new user.

- **URL**

  /api/animals/register

- **Method:**

  `POST`

- **required:**

  `userId, name, type, breed, gender, character, dateBirth, location, phone, webSite, describeAnimal, pictures`

- **Body**

Multiform data

| key            | value                    | type |
| -------------- | ------------------------ | ---- |
| userId         | 616fc83826985b2f4d966763 | text |
| name           | canelo                   | text |
| type           | dog                      | text |
| breed          | cocker                   | text |
| gender         | male                     | text |
| character      | angry                    | text |
| dateBirth      | 18/12/15                 | text |
| location       | guanare                  | text |
| phone          | 6584564564               | text |
| webSite        | www.dfss.com             | text |
| describeAnimal | fdsfdsfdsf dsf           | text |
| picture1       | dog1.jpg                 | file |
| picture2       | dog2.jpg                 | file |
| picture3       | dog3.jpg                 | file |
| picture4       | dog4.jpg                 | file |

- **return:**

  ```js
  {
    "userId": "616fc83826985b2f4d966763",
    "name": "canelo",
    "type": "lion",
    "breed": "cocker",
    "gender": "male",
    "character": "angry",
    "dateBirth": "18/12/15",
    "location": "guanare",
    "phone": "6584564564",
    "webSite": "www.dfss.com",
    "describeAnimal": "fdsfdsfdsf dsf
    "pictures": [
        "bfc8a5bb-8ecd-416b-8da1-80793f300c19.jpg",
        "2e1100b5-6536-4fdb-9a5e-7018a97fdaa7.jpg",
        "10c94ae4-f58a-48aa-b17b-3b71260ffde9.jpg",
        "1f9e71ad-00f4-4299-8995-7c2b9b24bf74.jpg"
    ],
    "_id": "616fc88526985b2f4d966767",
    "publishDate": "2021-10-20T07:43:01.071Z",
    "__v": 0
  }
  ```

  > [Back to main animal routes](#animals)

---

### Get animals

Get all users from the collection.

> no login or register required

Returns json data about a single channel.

- **URL**

  /api/animals

- **Method:**

`GET`

- **Result:**

```js
[
  {
    "userId": "616fc83826985b2f4d966763",
    "name": "canelo",
    "type": "lion",
    "breed": "cocker",
    "gender": "male",
    "character": "angry",
    "dateBirth": "18/12/15",
    "location": "guanare",
    "phone": "6584564564",
    "webSite": "www.dfss.com",
    "describeAnimal": "fdsfdsfdsf dsf
    "pictures": [
        "bfc8a5bb-8ecd-416b-8da1-80793f300c19.jpg",
        "2e1100b5-6536-4fdb-9a5e-7018a97fdaa7.jpg",
        "10c94ae4-f58a-48aa-b17b-3b71260ffde9.jpg",
        "1f9e71ad-00f4-4299-8995-7c2b9b24bf74.jpg"
    ],
    "_id": "616fc88526985b2f4d966767",
    "publishDate": "2021-10-20T07:43:01.071Z",
    "__v": 0
  }
]
```

> [Back to main animal routes](#animals)

---

### Get one animal

Get one user from the system.

No registration or authorization required

- **URL**

  /api/animals/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id = string`

- **Result:**

  ```js
  {
    "userId": "616fc83826985b2f4d966763",
    "name": "canelo",
    "type": "lion",
    "breed": "cocker",
    "gender": "male",
    "character": "angry",
    "dateBirth": "18/12/15",
    "location": "guanare",
    "phone": "6584564564",
    "webSite": "www.dfss.com",
    "describeAnimal": "fdsfdsfdsf dsf
    "pictures": [
        "bfc8a5bb-8ecd-416b-8da1-80793f300c19.jpg",
        "2e1100b5-6536-4fdb-9a5e-7018a97fdaa7.jpg",
        "10c94ae4-f58a-48aa-b17b-3b71260ffde9.jpg",
        "1f9e71ad-00f4-4299-8995-7c2b9b24bf74.jpg"
    ],
    "_id": "616fc88526985b2f4d966767",
    "publishDate": "2021-10-20T07:43:01.071Z",
    "__v": 0
  }
  ```

  > [Back to main animal routes](#animals)

---

### Delete Animal

Remove an animal of the dataBase.

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/animals/delete/:id

- **Method:**

  `DELETE`

  **Required:**

  `id = string`s

- **Result:**

  ```js
    }
     "message":"Animal, with the id: '616fc5693e31fe2c1f5629a0' removed successfully"
    }
  ```

> [Back to main animal routes](#animals)

---

### Update Animal

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/animals/:id

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `id, userId`

- **Body**

Multiform data

| key            | value                    | type |
| -------------- | ------------------------ | ---- |
| userId         | 616fc83826985b2f4d966763 | text |
| name           | canelo                   | text |
| type           | dog                      | text |
| breed          | cocker                   | text |
| gender         | male                     | text |
| character      | angry                    | text |
| dateBirth      | 18/12/15                 | text |
| location       | guanare                  | text |
| phone          | 6584564564               | text |
| webSite        | www.dfss.com             | text |
| describeAnimal | fdsfdsfdsf dsf           | text |
| picture1       | cat1.jpg                 | file |
| picture2       | cat2.jpg                 | file |
| picture3       | cat3.jpg                 | file |
| picture4       | cat4.jpg                 | file |

- **Result:**

  ```js
  {
    "userId": "616fc83826985b2f4d966763",
    "name": "canelo",
    "type": "cat",
    "breed": "cocker",
    "gender": "male",
    "character": "angry",
    "dateBirth": "18/12/15",
    "location": "guanare",
    "phone": "6584564564",
    "webSite": "www.dfss.com",
    "describeAnimal": "fdsfdsfdsf dsf
    "pictures": [
        "bfc8a5bb-8ecd-416b-8da1-80793f300c19.jpg",
        "2e1100b5-6536-4fdb-9a5e-7018a97fdaa7.jpg",
        "10c94ae4-f58a-48aa-b17b-3b71260ffde9.jpg",
        "1f9e71ad-00f4-4299-8995-7c2b9b24bf74.jpg"
    ],
    "_id": "616fc88526985b2f4d966767",
    "publishDate": "2021-10-20T07:43:01.071Z",
    "__v": 0
  }
  ];

  ```

  > [Back to main animal routes](#animals)

---

### Upload Pictures

Upload one or multiple pictures

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/animals/upload-pictures/:animalId

- **Method:**

  `patch`

- **URL Params**

`animalId: string`

**Required:**

`animalId`

- **Body**

Multiform Data

| key      | value    | type |
| -------- | -------- | ---- |
| picture1 | cat1.jpg | file |
| picture2 | cat2.jpg | file |
| picture3 | cat3.jpg | file |
| picture4 | cat4.jpg | file |

- **Result:**

  ```js
  {
    message: "pictures uploaded successfully";
  }
  ```

  > [Back to main animal routes](#animals)

---

### Delete Picture

Deletes one picture

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/animals/delete-picture/:animalId

- **Method:**

  `patch`

- **URL Params**

`animalId: string`

**Required:**

`animalId`, `pictureId`

- **Body**

```js
{
    "pictureId": "61751428e9e34386a8e8cf01"
}
```

- **Result:**

  ```js
  {
    message: `picture, with the id: '61751428e9e34386a8e8cf01' removed successfully`;
  }
  ```

  > [Back to main animal routes](#animals)

---

### Update Picture

Updates one picture

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/animals/update-picture/:animalId

- **Method:**

  `patch`

- **URL Params**

`animalId: string`

**Required:**

`animalId`, `pictureId`

- **Body**

Multiform Data

| key            | value    | type   |
| -------------- | -------- | ------ |
| animal-picture | cat1.jpg | file   |
| pictureId      | cat2.jpg | string |

- **Result:**

  ```js
  {
    message: `picture updated successfully`;
  }
  ```

> [Back to main animal routes](#animals)

---

### Update Principal picture

Updates the principal picture of the animal

> To use this route, you must register and then login. Once logged in, in Postman you need to put in the header section as key **Authorization** and value **bearer token** where **token** is the code that you are going to receive as response once you are logged in.

- **URL**

  /api/animals/update-isPrincipal/:animalId

- **Method:**

  `patch`

- **URL Params**

`animalId: string`

**Required:**

`animalId`, `pictureId`

- **Body**

```js
{
    "pictureId": "6172db4b6840eeb401673096",
    "isPrincipal": true
}
```

- **Result:**

  ```js
  {
    message: `picture, with the id: '61751428e9e34386a8e8cf02' updated successfully`;
  }
  ```

> [Back to main animal routes](#animals)

---
