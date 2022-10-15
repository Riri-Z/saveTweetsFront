import "./styles.css";
import { CardsList } from "./components/cards_list/CardsList";
import { SearchBar } from "./components/searchBar/SearchBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Tweet } from "./interfaces";

let tweet: Tweet = {
  name: "pseudo",
  tag: "test",
  tweet_content: "dqzljdzqmiojdmzqoid"
};

let tweet2: Tweet = {
  name: "pseudo",
  tag: "design",
  tweet_content: "dqzljdzqmiojdmzqoid"
};

let tweetList: Tweet[] = [tweet, tweet2];

export default function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <CardsList tweets={tweetList} />
      <Footer />
    </div>
  );
}
