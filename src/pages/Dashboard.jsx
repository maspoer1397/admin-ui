import Card from "../components/Elements/Card/Index";
// import { Icon } from "../components/Elements/Icon";
import MainLayout from "../components/Layout/MainLayout";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";


const DashboardPage = () => {

  return (
      <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card title="Goals" />
        <CardBill />
        <CardTransaction />
        <Card variant="md:col-span-2" title="Statistics" />
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;