import { lazy, Suspense } from "react";
import { LoadingGrow } from "../components/Loading";
import Status from "../components/Status";
// import Table from "../components/Table";
const Table = lazy(() => import("../components/Table"));

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Status />
      <Suspense fallback={<LoadingGrow />}>
        <Table />
      </Suspense>
    </div>
  );
}
