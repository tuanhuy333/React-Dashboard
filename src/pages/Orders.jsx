import React, { useState, useEffect } from "react";
import axios from 'axios'

import { Header } from "../components";
import Table from "../components/Table";

const ordersAPI = "http://localhost:8099/api/orders";

const Orders = () => {

  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(ordersAPI)
      .then(res => {
        console.log(res.data)
        setData(res.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }



  useEffect(() => {
    getData()
  }, []);



  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <Table data={data} />
    </div>
  );
};
export default Orders;
