import React from "react";
import Button from "react-bootstrap/Button";

function RemoveFavourite() {
  return (
    <div>
      <Button variant="primary" size="sm">
        <i className="bi bi-x-square-fill"></i> Remove favourite
      </Button>
    </div>
  );
}

export default RemoveFavourite;
