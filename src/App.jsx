import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";

function App() {
  const [selectPlayer, setSelectPlayer] = useState([])
  const [remaining, setRemaining] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  
  const handleSelectPlayer= (player) => {
    const isExist = selectPlayer.find(item => item.id===player.id)

    let count = player.salary;
    if(isExist){
      alert('already selected')
    }
    else{
      selectPlayer.forEach(item => {
        count += item.salary;
      })
      const totalRemaining = 20355 - count;
      if(count > 20000){
        return alert('Your money is low')
      }
     else{
      setTotalCost(count)
      setRemaining(totalRemaining);
      setSelectPlayer([...selectPlayer, player])
     }
    }

  }

  return (
    <>
      <Header></Header>
      <div className="player-background">
        <div className="md:flex w-2/3 mx-auto">
          <Players
            handleSelectPlayer = {handleSelectPlayer}
          ></Players>
          <Cart
            key={selectPlayer.id}
            selectPlayer = {selectPlayer}
            remaining = {remaining}
            totalCost = {totalCost}
          ></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
