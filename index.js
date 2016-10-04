var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 80));

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

        },
        {
            id:1,
            user: {
                id: 1,
                username: "HillaryC",
                profileImageSmall: "http://russia-insider.com/sites/insider/files/hillary-clinton-thumbs-up.jpg" 
            },
            image: "http://cdn77.sadanduseless.com/wp-content/uploads/2015/07/trump-cat1.jpg",
            likes: 650,
            caption: "Look at this KAT!",
            tags:['cat','dtrump'],
            comments: [
                {
                    id: 4,
                    user: {
                        if: 2,
                        username: "POTUS"
                    },
                    comment: "This cat did it first, Trump!",
                    userRefs: [],
                    tags: ["drump","sadtrump"]
                }
            ]
        }
    ]

app.get('/phase2', function(req, res) {
    res.send (post)
});