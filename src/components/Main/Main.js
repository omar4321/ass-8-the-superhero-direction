import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Leader from '../Leader/Leader';

export default function Main({
  leaderName,
  setLeaderName,
  setTotalMoney,
  totalMoney,
}) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('./world_leader.json')
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  return (
    <div className="col-md-8">
      <Row>
        {datas.map((data) => (
          <Leader
            leaders={data}
            key={data.id}
            setLeaderName={setLeaderName}
            leaderName={leaderName}
            setTotalMoney={setTotalMoney}
            totalMoney={totalMoney}
          />
        ))}
      </Row>
    </div>
  );
}
