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
		__(this).set({
			id:   `id::${id}`,
			seed: Math.random()
		});
	}

	set bar(id) {
		__(this).set('id', `id::${id}`);
	}

	get bar() {
		return `My id is ${__(this).get('id')}`;
	}

	get bar2() {
		const { id, seed } = __(this).get();
		return `${id}::${seed}`;
	}

}


const a = new Foo('123');
const b = new Foo('456');

console.log(a.bar);
console.log(b.bar);
console.log(b.bar2);

// My id is id::123
// My id is id::456
// id::456::0.0337644127126262
```


## API

### get()
Return `Object` of all registry entries



### get(name)
Return value of a registry's entry

#### name
*Required*<br>
Type: `String`<br>
Entry's name.



### set(object)
Set all entries from object into the registry

#### object
*Required*<br>
Type: `Object`<br>
Object which each entry will be added to the registry



### set(name, value)
Set entry into the registry

#### name
*Required*<br>
Type: `String`<br>
Entry's name.

#### value
*Required*<br>
Type: Any<br>
Value of the entry



## License

MIT © [Absolunet](https://absolunet.com)
