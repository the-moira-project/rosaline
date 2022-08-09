import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.common.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(SensorID, User, Nights, Status) {
  return { SensorID, User, Nights, Status };
}

const rows = [
  createData("0001", "John Doe", "2", "Active"),
  createData("0002", "Jane Doe", "1", "Inactive"),
  createData("0003", "Jack Off", "3", "Active"),
  createData("0004", "Dill Doe", "69", "Inactive"),
  createData("0005", "Poop McGee", "420", "Active"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sensor ID</StyledTableCell>
            <StyledTableCell align="right">User</StyledTableCell>
            <StyledTableCell align="right">Nights</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.SensorID}>
              <StyledTableCell component="th" scope="row">
                {row.SensorID}
              </StyledTableCell>
              <StyledTableCell align="right">{row.User}</StyledTableCell>
              <StyledTableCell align="right">{row.Nights}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
