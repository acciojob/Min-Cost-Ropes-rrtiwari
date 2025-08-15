function mincost(arr) { 
    let a = [...arr].sort((a, b) => a - b);
    let cost = 0;

    while (a.length > 1) {
        let first = a.shift();
        let second = a.shift();
        let newrope = first + second;
        cost += newrope;
        a.push(newrope);
        a.sort((a, b) => a - b);
    }

    return cost;
}

module.exports = mincost;
