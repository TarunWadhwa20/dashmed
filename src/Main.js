import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import List from "./components/List";

const Main = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(12);
    
    const fetchData = async() => {
        const response = await fetch("https://dev.dashmed.in/sample-data");
        const result = await response.json();
        setData(result.data);
    }

    useEffect(() => {
      fetchData();
      // eslint-disable-next-line
    }, []);

    const notify = () => {
        toast.success("List Item Clicked");
    }
  return (
    <div className="container my-5">
        <h2>DashMed</h2>
        {!data ?(<p>There is no data</p>):(
        <List data={data} count={count} notify={notify} setCount={setCount}/>)}
      <ToastContainer/>
    </div>
  );
};

export default Main;
