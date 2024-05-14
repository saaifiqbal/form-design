import { Fragment, useState } from "react";
import { Filters } from "../../components";
import DataTable from "../../components/DataTable";
import { flightOffer } from "../../utils/LHR_CDG_ADT1_TYPE_1";
import useFormat from "../../hooks/useFormat";
function Home() {
  const [flights, setFlight] = useState(null);

  const onSearch = () => {
    const filterData = useFormat(flightOffer);
    setFlight(filterData);
  };

  return (
    <Fragment>
      <div className="lg:px-28 md:px-12 sm:px-8">
        <hr className="h-px my-5 bg-[#9FA7FA] border-0 dark:bg-gray-700" />
        <Filters onSearch={onSearch} flights={flights} />
        <DataTable flights={flights} />
      </div>
    </Fragment>
  );
}

export default Home;
