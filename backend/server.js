const express = require('express'),
    homeController = require('./src/web/controllers/home.controller'),
    commentController = require('./src/web/controllers/comment.controller'),
    updateController = require('./src/web/controllers/update.controller'),
    userController = require('./src/web/controllers/user.controller');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/home', homeController.index);

app.get('/comment/create', commentController.create);
app.get('/user/get', userController.get);

app.post('/update/create', updateController.create);
app.post('/comment/create', commentController.create);

app.get('/update/get', updateController.getPage);
app.get('/comment/get', commentController.getPage);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
