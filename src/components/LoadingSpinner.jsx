import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingSpinner = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      {promiseInProgress ? (
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          style={{ margin: "10px" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : null}
    </>
  );
};

export default LoadingSpinner;
