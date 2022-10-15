import { Cards } from "../cards/Cards";
import { Tweet } from "../../interfaces";

import './cardsList.css'

interface CardsProps {
  tweets: Tweet[];
}

export const CardsList: React.FC<CardsProps> = ({ tweets }: CardsProps) => {
  //Fetch tweets data

  return (
    <div className="CardsListContainer">
      {tweets.map((tweet, index) => (
        <Cards
          key={index}
          name={tweet.name}
          tag={tweet.tag}
          tweet_content={tweet.tweet_content}
        />
      ))}
    </div>
  );
};
