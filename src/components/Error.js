import React from "react";

const ErrorCard = (error) => {
  return (
    <div className="alert alert-danger" role="alert">
      <h3 className="alert-heading">{error}</h3>
      <h1>there could be problem in fetching data</h1>
    </div>
  );
};

export default ErrorCard;
