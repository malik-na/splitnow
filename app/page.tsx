import Image from "next/image";
import BillForm from "./components/BilleForm";
import BillList from "./components/BillList";
import BalanceSummary from "./components/BalanceSummary";

export default function Home() {
  return (
    <div>
      <BillForm />
      <BillList />
      <BalanceSummary/>
    </div>
  );
}
