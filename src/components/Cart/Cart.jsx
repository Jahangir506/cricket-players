import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const Cart = ({ selectPlayer, totalCost, remaining }) => {
  
  return (
    <div className="text-white ml-24 mt-14 text-center">
         <h1 className="text-3xl">Players Added: {selectPlayer.length}</h1>
         <p className="my-2 text-xl">Remaining: {remaining}</p>
          <p className="my-2 text-xl">Total Cost: {totalCost}</p>
      {selectPlayer.map(player => (
        <div key={player.id}>
          <div className="bg-rose-400 flex justify-between pr-6 items-center text-black my-5 rounded">
            <img
              className="w-14 border-r border-gray-600"
              src={player.player_img}
            />
            <h2>{player.player_name}</h2>
            <p className="bg-green-600 p-1 rounded-full text-white">
              <FaCheck />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  selectPlayer: PropTypes.array.isRequired,
  totalCost: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};

export default Cart;
