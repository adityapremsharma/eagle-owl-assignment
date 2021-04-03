import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
