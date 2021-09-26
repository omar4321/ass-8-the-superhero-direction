import React from 'react';

export default function SideBar({ leaderName, totalMoney }) {
  console.log(leaderName);
  return (
    <>
      <div className="col-md-4 mt-5 ps-5" style={{ color: 'white' }}>
        <h3>Total added: {leaderName.length}</h3>
        <h5>Totoal: {totalMoney}</h5>
        <div>
          {leaderName.map((name, idx) => (
            <h6 key={idx}>{name}</h6>
          ))}
        </div>
      </div>
    </>
  );
}
