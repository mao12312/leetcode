const countNegatives = (grid) => {
    return count = grid.map(arr => arr.filter(e => { return e < 0; }).length).reduce((p, c) => p += c)
}

const countNegatives = (grid) => {
    let count = 0;
    for (i = 0; i < grid.length; i++) {
        count += grid[i].filter(e => { return e < 0; }).length
    }
    return count;
}
countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])