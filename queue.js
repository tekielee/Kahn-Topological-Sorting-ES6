class Queue {
	constructor(limit = 20) {
		this.limit = limit;
		this.queue = [];
	}
	
	isEmpty() {
		if(this.queue === 'undefined' || this.queue === null || this.queue.length === 0) {
			return true;
		} else {
			return false;
		}
	}
	
	isFull() {
		if(this.limit <= this.queue.length) {
			return true;
		} else {
			return false;
		}
	}
	
	enqueue(item) {
		if(this.isFull()) {
			console.log('Queue is full');
		} else {
			this.queue.push(item);
		}
	}
	
	dequeue() {
		if(this.isEmpty()) {
			console.log('Queue is empty');
		} else {
			return this.queue.shift();
		}
	}
	
	peek() {
		return this.queue[0];
	}
	
	count() {
		return this.queue.length;
	}
}