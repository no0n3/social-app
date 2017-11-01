var postRepository = require('./post.repository');

module.exports = {
    getUserData(userId) {
        return {
            id: userId,
            name: 'xxx',
            following: false,
        };
    },
    getCommentsForPost(postId) {
        return [

        ];
    },
    saveComment(comment) {

    }
};
