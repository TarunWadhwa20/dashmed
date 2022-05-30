import React from "react";
import Button from "./Button";

const List = (props) => {
    const {data, count, setCount,notify} = props
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 p-3 p-md-5">
        {data.map((dashData, i) => {
          return i + 1 <= count ? (
            <div className="col" key={i}>
              <div className="card text-dark mb-3" onClick={notify}>
                <div className="card-body">
                  <div className="row g-0">
                    <div className="col">
                      <h5 className="card-title">{dashData.medName}</h5>
                    </div>
                    <div className="col">
                      <p className="text-end">₹{dashData.mrp}</p>
                    </div>
                  </div>
                  <p className="card-text">{dashData.saltName}</p>
                </div>
                <div className="card-footer text-muted">
                  {dashData.manufacturer}
                </div>
              </div>
            </div>
          ) : undefined;
        })}
      </div>
      <Button title="Show More" count={count} setCount={setCount}/>
    </>
  );
};

export default List;
