import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Leader({
  leaders,
  leaderName,
  setLeaderName,
  setTotalMoney,
  totalMoney,
}) {
  const { img, name, location, net_worth, age, owne, id } = leaders;

  return (
    <>
      <div key={id} className="col-md-4 mt-5">
        <Card style={{ width: '15rem' }}>
          <div className="text-center py-3">
            <img
              src={img}
              alt={name}
              style={{ width: '200px', height: '200px', borderRadius: '50%' }}
            />
          </div>
          <Card.Body>
            <Card.Title className="m-0 mb-1">{name}</Card.Title>
            <Card.Text className="m-0 mb-1">Location: {location}</Card.Text>
            <Card.Text className="m-0 mb-1">Age: {age}</Card.Text>
            <Card.Text className="m-0 mb-1">Company Name: {owne}</Card.Text>
            <Card.Text className="m-0 mb-1">Net Worth: {net_worth}</Card.Text>
            <Button
              variant="success"
              onClick={() => {
                setLeaderName([...leaderName, name]);
                setTotalMoney(totalMoney + net_worth);
              }}
              className="mt-3"
            >
              <span className="me-3 py-4">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span>Add</span>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
