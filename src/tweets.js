let tweets = [
  {
    "content": "lsdfsdaTTTTTT",
    "createdAt": "2021-11-15Z",
    "isPublic": false,
    "likes": 10,
    "owner": {
      "avatar": "https://avatars.dicebear.com/api/avataaars/elonmusk.svg",
      "displayName": "dhinesh",
      "userId": "317ec542-579e-4984-afed-ed9d21590f4b",
      "username": "@dhinesh"
    },
    "tweetId": 4
  },
  {
    "content": "lorem TWEETTTTTTT",
    "createdAt": "2021-11-15Z",
    "isPublic": false,
    "likes": 0,
    "owner": {
      "avatar": "https://avatars.dicebear.com/api/avataaars/df.svg",
      "displayName": "dhinesh",
      "userId": "317ec542-579e-4984-afed-ed9d21590f4b",
      "username": "@dhinesh"
    },
    "tweetId": 3
  }
]

export function getTweets() {
    return tweets
}