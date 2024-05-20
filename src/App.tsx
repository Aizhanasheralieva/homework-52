import './App.css';
import MyCard from "./components/MyCard/MyCard.tsx";

const App = () => {

  return (
      <div className="playingCards faceImages">
          <MyCard rank={'J'} suit={'diams'}/>
          <MyCard rank={'A'} suit={'hearts'}/>
          <MyCard rank={'7'} suit={'clubs'}/>
          <MyCard rank={'8'} suit={'spades'}/>
      </div>
  );
};

export default App;
