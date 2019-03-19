//--------------------------------------------------------
//-- Private registry
//--------------------------------------------------------
'use strict';

global.___26ee9882accbf27edabf94573016c024absolunetPrivateRegistry___ = global.___26ee9882accbf27edabf94573016c024absolunetPrivateRegistry___ || new WeakMap();

const registry = global.___26ee9882accbf27edabf94573016c024absolunetPrivateRegistry___;

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
