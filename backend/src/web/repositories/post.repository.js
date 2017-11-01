var dummyPosts = [
    {
        content: 'update 1',
        user_id: 1,
        likes: 43,
        comments: 54,
    },
    {
        content: 'update 2',
        user_id: 1,
        likes: 43,
        comments: 54,
    },
    {
        content: 'update 3',
        user_id: 1,
        likes: 43,
        comments: 54,
    },
    {
        content: 'update 4',
        user_id: 1,
        likes: 43,
        comments: 54,
    },
    {
        content: 'update 5',
        user_id: 1,
        likes: 43,
        comments: 54,
    },
    {
        content: 'update 6',
        user_id: 1,
        likes: 43,
        comments: 54,
    },
    {
        content: 'update 7',
        user_id: 1,
        likes: 43,
        comments: 54,
    },
    {
        content: 'update 8',
        user_id: 1,
        likes: 43,
        comments: 54,
    },
];
var pageSize = 3;

module.exports = {
    addPost(userId, content) {
        // ...
        return {
            content: content,
            user_id: userId,
            likes: 0,
            comments: 0,
            commentsData: []
        };
    },
    getPostsByPage(userId, page) {
        var result = [];
        var targetStart = page * pageSize - pageSize;
        // console.log('ts ' + targetStart + ', l ' + dummyPosts.length)
        if (dummyPosts.length > targetStart) {
            // console.log('YY')
            for (let i = 0; (i + targetStart) < dummyPosts.length && i < pageSize; i++) {
                // console.log('X');
                result[i] = dummyPosts[i + targetStart];
            }
        }

        return result;
    },
    getPosts() {
        return [
            {
                content: 'dasd gfd gg',
                user_id: 1,
                likes: 43,
                comments: 54,
                commentsData: [
                    {
                        content: 'gg cXXXXXX'
                    },
                    {
                        content: 'gg c 444'
                    },
                ]
            },
            {
                content: 'dasd gfd gg',
                user_id: 2,
                likes: 43,
                comments: 54,
                commentsData: [
                    {
                        content: 'gg cxXV'
                    },
                    {
                        content: 'gg 2'
                    },
                    {
                        content: 'gg c33'
                    },
                ]
            },
            {
                content: 'dasd gfd gg',
                user_id: 3,
                likes: 43,
                comments: 54,
                commentsData: [
                    {
                        content: 'gg cCCCCCCC'
                    },
                ]
            },
        ];
    }
};
