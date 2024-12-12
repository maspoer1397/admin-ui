import { expensesStatistics } from "../../../data/expenses";
import Card from "../../Elements/Card";
import BarsDataset from "../../Elements/BarChart";

const CardStatistic = () => {
    // const expensesStatisticCard = expensesStatistics.map((expensesStatistic) => (<div key={expensesStatistic.id}>{expensesStatistic.date}</div>));

    return (
        <Card variant="md:col-span-2 min-h-max" title="Statistics" desc={<BarsDataset desc={expensesStatistics}/>} />
    )
}

export default CardStatistic