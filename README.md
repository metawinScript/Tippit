## DropTheNews 📰

DropTheNews is a decentralized application (dApp) that allows users to post news, like/dislike news articles, and tip the news creators using Ethereum.

### Features

📝 Create News – Users can post news with a title and description.

👍 Like/Dislike News – Users can like or dislike news articles.

💰 Tip News Creators – Users can send ETH tips to news creators.

🗑 Delete News – News creators can delete their own posts.


### Smart Contract Overview

The DropTheNews contract provides the following functionality:

📌 Post News

Users can create a news article by calling:

```
function postNews(string calldata _title, string calldata _description) public
```

📌 Get News

Fetch a specific news item using:
```
function getNews(uint _index) public view returns (address payable, string memory, string memory, uint, uint)
```

📌 Like/Dislike News

Toggle a like/dislike on a news article:
```
function likeAndDislikeNews(uint _index) public
```
📌 Tip News Creator

Send ETH tips to a news creator:
```
function tipCreator(uint _index) public payable
```
📌 Delete News

Only the news creator can delete their news:
```
function deleteNews(uint _index) public
```
📌 Get Total News Count

Retrieve the total number of news articles:
```
function getNewsLength() public view returns (uint)
```
### 🛠 Deployment

Deploy the contract on Ethereum, Sepolia, or any EVM-compatible chain using Hardhat, Foundry, or Remix.

### 💡 Usage

1. Post news using postNews("Title", "Description").


2. Like/dislike news with likeAndDislikeNews(newsId).


3. Tip a creator by sending ETH via tipCreator(newsId).


4. Retrieve news using getNews(newsId).


5. Delete news if you are the creator with deleteNews(newsId).



### 📜 License

This project is licensed under the MIT License.
