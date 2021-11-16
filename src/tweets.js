let tweets = [
  {
    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
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