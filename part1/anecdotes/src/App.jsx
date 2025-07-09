import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [likes, setLikes] = useState(Array(anecdotes.length).fill(0));
  const [mostLiked, setMostLiked] = useState(0);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };
  const handleLike = () => {
    const newLikes = [...likes];
    const selectedLikes = newLikes[selected] + 1;
    if (selectedLikes > newLikes[mostLiked]) {
      setMostLiked(selected);
    }
    newLikes[selected] = selectedLikes;
    setLikes(newLikes);
  };
  return(
    <div className="card">
      <div className="card-text">
      {anecdotes[selected]}
      </div>
      <div className="card-actions">
        <Button onClick={handleClick} text="Next Anecdote" />
        <Button onClick={handleLike} text="Like" />
      </div>
      <DisplayVote likes={likes[selected]} />
      <div className="card-mostLiked">
        <h3>Most Liked Anecdote</h3>
        <div>
          {anecdotes[mostLiked]} <br />
          has {likes[mostLiked]} likes
        </div>
      </div>
    </div>
  )
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const DisplayVote = ({likes}) =>(
  <div>
    <p>{likes} people like this!</p>    
  </div>
)

export default App;
