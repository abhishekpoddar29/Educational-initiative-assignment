import React from 'react';
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"

const Table = ({ rows , deleteRow , editRow}) => {
    return (
        <div className='table-wrapper'>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='expand'>Movie</th>
                        <th>Release-year</th>
                        <th>Edit,Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, idx) => {
                            return <tr key={idx}>
                                <td className='expand'>{row.movie}</td>
                                <td>{row.releaseyear}</td>
                                <td>
                                    <span className='action'>
                                        <BsFillTrashFill onClick={() => deleteRow(idx)}/>
                                        <BsFillPencilFill  onClick={() => editRow(idx)}/>
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