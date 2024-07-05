import React from "react";
import Button from "react-bootstrap/Button";

function AddFavourite() {
  return (
    <div>
      <Button variant="primary" size="sm">
        <i className="bi bi-clipboard-heart"></i> Add to favourite
      </Button>
    </div>
  );
}

export default AddFavourite;
