var commentRepository = require('../repositories/comments.repository');

module.exports = {
    create(req, res) {
        console.log(req.param);
        var newComment = commentRepository.addComment(1, 1, 'hh');
        res.send(JSON.stringify(newComment));
    },
    getPage(req, res) {
        console.log(req.param);
        var userId = 1;
        var page = 4;
        var result = postRepository.getPostsByPage(userId, page);
        res.send(JSON.stringify(result));
    },
};
