import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material";

// TableDemo: displays a paginated table of member names and a single role per member.

export default function TableDemo() {
  // pagination state: current page index and how many rows to show per page
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // rows: list of TWICE members and one role each
  const rows = [
    { name: "Nayeon", role: "Lead Vocalist" },
    { name: "Jeongyeon", role: "Lead Vocalist" },
    { name: "Momo", role: "Main Dancer" },
    { name: "Sana", role: "Sub Vocalist" },
    { name: "Jihyo", role: "Leader" },
    { name: "Mina", role: "Main Dancer" },
    { name: "Dahyun", role: "Lead Rapper" },
    { name: "Chaeyoung", role: "Main Rapper" },
    { name: "Tzuyu", role: "Visual" },
  ];

  // Handlers for page changes and rows-per-page changes
  const handleChangePage = (e, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ background: (theme) => theme.palette.customGradient }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Slice rows for current page and render rows */}
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination control for the table */}
      <TablePagination
        sx={{ bgcolor: "background.default" }}
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