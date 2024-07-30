import './App.css';
import { StationQueries } from './entities/station';
import SlotCounter from 'react-slot-counter';

const lineIds: NumberString[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function App() {
  const stations = StationQueries.useStations(lineIds);

  if (!stations) return <>로딩중...</>;

  const randomIndex = Math.floor(Math.random() * stations.length);

  if (!stations[randomIndex]) return;

  return (
    <SlotCounter
      value={stations[randomIndex].stinNm}
      dummyCharacters={['가', '나', '다']}
      startValue={'가나다라마바사아자차카타파하'}
      dummyCharacterCount={stations[randomIndex].stinNm.length}
      duration={2}
    />
  );
}

export default App;
