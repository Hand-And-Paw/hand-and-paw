How data is stored in the system.

# Data Access

Functions you can use in your Business Logic to access and modify program state.

Each function is stored in a separate file so that all actions are easily visible, and so that dependency graphs clearly indicate which actions are used where.

- [Data Access](#data-access)
  - [`insert(key = '', value)`](#insertkey---value)
  - [`find(key = '')`](#findkey--)
  - [`findAll()`](#findall)
  - [`save(key ='', value)`](#savekey--value)
  - [`remove(key = '')`](#removekey--)
  - [`removeAll()`](#removeall)
  - [`hasKey(key = '')`](#haskeykey--)
  - [`allKeys()`](#allkeys)
  - [`load(dataPath = '', import.meta)`](#loaddatapath---importmeta)

> These Data Access functions will only work in the browser, not in Node.js

---

## [`insert(key = '', value)`](./insert.js)

This function will add a new key/value pair to your program's state. It will only work if the key does not exist already, if you try inserting a key that already exists the function will throw an error

- **args**:
  - _key (string)_: The key to insert into your program's state.
  - _value (JSON data)_: The value to save in key. The value must be a JSON type: _string, number, boolean, null, array or object_
- **returns**: `undefined`, no return value
- **throws**:
  - _TypeError_: If the key is not a string
  - _TypeError_: if the value is not a JSON data type
  - _ReferenceError_: If the key already exists in state
- **side-effect**: There will be a new key/value pair in your program's state

<details>
<summary>use case</summary>

```js
import { insert } from '... ... data-access/insert.js';

// a business logic function
export const addNewUser = (userName = '', email = '') => {
  try {
    insert(userName, email);
    return `success! new user "${userName}" was created`;
  } catch (err) {
    console.error(err);
    return `failure! unable to create new user`;
  }
};
```

</details>

## [`find(key = '')`](./find.js)

This function will return the value saved behind a specific key. It can only find keys that already exist in state!

- **args**:
  - _key (string)_: The key to find
- **returns**: the value stored in your key
- **throws**:
  - _TypeError_: If the key is not a string
  - _ReferenceError_: If the key does not exist in state
- **side-effect**: none

<details>
<summary>use case</summary>

```js
import { find } from '... ... data-access/find.js';

// a business logic function
export const getUser = (userName = '') => {
  try {
    const userEmail = find(userName);
    return userEmail;
  } catch (err) {
    console.error(err);
    return `failure! user "${userName}" does not exist`;
  }
};
```

</details>

## [`findAll()`](./find-all.js)

Returns all of the key/value pairs in state as an array of objects:

- **args**: none
- **returns**: An array of objects representing all the key/value pairs in state. The values are all clones so you cannot modify state by side-effect.
- **throws**: none
- **side-effect**: none

<details>
<summary>use case</summary>

```js
import { findAll } from '... ... data-access/find-all.js';

// a business logic function
export const listUsers = () => {
  const allUsers = findAll();
  console.log(allUsers); /*
    [
      { key: 'user 1', value: 'email 1' },
      { key: 'user 2', value: 'email 2' },
      { key: 'user 3', value: 'email 3' },
      ...
    ]
  */
  const allUserNames = allUsers.map((userEntry) => userEntry.key);
  const formattedUserNames = 'all users:\n- ' + allUserNames.join('\n- ');
  console.log(formattedUserNames); /*
    all users:
    - user 1
    - user 2
    - user 3
    ...
  */
  return formattedUserNames;
};
```

</details>

## [`save(key ='', value)`](./save.js)

Updates an existing entry in state with a new value. If the key does not already exist it will throw an error, you need to `insert` first before you can `save` changes later.

- **args**:
  - _key (string)_: where to save changes
  - _value (JSON data)_: the new data to save
- **returns**: `undefined`, no return value.
- **throws**:
  - _TypeError_: If the key is not a string
  - _TypeError_: If the value is not JSON data
  - _ReferenceError_: If the key does not exist in state
- **side-effect**: The data stored behind your key will be changed.

<details>
<summary>use case</summary>

```js
import { save } from '... ... data-access/save.js';

// a business logic function
export const changeEmail = (userName = '', newEmail = '') => {
  try {
    save(userName, email);
    return `success! ${userName}'s email has been changed`;
  } catch (err) {
    console.error(err);
    return `failure! unable to save new email`;
  }
};
```

</details>

## [`remove(key = '')`](./remove.js)

Removes a key/value pair from state.

- **args**:
  - _key (string)_: which key/value pair to remove
- **returns**: `undefined`, no return value.
- **throws**:
  - _TypeError_: If the key is not a string
  - _ReferenceError_: If the key does not exist in state
- **side-effect**: The key/value pair will be removed from state

<details>
<summary>use case</summary>

```js
import { remove } from '... ... data-access/remove.js';

// a business logic function
export const deleteUser = (userName = '') => {
  try {
    remove(userName);
    return `success! ${userName} has been deleted`;
  } catch (err) {
    console.error(err);
    return `failure! unable to remove user "${userName}"`;
  }
};
```

</details>

## [`removeAll()`](./remove-all.js)

Removes all key/value pairs

- **args**: none
- **returns**: `undefined`, no return value.
- **throws**: none
- **side-effect**: All data will be removed from state, no key/value pairs will be left.

<details>
<summary>use case</summary>

```js
import { removeAll } from '... ... data-access/remove-all.js';

// a business logic function
export const closeWebsite = () => {
  removeAll();
  return 'your website has been closed, there are no more users';
};
```

</details>

---

## [`hasKey(key = '')`](./has-key.js)

Tells you if a specific key exists in your state.

- **args**:
  - _key (string)_: the key to check for in state
- **returns**: `true` or `false`, depending on if the key exists or not.
- **throws**:
  - _TypeError_: if the key is not a string
- **side-effect**: none

<details>
<summary>use case</summary>

```js
import { hasKey } from '... ... data-access/has-key.js';
import { remove } from '... ... data-access/remove.js';

// a business logic function
export const deleteUser = (userName = '') => {
  if (!hasKey(userName)) {
    return `user "${userName}" does not exist, cannot delete.`;
  }

  remove(userName);
  return `success! ${userName} has been deleted`;
};
```

</details>

## [`allKeys()`](./all-keys.js)

Returns an array containing all the keys in state.

- **args**: none
- **returns**: An array of strings.
- **throws**: none
- **side-effect**: none

<details>
<summary>use case</summary>

```js
import { allKeys } from '... ... data-access/all-keys.js';

// a business logic function
export const listUsers = () => {
  const allUserNames = allKeys();
  console.log(allUsers); /*
    [
      'user 1',
      'user 2',
      'user 3',
      ...
    ]
  */
  const formattedUserNames = 'all users:\n- ' + allUserNames.join('\n- ');
  console.log(formattedUserNames); /*
    all users:
    - user 1
    - user 2
    - user 3
    ...
  */
  return formattedUserNames;
};
```

</details>

---

## [`load(dataPath = '', import.meta)`](./load.js)

The `load` function is different from the rest of these functions. You will need to call it once when your program is initialized and never again.

It also works using `async`/`await` - you don't need to be understand this! The project starter will already have this code written for you, and you will study it in the next module.

- **args**
  - _dataPath (string)_: A relative path from the file calling `load` to your .json data file.
  - _meta ({ url: '' })_: the value of `import.meta` in the file initiating the `load` call
- **returns**: `undefined`, no return value
- **throws**:
  - _TypeError_: If the dataPath is not a string
  - _TypeError_: if the loaded JSON data is not an object
  - _Error_: If there was a problem fetching the data
  - _Error_: If the initial state does not match the schema
- **side-effects**:
  - removes extra keys from state that are not in your data
  - adds keys to state that are not in your data
  - _does not_ modify keys in state that are also in your data (careful! This means your program's state will not always be what is written in your data file)

<details>
<summary>use case</summary>

```js
import { load } from '... ... data-access/load.js';

// a business logic function
export const initializeState = async () => {
  // it will fetch this JSON data and initialize your program state
  await load('../ ... /path/to/data-file.json', import.meta);
};
```

</details>
