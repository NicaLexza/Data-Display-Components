import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material";

export default function TableDemo() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const rows = [
      { name: "Nayeon", role: "Dancer" },
      { name: "Jeongyeon", role: "Vocals" },
      { name: "Momo", role: "Rapper" },
      { name: "Sana", role: "Vocals" },
      { name: "Jihyo", role: "Main Vocals" },
      { name: "Mina", role: "Dancer" },
      { name: "Dahyun", role: "Rapper" },
      { name: "Chaeyoung", role: "Rapper" },
      { name: "Tzuyu", role: "Dancer" },
    ];

    const handleChangePage = (e, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (e) => {setRowsPerPage(parseInt(e.target.value, 10)); setPage(0);      
    };

    return (
      <Paper>
        <TableContainer>

          <Table sx={{background:(theme) => theme.palette.customGradient, }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                <TableRow key={i}>  
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </TableContainer>
        <TablePagination
        sx={{bgcolor:"background.default"}}
          component="div"
          count={rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          />
      </Paper>
    );
  }