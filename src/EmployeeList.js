import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {employee,onCustomizeDelete,onCustomizeEdit}=this.props;
    return (
      <div>
{/*         <ul>
          {employee.map((item) => {
            const { id, name, attend, date, worktime } = item;
            //if(idx===3){console.log('我想知道',typeof attend)}
            return (
              <li>
                ID:{id}
                姓名:{name}
                工时:{worktime}
                出勤:{attend === "true" ? "是" : "否"}
                日期:{date}
                <button
                  onClick={() => onCustomizeEdit({
                    
                      showFrom: true,
                      name,
                      worktime,
                      attend,
                      date,
                      ediID: id,
                   
                  })} 
                >
                  修改
                </button>
                <button
                  onClick={() => onCustomizeDelete(id)}//用id删除
                    // const afterdelete=empoyee.find((id)=>id.emloyee==='id')
                   
                    //console.log(employee)
                  
                >
                  删除
                </button>
              </li>
            );
          })}
        </ul> */}

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID </TableCell>
            <TableCell align="right">姓名</TableCell>
            <TableCell align="right">工时</TableCell>
            <TableCell align="right">出勤</TableCell>
            <TableCell align="right">日期</TableCell>
            <TableCell align="right">操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.worktime}</TableCell>
              <TableCell align="right">{row.attend?'出勤':"没出勤"}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right"><Button variant="outlined"
                  onClick={() => onCustomizeEdit({
                    
                      showFrom: true,
                      name:row.name,
                      worktime:row.worktime,
                      attend:row.attend,
                      date:row.date,
                      ediID: row.id,
                   
                  })} 
                >
                  修改
                </Button>
                <Button variant="outlined" color = "error"
                  onClick={() => onCustomizeDelete(row.id)}//用id删除
                    // const afterdelete=empoyee.find((id)=>id.emloyee==='id')
                   
                    //console.log(employee)
                  
                >
                  删除
                </Button>
                </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>


      </div>
    );
  }
}

export default EmployeeList;
