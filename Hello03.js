function Person(){
	this.message = "Hello03";
	this.sayHello = function(){
		console.log(this.message);
	}
}

module.exports = new Person();