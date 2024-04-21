let { dominatorContested } = require('../tiles/dominators.js');
let { normal, nest } = require('../tiles/misc.js'),
bases = require('../tiles/tdm.js'),
teams = require('../gamemodeconfigs/domination.js').TEAMS;
// assume the neccessary Tile instances are imported
let roomSetup = [
    ["bas1", "bas1", "bas1", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["bas1", "bap1", "bas1", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["bas1", "bas1", "bas1", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "dom0", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "dom0", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "dom0", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "dom0", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "bas2", "bas2", "bas2"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "bas2", "bap2", "bas2"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "bas2", "bas2", "bas2"],
];
let mapping = {
    norm: normal,
    nest: nest,
    dom0: dominatorContested,
    bas1: bases.base1,
    bap1: bases.base1protected,
    bas2: bases.base2,
    bap2: bases.base2protected,
};
roomSetup = roomSetup.map(row =>
    row.map(t =>
        mapping[t]
    )
);
module.exports = roomSetup;