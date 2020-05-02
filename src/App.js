import React, { useState, useEffect } from 'react';
import { mergeSort, createGroups } from './helper';
import { LineChartComponent, BarChartComponent } from './chart';
import { TableComponent } from './table';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap-css-only/css/bootstrap.min.css';

import 'mdbreact/dist/css/mdb.css';

function App() {
  const [totalPrice, setTotalPrice] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [customers, setCustomers] = useState([]) 

  useEffect(() => {
    function fetchPerDayDetails(){
      fetch("/orders",{
        method: 'GET',
        headers: {
          "Content-type": "application/json"
        }
      })
      .then((res) => res.json())
      .then((data) => {
        let groups = groupOrders(data);
        let linechartData = groups.map((order) => {
          return {
            label: order.created.split("T")[0],
            value: order.price
          }
        })
        let barchartData = groups.map((order) => {
          return {
            label: order.created.split("T")[0],
            value: order.count
          }
        })
        setTotalPrice(linechartData);
        setOrderCount(barchartData)
      })
    }

    function fetchCustomers(){
      fetch("/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      })
    }

    fetchPerDayDetails();
    fetchCustomers();
  }, [])

  function groupOrders(orders){
    mergeSort(orders, 0, orders.length - 1);
    let groups = createGroups(orders);
    return groups;
  }

  return (
    <div className="wrapper">
      <div className="chart-wrapper">
        <div className="chart-container">
          <LineChartComponent chartData={totalPrice} caption="Orders total price" xaxisname="Date" yaxisname="Total price"></LineChartComponent>
        </div>
        <div className="chart-container">
          <BarChartComponent chartData={orderCount} caption="Orders count" xaxisname="Date" yaxisname="Count"></BarChartComponent>
        </div>
      </div>
      <div className="table-container">
        <TableComponent data={customers}></TableComponent>
      </div>
    </div>
  )

}

export default App;
