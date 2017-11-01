module.exports = {
    addComment(userId, updateId, content) {
        // ...
        return {
            content: content,
            user_id: userId,
            update_id: updateId
        };
    },
    getCommentsForPost(postId) {
        return [

        ];
    },
    saveComment(comment) {

    }
};
