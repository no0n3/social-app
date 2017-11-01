const express = require('express');
var bodyParser = require('body-parser');
apiController = require('./src/controllers/api.controller')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    next();
});

app.get('/api/next-generation', apiController.nextGeneration);
app.get('/api/check-status', apiController.checkStatus);
app.post('/api/reset', apiController.reset);





var boardCells = new BoardCells();

function BoardCells() {
    var cellSet = {};
    var self = this;

    this.setCells = function(data) {
        if (!(data instanceof Array)) {
            return;
        }
        cellSet = {};
        for (let i in data) {
            cellSet[+data[i].x + '|' + +data[i].y] = new Cell({
                alive: true,
                position: {
                    x: +data[i].x,
                    y: +data[i].y
                },
                boardCells: self
            });
        }
    }

    this.nextGeneration = function() {
        var nextGenData = calculateNextGeneration();
        cellSet = nextGenData.alive;
        // aliveCells = nextGenData.alive;
        for (let i in nextGenData.alive) {
            nextGenData.alive[i].setAlive(true);
        }
        for (let i in nextGenData.dead) {
            nextGenData.dead[i].setAlive(false);
        }
        // generations.count++;

        let alivePositions = [];
        for (let i in nextGenData.alive) {
            alivePositions.push(nextGenData.alive[i].getPosition());
        }
        let dp = [];
        for (let i in nextGenData.dead) {
            dp.push(nextGenData.dead[i].getPosition());
        }

        return {
            // number: generations.count,
            alive: alivePositions,
            dead: dp
        };
        return {
            // number: generations.count,
            alive: alivePositions
        };
    };
    this.clear = function() {

    };

    function calculateNextGeneration() {
        var nextGenAlive = [];
        var nextGenDead = [];
        for (let i in cellSet) {
            if (cellSet[i].getNextGenerationStatus()) {
                nextGenAlive.push(cellSet[i]);
            } else {
                nextGenDead.push(cellSet[i]);
            }
        }

        return {
            alive: nextGenAlive,
            dead: nextGenDead
        };
    }

    this.getByCoords = function(x, y) {
        return self.get(x + '|' + y);
    };
    this.get = function(key) {
        if (cellSet[key] instanceof Cell) {
            return cellSet[key];
        }

        return null;
    };
}

function Cell(data) {
    data = ('object' === typeof data) ? data : {};
    var alive = Boolean(data.alive);
    var position = {
        x: data.position.x,
        y: data.position.y
    };
    var boardCells = (data.boardCells instanceof BoardCells) ? data.boardCells : null;

    // var adjecent = {
    //     top: null,
    //     left: null,
    //     right: null,
    //     topLeft: null,
    //     topRight: null,
    //     botLeft: null,
    //     botRight: null,
    // };

    this.setAlive = function(alive) {
        alive = Boolean(alive);
    };

    this.isAlive = function() {
        return alive;
    };

    this.getPosition = function() {
        return {
            x: position.x,
            y: position.y
        };
    };

    this.getNextGenerationStatus = function() {
        let aliveAdjecent = getAdjecentAlive();

        if (alive) {
            if (2 > aliveAdjecent || 3 < aliveAdjecent) {
                return false;
            }
        } else if (!alive) {
            if (3 === c) {
                return true;;
            }
        }

        return Boolean(alive);
    };

    function getAdjecentAlive() {
        let aliveAdjecent = 0;
        aliveAdjecent += boardCells.getByCoords(position.x + 1, position.y + 1) ? 1 : 0;
        aliveAdjecent += boardCells.getByCoords(position.x - 1, position.y + 1) ? 1 : 0;
        aliveAdjecent += boardCells.getByCoords(position.x, position.y + 1) ? 1 : 0;

        aliveAdjecent += boardCells.getByCoords(position.x + 1, position.y - 1) ? 1 : 0;
        aliveAdjecent += boardCells.getByCoords(position.x - 1, position.y - 1) ? 1 : 0;
        aliveAdjecent += boardCells.getByCoords(position.x, position.y - 1) ? 1 : 0;

        aliveAdjecent += boardCells.getByCoords(position.x - 1, position.y) ? 1 : 0;
        aliveAdjecent += boardCells.getByCoords(position.x + 1, position.y) ? 1 : 0;
        // for (let i in adjecent) {
        //     if (!(adjecent[i] instanceof Cell)) {
        //         continue;
        //     }

        //     if (adjecent[i].isAlive()) {
        //         aliveAdjecent++;
        //     }
        // }

        return aliveAdjecent;
    }
}

function Board() {
    if (!(this instanceof Board)) {
        return new Board();
    }

    var aliveCells = [];
    var generations = {
        count: 1,
        cur: null,
        prev: null,
    };
    var cells = [];

    this.init = function() {
        for (let y = 0; y < Board.SIZE; y++) {
            for (let x = 0; x < Board.SIZE; x++) {
                new Cell({
                    alive: false,
                    position : {x, y}
                });
            }
        }
    };

    this.nextGeneration = function() {
        var nextGenData = calculateNextGeneration();
        aliveCells = nextGenData.alive;
        for (let i in nextGenData.alive) {
            nextGenData.alive.setAlive(true);
        }
        for (let i in nextGenData.dead) {
            nextGenData.dead.setAlive(false);
        }
        generations.count++;

        let alivePositions = [];
        for (let i in aliveCells) {
            alivePositions.push(nextGenData.alive[i].getPosition());
        }

        return {
            number: generations.count,
            alive: alivePositions
        };
    };
    this.clear = function() {

    };

    function calculateNextGeneration() {
        var nextGenAlive = [];
        var nextGenDead = [];
        for (let i in alive) {
            if ('survives' || 'comes to life') {
                nextGenAlive.push(alive[i]);
            } else if ('dies') {
                nextGenDead.push(alive[i]);
            }
        }

        return {
            alive: nextGenAlive,
            dead: nextGenDead
        };
    }
    // function getNextGenerationSurvivors() {
    //     var nextGenAlive = [];
    //     for (let i in alive) {
    //         if ('survives' || 'comes to life') {
    //             nextGenAlive.push(alive[i]);
    //         } else if ('dies') {
    //             nextGenDead.push(alive[i]);
    //         }
    //     }
    // }
}
Board.SIZE = 50;

var Game = (function() {
return {
    nextGeneration() {

    },
    get() {

    }
};
})();

var n = 0;
var o = {
    n: 0
};

// app.get('/home', homeController.index);

// app.get('/comment/create', commentController.create);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
