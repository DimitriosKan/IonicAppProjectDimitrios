# IonicAppProjectDimitrios

---------------------------------
Basic server API design:
---------------------------------

GET /user/own

Get own profile.

Parameters
* *

Example result
{
“id” : “123”
“username” : ”BobD”,
“name” : ”Bob Dylan”,
“avatar” : 
}
-  -  -  -  -  -  -  -  -  -  -  -  -  -
GET /user/user-id

Get other user profile.

Parameters
* *

Example result
{
“id” : “123”
“username” : ”BobD”,
“name” : ”Bob Dylan”,
“avatar” : 
}
{
“id” : “143”
“username” : ”BobbyR”,
“name” : ”Bob Ross”,
“avatar” : 
}
-  -  -  -  -  -  -  -  -  -  -  -  -  -
GET /user/search

Get searched person.

Parameters
* *

Example result
{
“name” : ”Bob Dylan”,
}
{
“name” : ”Bob Ross”,
}

---------------------------------

GET /post/post-id

Get details about specific post. 
Could extend to liked media in activity tab.

Parameters
* *

Example result
“type” : “image”,
	“user” : { 
	“username” : “BobD”
	“name” : “Bob Dylan”,
	“id” : “123”,
	“avatar” : 
},
“tags” : [],
“comments” : { 
	“count” : “2”
},
“likes” : { 
	“count” : “7”
}
-  -  -  -  -  -  -  -  -  -  -  -  -  -
GET /post/search

Get results for media searched for through relevancy.

Parameters
* *

Example result
“type” : “image”,
“tags” : [],
“comments” : { 
	“count” : “3”
},
“likes” : { 
	“count” : “5”
}
-  -  -  -  -  -  -  -  -  -  -  -  -  -
GET /post/post-id/comments

Get the comments on a photo.

Parameters
* *

Example result
“data”: [
  {
    “text” : “That’s great!”,
    “from” : { 
	“username” : “BobD”,
	“avatar” : 
	“id” : “123”,
  },
“id”: “2352”
}
]
-  -  -  -  -  -  -  -  -  -  -  -  -  -
POST /post/post-id/comments

Write a comment relevant to the post.

Parameters
* *

Example result
-  -  -  -  -  -  -  -  -  -  -  -  -  -
DEL /post/post-id/comments/comment-id

Allows to delete a selected comments
relevant for own posts only.

Parameters
* *

Example result
* *

---------------------------------

GET /post/post-id/likes

Get the list of people liked the post

Parameters
* *

Example result
“data”: [
  {
    “username” : “BobD”,
    “avatar” : 
    “id” : “123”
  }
]
-  -  -  -  -  -  -  -  -  -  -  -  -  -
POST /post/post-id/likes

Adds a like value by the current user.

Parameters
* *

Example result
-  -  -  -  -  -  -  -  -  -  -  -  -  -
DEL /post/post-id/likes

Removes a like value by the current user.

Parameters
* *

Example result
* *

---------------------------------

GET /tag/search

Get searched tag.

Parameters
* *

Example result
{
“data” : [
{
“picture_id” : 2352,
“name” : “high”
},
{
“picture_id” : 2352,
“name” : “hightime”
},
{
“picture_id” : 2352,
“name” : “skyhigh”
},
