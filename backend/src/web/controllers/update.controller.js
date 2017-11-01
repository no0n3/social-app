var postRepository = require('../repositories/post.repository');

module.exports = {
    create(req, res) {
        var result = postRepository.addPost(1, 'xxxxxx');
        res.send(JSON.stringify(result));
    },
    getPage(req, res) {
        console.log(JSON.stringify(req.query));
        var userId = req.query.user_id;
        var page = req.query.page;
        var result = postRepository.getPostsByPage(userId, page);
        console.log('result', JSON.stringify(result));
        res.send(JSON.stringify(result));
    },
    getById() {

    },
    getForUser() {
        
    }
};
