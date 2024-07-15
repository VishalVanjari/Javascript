function dfs(graph, startNode) {
    let visited = new Set();
    let stack = [startNode];

    while (stack.length > 0) {
        let node = stack.pop();

        if (!visited.has(node)) {
            visited.add(node);
            console.log(node);

            graph[node].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
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

dfs(graph, 'A'); 
