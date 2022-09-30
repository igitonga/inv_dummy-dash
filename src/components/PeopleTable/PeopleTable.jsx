import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./peopletable.scss"

function createData(name, category, phone) {
  return { name, category, phone};
}

const rows = [
  createData('Ian Gitonga', 'Shopkeeper', '0721000111'),
  createData('Tafari Mwangi', 'Customer', '0721000111'),
  createData('Marvin Towett', 'Shopkeeper', '0721000111'),
  createData('John Kanoru', 'Customer', '0721000111'),
  createData('Eugene Omondi', 'Customer', '0721000111'),
];

export default function PeopleTable() {
  return (
    <div className='table-cont'>
        <div className="top">
            <h3>People</h3>
            <span className='button'>Filter</span>
        </div>
   
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell sx={{ fontSize: '12px' }}><b>Name</b></TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right"><b>Category</b></TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right"><b>Phone number</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right">{row.category}</TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right">{row.phone}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
   
    </div>
  );
}
