import React from "react";

function UserItem(props) {
  return (
    <div className="container">
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h5 className="card-title">{props.age}</h5>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
