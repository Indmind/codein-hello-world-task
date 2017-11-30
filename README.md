# Hello World

this npm module is for [Google Code In Task](https://codein.withgoogle.com/dashboard/task-instances/5162132322648064/)

## Installation

 ```
 npm install codein-hello-world-task
 ```

## Usage

- import the module
```es6
const hello = require("codein-hello-world-task");
```
- call
```es6
hello("dogci")
    // fulfilled
    .then(mess => log(mess))
    // rejected
    .catch(mess => log(mess));
```
