var postRepository = require('../repositories/post.repository');

module.exports = {
    index(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            tt : 'ggg',
            name : 'BOOOK',
            a : postRepository.getPosts()
        }));
        console.log('IN home index')
    }
};
