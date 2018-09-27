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
		if (typeof name !== 'undefined') {
			return getRegistry(this.key)[name];
		}

		return getRegistry(this.key);
	}


	set(name, value) {
		const data = getRegistry(this.key);

		if (typeof name === 'object') {
			const items = name;
			Object.keys(items).forEach((itemName) => {
				data[itemName] = items[itemName];
			});
		} else {
			data[name] = value;
		}

		registry.set(this.key, data);
	}

}


module.exports = (key) => {
	return new PrivateRegistry(key);
};
