var userRepository = require('../repositories/user.repository');
var postRepository = require('../repositories/post.repository');

module.exports = {
    get(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(userRepository.getUserData()));
        // res.send(JSON.stringify({
        //     following : false,
        //     name : 'BOOOK',
        //     a : postRepository.getPosts()
        // }));
    },
    follow() {

    },
    unfollow() {

    }
};
