//--------------------------------------------------------
//-- Private registry
//--------------------------------------------------------
'use strict';

const registry = new WeakMap();

const getRegistry = (key) => {
	return registry.get(key) || {};
};






class PrivateRegistry {

	constructor(key) {
		this.key = key;
	}

	get(name) {
		return getRegistry(this.key)[name];
	}

	set(name, value) {
		const data = getRegistry(this.key);
		data[name] = value;
		registry.set(this.key, data);
	}

}


module.exports = (key) => {
	return new PrivateRegistry(key);
};
