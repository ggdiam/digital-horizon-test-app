const fs = require('fs');

const names = fs.readFileSync('names.txt', 'utf-8').split('\n');

const random = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

let globalId = 0;

const createFlatTree = (depth, parentId = null) =>
    depth === 0 ? [] : Array(random(1, 4)).fill(null).map(_ => [
        {
            id: globalId,
            parentId,
            name: names[random(0, names.length)],
            age: random(20, 80),
        },
        ...createFlatTree(Math.max(0, depth - random(1, 2)), globalId++)
    ]).reduce((acc, tree) => [ ...acc, ...tree ], []);

const data = createFlatTree(5).sort((a, b) => {
    if (a.parentId === null || a.parentId < b.parentId) return -1;
    if (a.parentId > b.parentId) return 1;
    return 0;
});

console.log(`generated ${data.length} entities`);

fs.writeFileSync('output.json', JSON.stringify(data, undefined, 4));
