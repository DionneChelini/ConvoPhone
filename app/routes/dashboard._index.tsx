//Components
import SectionHeading from "../components/headings/withLable";
import PaymentCard from "../components/cards/PaymentCard";
import ActionCards from "../components/cards/ActionCards";
import AddNumberCard from "../components/cards/AddNumberCard";
export default function Example() {
  //Have access to the data fetched on login or signup routes with the use of these two hooks

  return (
    <main className="py-10 lg:pl-72">
      <SectionHeading />
      <div className="flex">
        <AddNumberCard /> <PaymentCard />
      </div>
      <ActionCards />
    </main>
  );
}
