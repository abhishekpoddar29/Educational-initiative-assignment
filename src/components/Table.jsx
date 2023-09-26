import React from 'react';
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"

const Table = ({ rows, deleteRow, editRow }) => {
    return (
        <div className='table-wrapper'>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='expand'>Task</th>
                        <th className='expand'>Due Date</th>
                        <th>Status</th>
                        <th>Delete/Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, idx) => {
                            return <tr key={idx}>
                                <td className='expand'>{row.task}</td>
                                <td className='expand'>{row.duedate}</td>
                                <td>
                                    <span className={`label label-${row.status}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td>
                                    <span className='action'>
                                        <BsFillTrashFill onClick={() => deleteRow(idx)} />
                                        <BsFillPencilFill onClick={() => editRow(idx)} />
                                    </span>
                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table