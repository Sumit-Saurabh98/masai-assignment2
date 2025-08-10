import React from "react";

const UserCard = ({ name, email, city }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        width: "220px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

export default UserCard;
