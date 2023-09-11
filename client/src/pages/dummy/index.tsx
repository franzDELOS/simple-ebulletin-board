import { useGetDummyQuery } from "@/features/apiServices/dummyApi";
import { Fragment } from "react";

const dummy = () => {
  const { data: dummy } = useGetDummyQuery();
    console.log
  return (
    <Fragment>
      {dummy?.map((dummy: any) => (
        <div key={dummy.id} className="m-9">
          <h1>{dummy.name}</h1>
          <div>{dummy.description}</div>
        </div>
      ))}
    </Fragment>
  );
};

export default dummy;
