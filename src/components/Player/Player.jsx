import PropTypes from 'prop-types';
const Player = ({ player,  handleSelectPlayer}) => {
  const { player_img, player_name, age, country, salary } = player;
  return (
    <>
      <div className="card w-72 bg-gradient-to-r from-gray-100 to-rose-50">
        <figure className="p-4 avatar">
          <div className="w-44 rounded-full">
            <img src={player_img} alt="Shoes" />
          </div>
        </figure>
        <div className="px-4 pb-4">
          <p className="text-lg">Name : <span className="opacity-75">{player_name}</span></p>
          <p className="text-lg">Age : <span className="opacity-75">{age}</span></p>
          <p className="text-lg">Country : <span className="opacity-75">{country}</span></p>
          <p className="text-lg">Salary : <span className="opacity-75">{salary}</span></p>
          <div className="card-actions justify-center mt-4">
            <button onClick={()=> handleSelectPlayer(player)} className=" bg-rose-400 hover:bg-rose-500 py-2 rounded px-10 text-white normal-case text-lg">Player Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

Player.propTypes ={
    player: PropTypes.object.isRequired,
    handleSelectPlayer: PropTypes.func.isRequired
}

export default Player;
