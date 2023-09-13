import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ handleSelectPlayer}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch(`../../../public/players.json`)
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-medium">Players: {players.length}</h3>
      <div className="grid grid-cols-3 gap-8 my-10">
        {players.map((player) => (
          <Player 
          key={player.id} player={player}
          handleSelectPlayer = {handleSelectPlayer}
          ></Player>
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {
    handleSelectPlayer: PropTypes.func.isRequired
}

export default Players;
