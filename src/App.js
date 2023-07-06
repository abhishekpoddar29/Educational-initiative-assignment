import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [formOpen,setFormOpen] = useState(false)

  const [rows, setRows] = useState([
    {movie:"SpiderMan"  , releaseyear:"2020"},
    {movie:"Extraction"  , releaseyear:"2021"},
    {movie:"Aladin"  , releaseyear:"2018"},
  ]);
  const [rowToEdit,setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_,idx) => idx!== targetIndex))
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setFormOpen(true);
  }

  const handleSubmit = (newRow) => {
    rowToEdit === null ?
    setRows([...rows,newRow]):
    setRows(rows.map((currRow,idx) => {
      if(idx !==rowToEdit) return currRow;
      return newRow;
    }))
  };

  return (
    <div className="App">
      <div className='head'>
        <h1>
          Movie List Application
        </h1>
      </div>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
      <button className='btn' onClick={() => setFormOpen(true)}>Add Movies</button>
      {formOpen && <Form closeForm={() => {setFormOpen(false); setRowToEdit(null); }} onsubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]} />}
    </div>
  );
}

export default App;
