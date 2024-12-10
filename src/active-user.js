import React, { useEffect, useState } from 'react';
import './App.css';
import { TablePagination } from '@mui/base';

function ActiveUser(props) {

  useEffect(() => {
    setDatas(props.data);
  }, [props])
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [datas, setDatas] = useState([])
  const [page, setPage] = React.useState(0);


  const handleChangePage = (
    event,
    newPage,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <TablePagination rowsPerPageOptions={[50, 100, 250, { label: 'All', value: -1 }]}
              colSpan={7}
              count={datas.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}/>
          </tr>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-Mail</th>
            <th>Phone</th>
            <th>password</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {datas.length > 0 && (rowsPerPage > 0
            ? datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : datas
          ).map((d, index) => {
            return (
              <tr key={index}>
                <td>{d.id}</td>
                <td>{d.firstName}</td>
                <td>{d.lastName}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.password}</td>
                <td>{d.active === 'Y' ? 'Yes' : 'No'}</td>
              </tr>
            )
          })}
          {datas.length <= 0 && (<tr><td colSpan={7}>No Data</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveUser;
