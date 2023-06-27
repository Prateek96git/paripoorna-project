import React, { useState } from 'react';
import DataTable from './components/DataTable';
import './App.css';

const App = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  const handleScreenChange = (screenNumber) => {
    setActiveScreen(screenNumber);
  };

  const columns1 = [
    { Header: 'Column 1', accessor: 'col1' },
    { Header: 'Column 2', accessor: 'col2' },
    { Header: 'Column 3', accessor: 'col3' },
    { Header: 'Column 4', accessor: 'col4' },
    { Header: 'Column 5', accessor: 'col5' },
    { Header: 'Column 6', accessor: 'col6' },
  ];

  const columns2 = [
    { Header: 'Column A', accessor: 'colA' },
    { Header: 'Column B', accessor: 'colB' },
    { Header: 'Column C', accessor: 'colC' },
    { Header: 'Column D', accessor: 'colD' },
    { Header: 'Column E', accessor: 'colE' },
    { Header: 'Column F', accessor: 'colF' },
  ];

  const data1 = [
    { col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6' },
  ];

  const data2 = [
    { colA: 'Data A', colB: 'Data B', colC: 'Data C', colD: 'Data D', colE: 'Data E', colF: 'Data F' },
  ];

  return (
    <div className="app">
      <div className="buttons">
        <button className='btn btn-success btn-lg' onClick={() => handleScreenChange(1)}>Screen 1</button>
        <button className='btn btn-success btn-lg' onClick={() => handleScreenChange(2)}>Screen 2</button>
      </div>
      {activeScreen === 1 && (
        <DataTable
          columns={columns1}
          data={data1}
          globalFilterEnabled={true}
          individualColumnFilterEnabled={true}
          sortingEnabled={true}
          paginationEnabled={true}
          refreshEnabled={false}
        />
      )}
      {activeScreen === 2 && (
        <DataTable
          columns={columns2}
          data={data2}
          globalFilterEnabled={false}
          individualColumnFilterEnabled={true}
          sortingEnabled={true}
          paginationEnabled={false}
          refreshEnabled={true}
        />
      )}
    </div>
  );
};

export default App;
