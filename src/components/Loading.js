import { Spinner } from "react-bootstrap";

export function LoadingGrow() {
  return (
    <div className="loading-grow">
      <Spinner animation="grow" variant="primary" />
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <Spinner animation="border" variant="success" />
    </div>
  );
}
