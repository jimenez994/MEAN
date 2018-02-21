var votesPlugin = require('mongoose-votes');

module.exports = exports = function(schema, options) {
    options = options || {};
    votesPlugin.call(this, schema, {
        disableDownvotes: options.disableDislikes,
        tallyName: options.scoreName || "score",
        upvotesName: options.likesName || "likes",
        upvotersName: options.likersName || "likers",
        downvotesName: options.dislikesName || "dislikes",
        downvotersName: options.dislikersName || "dislikers",
        upvoteFuncName: options.likeFuncName || "like",
        cancelUpvoteFuncName: options.cancelLikeFuncName || "cancelLike",
        downvoteFuncName: options.dislikeFuncName || "dislike",
        cancelDownvoteFuncName: options.cancelDislikeFuncName || "cancelDislike",
        findUpvotesFuncName: options.findLikesFuncName || "findLikes",
        findDownvotesFuncName: options.findDislikesFuncName || "findDislikes",
        highestVotedFuncName: options.mostLikedFuncName || 'mostLiked',
        voterIdType: options.likerIdType,
        indexed: options.indexed
    });
};
