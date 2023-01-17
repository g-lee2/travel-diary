import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from './data';

function App() {
  const cardElements = data.map(place => {
    return (
      <Card
        key={place.id}
        place={place}
      />
    )
  })

  return (
    <div>
      <Header />
      {cardElements}
    </div>
  );
}

export default App;
