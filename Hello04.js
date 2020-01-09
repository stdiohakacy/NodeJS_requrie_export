function Person(){
	this.message = "Hello04";
	this.sayHello = function(){
		console.log(this.message);
	}
}

module.exports = Person;