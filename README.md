# String Parser (strprs)

A string parser for extracting data from a string by template paramaters.

This is currently availble in Javascript.

# strprs — modern template-based string parser

A tiny, modern JavaScript utility that extracts values from a string using a template with `%param%` placeholders.

## Install

Clone this repo or add to your project:

```sh
git clone https://github.com/mecharan14/strprs.git
```

Or, after publishing to npm:

```sh
npm install strprs
```

## Usage (ES Modules)

Import and use in your project:

```js
import { strprs } from 'strprs';


const result = strprs('Hi, my name is %name% , and I am %age%', 'Hi, my name is Charan , and I am 18');
console.log(result); // { name: 'Charan', age: '18' }
```

## What it does

Given a template string with `%param%` placeholders, `strprs` returns an object mapping param names to the corresponding values found in the input string.

**Example:**

Template: `Hi, my name is %name% , and I am %age%`

Input:   `Hi, my name is Charan , and I am 18`

Result: `{ name: 'Charan', age: '18' }`

## API

```js
strprs(template: string, input: string): Object
```

- Returns an object mapping param names to extracted values.
- Throws if arguments are not strings.

## Edge cases & limitations

- The parser uses a simple regex and expects the template to match the input structure.
- It does not handle repeated param names, optional segments, or values containing `%`.
- For advanced parsing, consider a more robust solution (regex with named groups, etc).

## Contributing

Contributions are welcome! Please open an issue or PR for improvements, tests, or packaging.

## License

MIT — see `LICENSE` file for details.
