
angular.module('someklone.services').factory('Posts', function($q) {

    var posts = [
        {
            id: 0,
            user: {
                id: 1,
                username: "dtrump",
                profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg" 
            },                                                 
            image: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
            imageThumbnail: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
            likes: 892, 
            caption: "Always winning #elections",
            tags: ['elections'],         
            comments: [
                {
                    id: 4,
                    user: {
                        id: 2,
                        username: "POTUS"
                    },                    
                    comment: "You're never going to make it don #losing",
                    userRefs: [],
                    tags: ["losing"]
                },
                {
                    id: 5,
                    user: {
                        id: 3,
                        username: "HillaryC"
                    },                    
                    comment: "Damn right @POTUS",
                    userRefs: ["POTUS"],
                    tags: []       
                },
            ]

        }
    ]

    return {
        // posts from myself and the from the users i am following
        following: function() 
        {
            return $q(function(resolve, reject){
                resolve(posts);
            });
        },
        // most recent posts 
        recent: function()
        {
            return $q(function(resolve, reject){
                resolve(posts);
            });
        },
        // search posts based on tags
        searchTag: function()
        {
            return $q(function(resolve, reject){
                resolve(posts);
            });
        },
        // get all posts of single user
        getUserPosts: function(userId)
        {
            return $q(function(resolve, reject){
                
                // execute the search and return results

                resolve(posts); // placeholder
            });
        },

        like: function(postId)
        {
            return $q(function (reslove, reject) {
                var post = posts.filter(function (post) { return post.id == postId })[0];
                if (post.liked) {
                    post.liked = false;
                    post.likes -= 1;
                } else {
                    post.liked = true;
                    post.likes += 1;
                }
            });
        },

        comment: function(postId, text)
        {
            return $q(function (reslove, reject) {
                var post = posts.filter(function (post) { return post.id == postId })[0];
                var commentId = post.comments.length;
                post.comments.push(
                    {
                        id: commentId,
                        user: {
                            id: 3,
                            username: "dtrump"
                        },
                        comment: text,
                        user_refs: [],
                        tags: []
                    });
            });
        },

        replacepost: function(newpost)
        {
            posts = newpost;
        }
    };
});
