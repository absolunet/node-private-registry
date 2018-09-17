# @absolunet/private-registry

[![npm](https://img.shields.io/npm/v/@absolunet/private-registry.svg)](https://www.npmjs.com/package/@absolunet/private-registry)
[![npm dependencies](https://david-dm.org/absolunet/node-private-registry/status.svg)](https://david-dm.org/absolunet/node-private-registry)
[![npms](https://badges.npms.io/%40absolunet%2Fprivate-registry.svg)](https://npms.io/search?q=%40absolunet%2Fprivate-registry)
[![Travis CI](https://api.travis-ci.org/absolunet/node-private-registry.svg?branch=master)](https://travis-ci.org/absolunet/node-private-registry/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> Private registry for classes


## Install

```sh
$ npm install @absolunet/private-registry
```


## Usage

```js
const __ = require('@absolunet/private-registry');


class Foo {

	constructor(id) {
		__(this).set('id', id);
	}

	get bar() {
		return `My id is ${__(this).get('id')}`;
	}

}


const a = new Foo('123');
const b = new Foo('456');

console.log(a.bar);
console.log(b.bar);

// My id is 123
// My id is 456
```


## License

MIT © [Absolunet](https://absolunet.com)
