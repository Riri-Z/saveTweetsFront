import { Cards } from "../cards/Cards";
import { Tweet } from "../../interfaces";

interface CardsProps {
  tweets: Tweet[];
}

export const CardsList: React.FC<CardsProps> = ({ tweets }: CardsProps) => {
  //Fetch tweets data

  return (
    <>
      {tweets.map((tweet, index) => (
        <Cards
          key={index}
          name={tweet.name}
          tag={tweet.tag}
          tweet_content={tweet.tweet_content}
        />
      ))}
    </>
  );
};
