# Beezy Bookstore Test

### **INTRODUCTION**

####  **The test.**

This front-end test was developed applying the following technologies and methodologies:

+ Javascript (ECMAScript2016)
+ ReactJS
+ React Router 
+ CSS
+ Sass
+ BEM
+ Chai

![alt text](https://davidmles.com/wp-content/uploads/2017/02/html-css-js-768x427.png "technologies")

---

### **INSTRUCTIONS**

First, clone the repository:

> https://github.com/vior1992/Beezy-test.git

#### **RUN THE APPLICATION**

For run, move to the bookstore folder:

> $ cd bookstore

Install the necessary dependencies:

> $ npm install

Finally, run the application:

> $ npm start

#### **RUN THE TEST**

On the next folders:

+ api
+ data
+ logic/index.js
+ utilities

You must switch the comment lines to unncoment, and the oposite.

Example on folder data/Book.js:
```javascript
//For run the app, uncomment this:
// export default Book

//For run the test, uncomment this:
module.exports = Book
```

Finally, run the test:

> $ npm test

---

### **DOCUMENTATION**

On the **landing**, the user can see the existen **books**, and is possible filter the books for **genre**.

The **Books** site is similar to landing, but you can **edit**, **delete** or **create** new book.

Like on Books site but without filter, on **Genres** site you can **edit**, **delete** or **create** new genre.

---

### **TECHNICAL DESCRIPTION**

The application was built using ReactJS with create-react-app, and tested with chai. 

Styles was made using SASS and BEM.

#### **STRUCTURE**

+ bookstore
    + public
    + src
        + api
        + components
        + data
        + logic
        + utilities

---

### **LIVE DEMO**

<!-- [Bookstore live demo](http: "Bookstore") -->

---

### **AUTHOR**
Daniel Villegas Ortiz
