import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [formOpen, setFormOpen] = useState(false)

  const [rows, setRows] = useState([
    { task: "Complete Assignment", duedate: "25-09-23" ,status:"completed"},
    { task: "DO Homework", duedate: "24-09-23" ,status:"completed"},
    { task: "Football-session", duedate: "30-09-23",status:"completed" },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setFormOpen(true);
  }

  const handleSubmit = (newRow) => {
    rowToEdit === null ?
      setRows([...rows, newRow]) :
      setRows(rows.map((currRow, idx) => {
        if (idx !== rowToEdit) return currRow;
        return newRow;
      }))
  };

  return (
    <div className="App">
      <div className='head'>
        <h1>
          TO-DO-LIST(Educational-Initiative-assignment)
        </h1>
      </div>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button className='btn' onClick={() => setFormOpen(true)}>Add Task</button>
      {formOpen && <Form closeForm={() => { setFormOpen(false); setRowToEdit(null); }} onsubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]} />}
    </div>
  );
}

export default App;
