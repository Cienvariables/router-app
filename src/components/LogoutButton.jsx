import React from "react";

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
  };
  return <button onClick={handleClick}>Logout</button>;
}

export default LogoutButton;