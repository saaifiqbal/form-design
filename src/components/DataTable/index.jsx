function DataTable({ flights }) {
  return (
    <table className="table-auto text-center text-sm my-3 w-full rounded bg-[#E5E7EB] uppercase ">
      <thead>
        <tr>
          <th>Flight</th>
          <th>Aircraft</th>
          <th>class</th>
          <th>fare</th>
          <th>Route</th>
          <th>Departure</th>
          <th colSpan={2}>Arrival</th>
          <th>Durations</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {flights &&
          flights.map((data, index) => {
            return (
              <tr
                key={index}
                className={`${
                  index % 2 == 0 ? "bg-[#F3F4F6]" : "bg-[#E5E7EB]"
                }  border-red-700 border-b`}
              >
                <td className="text-left px-2">
                  {data?.flight.map((f) => {
                    return <div key={f}>{f}</div>;
                  })}
                </td>
                <td>
                  {data?.aircraft.map((a) => {
                    return <div key={a}>{a}</div>;
                  })}
                </td>
                <td>
                  {data?.class.map((a) => {
                    return <div key={a}>{a}</div>;
                  })}
                </td>
                <td>
                  {data?.fare.map((a) => {
                    return <div key={a}>{a}</div>;
                  })}
                </td>
                <td>
                  {data?.route.map((a) => {
                    return <div key={a}>{a}</div>;
                  })}
                </td>
                <td>
                  {data?.departure.map((a) => {
                    return <div key={a}>{a}</div>;
                  })}
                </td>
                <td>
                  {data?.arrival.map((a) => {
                    return <div key={a}>{a}</div>;
                  })}
                </td>
                <td>---</td>
                <td>{data.duration}</td>
                <td className=" pb-2">
                  {data.price} <br />
                  <button
                    className="btn bg-[#312E81] text-white rounded hover:bg-slate-600 "
                    type="button"
                  >
                    Select
                  </button>
                </td>
              </tr>
              // <tr
              //   className={`${
              //     index % 2 == 0 ? "bg-[#F3F4F6]" : "bg-[#E5E7EB]"
              //   }   border-red-700 border-b`}
              // >
              //   <td>tk 33</td>
              //   <td>723</td>
              //   <td>E</td>
              //   <td>Ef1pxow</td>
              //   <td>dac -ist</td>
              //   <td>2022 - 11 -12</td>
              //   <td>2022 - 11 -12</td>
              //   <td>---</td>
              //   <td></td>
              //   <td className=" pb-2">
              //     <button
              //       className="btn bg-[#312E81] text-white rounded"
              //       type="button"
              //     >
              //       Select
              //     </button>
              //   </td>
              // </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default DataTable;
