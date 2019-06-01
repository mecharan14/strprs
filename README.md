# String Parser (strprs)
---

A string parser for extracting data from a string by template paramaters.

This is currently availble in Javascript.

---

### Download

Download this library by clicking clone or download on top.

### Usage

For Normal version
> "<script src='strprs.js'></script>"

For Minified version
> "<script src='strprs.min.js'></script>"

### What is it?

if you want to parse some data from a string which you cannot do normally like,

> Hi, my name is ___Charan___ , and I am ___18___

Imagine it is a dynamic string from an api

Now you want to extract 'Charan' and '18' without knowing the value

lets use strprs for this.

```javascript
	let person = strprs('Hi, my name is %name% , and I am %age%', Hi, my name is Charan , and I am 18);
	console.log(persion)
```

> Output : {name: 'Charan', age: '18'}