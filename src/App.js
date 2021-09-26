import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';

function App() {
  const [leaderName, setLeaderName] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Main
            setLeaderName={setLeaderName}
            leaderName={leaderName}
            setTotalMoney={setTotalMoney}
            totalMoney={totalMoney}
          />
          <SideBar leaderName={leaderName} totalMoney={totalMoney} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
