import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./creditsales.scss"

function createData(invoice, customer, date, amount, status) {
  return { invoice, customer, date, amount, status };
}

const rows = [
  createData('00345', 'John Doe', '22 June 2020', 'KES 200', 'paid'),
  createData('00346', 'John Doe', '22 June 2020', 'KES 600', 'pending'),
  createData('00347', 'John Doe', '22 June 2020', 'KES 500', 'pending'),
  createData('00348', 'John Doe', '22 June 2020', 'KES 100', 'paid'),
  createData('00349', 'John Doe', '22 June 2020', 'KES 600', 'paid'),
];

export default function CreditSales() {
  return (
    <div className='table-cont'>
        <div className="top">
            <h3>Credit sales</h3>
            <span className='button'>View All</span>
        </div>
   
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell sx={{ fontSize: '12px' }}><b>INVOICE</b></TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right"><b>CUSTOMER</b></TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right"><b>DATE</b></TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right"><b>AMOUNT</b></TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right"><b>STATUS</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.invoice}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell sx={{ fontSize: '12px' }} component="th" scope="row">
                    {row.invoice}
                </TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right">{row.customer}</TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right">{row.date}</TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right">{row.amount}</TableCell>
                <TableCell sx={{ fontSize: '12px' }} align="right">{row.status}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
   
    </div>
  );
}
