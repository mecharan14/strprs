# String Parser (strprs)
---

A string parser for extracting data from a string by template paramaters.

This is currently availble in Javascript.

---

### Download

Download this library by clicking clone or download on top.

### Usage

For Normal version
> <script src='strprs.js'></script>

For Minified version
> <script src='strprs.min.js'></script>

### What is it?

if you want to parse some data from a string which you cannot do normally like,

> Hi, my name is ___Charan___ , and I am ___18___

Imagine it is a dynamic string from an api

Now you want to extract 'Charan' and '18' without knowing the value

lets use strprs for this.

You need to write a template which is identical to the target string and enclose paramaters with % as shown below

```javascript
	let person = strprs('Hi, my name is %name% , and I am %age%', 'Hi, my name is Charan , and I am 18');
	console.log(persion) /* Output : { name: 'Charan', age: '18' } */
```

***Data is returned as object***

You can then use the data however you like

```javascript
	let target = "I'm feeling %express% and I am in %type% place. I hope it will be %caption%.";
	let dest = "I'm feeling lucky and I am in cool place. I hope it will be memorable.";
	let string = strprs(target,dest);
	console.log(string.express); // lucky
	console.log(string.type); // cool
	console.log(string.caption); // memorable
```

Thats it.

Thank you for visting.
