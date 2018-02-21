mongoose-likes
==============

Mongoose plugin to track likes/dislikes for an object. This is a customisation of the [mongoose-votes](http://github.com/jjwchoy/mongoose-votes) plugin which changes the terminology to be more appropriate for likes/dislikes.

Status
------

This plugin is currently unstable and not thoroughly tested. Please refrain from using it at the present time.


Usage
-----

### Define your schema and add the likes plugin

```javascript
var mongoose = require('mongoose');
var likesPlugin = require('mongoose-likes');

var postSchema = mongoose.Schema({
    author: ObjectId,
    title: String,
    body: String
});

postSchema.plugin(likesPlugin);

var Post = mongoose.model('Post', postSchema);
```

### Like / dislike

```javascript
var p = ... ; // some post object

p.like(likerId, function(err) {
    ...
});

p.dislike(dislikerId, function(err) {
    ...
});

// These functions are also defined as statics

Post.like(post.id, likerId, function(err) {
   ...
});

Post.dislike(post.id, dislikerId, function(err) {
   ...
});
```

### If a user changes their mind

```javascript
p.cancelLike(likerId, function(err) {
    ...
});

p.cancelDislike(dislikerId, function(err) {
    ...
});

// These functions are also defined as statics

Post.cancelLike(post.id, likerId, function(err) {
    ...
});

Post.cancelDislike(post.id, dislikerId, function(err) {
    ...
});
```

### Finding out what a user has liked/disliked

#### Find every post a user has liked

```javascript
Post.findLikes(userId, function(err, likes) {
   // likes is an array of objects with a single property: _id
});
```

#### Determine if a user has liked a particular post
```javascript
Post.findLikes(userId, {_id:post.id}, function(err, likes) {
    if (!err) {
        var hasLiked = !!likes.length;
    }
});
```

`findDislikes` works in the same manner

### Properties added

```javascript
p.likes // total number of likes
p.dislikes // total number of dislikes
p.score // virtual, likes - dislikes

p.likers // array of all likers
p.dislikers // array of all dislikers
```

Options
-------

mongoose-likes can be customised in a number of ways. Here is a list of all options with their default values:

```javascript
postSchema.plugin(likesPlugin, {
    // behaviour
    disableDislikes: false, // if true, turns off disliking
    
    // Property names
    likesName: 'likes',
    dislikesName: 'dislikes',
    scoreName: 'score',
    
    likersName: 'likers',
    dislikersName: 'dislikers',
    
    // Function names
    likeFuncName: 'like',
    dislikeFuncName: 'dislike',
    cancelLikeFuncName: 'cancelLike',
    cancelDislikeFuncName: 'cancelDislike',
    findLikes: 'findLikes',
    findDislikes: 'findDislikes',
    
    // other options
    likerIdType: ObjectId, // The type to use in the likers/dislikers array
    indexed: false // whether to generate the indexes {_id:1, likers:1}, and {_id:1, dislikers:1}
});
```

