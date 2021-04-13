let graph = [
	[0, 0, 0, 0, 1],
	[1, 0, 0, 1, 0],
	[0, 1, 0, 1, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0]
];

function topologicalSort(graph) {
	let order = new Queue();
	let queue = new Queue();
	let size = graph.length;
	let incoming = Array(size).fill(0, 0);
	
	for(let i = 0; i < size; i++) {
		for(let j = 0; j < size; j++) {
			if(graph[j][i]) {
				incoming[i]++;
			}
		}
		if(incoming[i] == 0) {
			queue.enqueue(i);
		}
	}
		
	while(!queue.isEmpty()) {
		let node = queue.dequeue();
		for(let i = 0; i < size; i++) {
			if(graph[node][i] == 1) {
				graph[node][i] = 0;
				incoming[i]--;
				if(incoming[i] == 0) {
					queue.enqueue(i);
				}
			}
		}
		order.enqueue(node);
	}
	if(order.count() != size) {
		return new Queue(); //cycle detected
	}
	return order;
}

let sorted = topologicalSort(graph);
while(!sorted.isEmpty()) {
	console.log(sorted.dequeue());
}