function bfs(graph,startNode){
    let visited = new Set();
    let queue = [startNode];
    while(queue.length > 0){
        let node = queue.shift();

        if(!visited.has(node)){
            visited.add(node);
            console.log(node);
            graph[node].forEach(element => {
                if(!visited.has(element)){
                    queue.push(element)
                }
            });
        }
    }
}


let graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

bfs(graph, 'A');