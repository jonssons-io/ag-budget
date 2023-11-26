import withSuspense from "../util/hoc/withSuspense";

function Dashboard() {
  return <p>Dashboard</p>;
}

const DashboardWithSuspense = withSuspense(Dashboard);

export default DashboardWithSuspense;
