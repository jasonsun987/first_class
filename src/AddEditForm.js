import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  padding:'20px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  backgroundColor:'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


class AddEditForm extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const {employee,name,worktime,attend,date,ediID,onCustomizeValueChange,showFrom,onAddEdit,onCustomizeCancle}=this.props;
      return (
        <Box >
        <Modal
        open={true}
        onClose={onCustomizeCancle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <div style={style}>
          <FormControl fullWidth>
            <br></br> <br></br>
          <TextField onChange={(evt) => onCustomizeValueChange({name:'name',value:evt.target.value})} value={name} id="name" label="姓名" variant="standard" /> 
          </FormControl>
          
          <FormControl fullWidth>
          <br></br> <br></br>
          <TextField onChange={(evt) => onCustomizeValueChange({name:'worktime',value:evt.target.value})}
          value={worktime} id="worktime" label="工时" variant="standard" />
          </FormControl>

          <FormControl fullWidth>
          <br></br> <br></br>
                    <InputLabel id="attendance-label">出勤</InputLabel>
                    <Select  value={attend} 
                      onChange={(evt) => onCustomizeValueChange({name:'attend',value:evt.target.value})}
                        labelId="attendance-label"
                        id="attendance-label"
                        variant="standard"
                        // value={attendance}
                        label="出勤"
                    >
                        <MenuItem value={false}></MenuItem>
                        <MenuItem value={true}>是</MenuItem>
                        <MenuItem value={false}>否</MenuItem>
                    </Select>
                </FormControl>

        <FormControl fullWidth>
        <br></br> <br></br>
        <TextField onChange={(evt) => onCustomizeValueChange({name:'date',value:evt.target.value})}
          value={date} id="data" label="日期" variant="standard" /> 
        </FormControl>
        <FormControl fullWidth>
        <br></br> <br></br>
        <Button onClick={() => { onCustomizeCancle({ showFrom: false }); }} variant="contained" color='warning'>取消</Button>
        <Button onClick={() => {
            //console.log('我想知道问题', attend)
            if(!ediID){
              
            let creatId=0;
            employee.map(item=>{
            if(item.id>creatId){
                  creatId=item.id;
             }})
            employee.push({
             name,
             worktime,
             attend,
             date,
             id:creatId+1,
             });
             onAddEdit(employee);                          
           }
            else {
              //1哪一行要改 2遍历所有的employee，发现需要改的行，然后更改
              //ediID
              const editeEmployee=employee.map(emp=>{
                if (emp.id===ediID){
                  emp.name = name;
                  emp.date=date;
                  emp.attend=attend;
                  emp.worktime=worktime;

                }
                return emp
              })
              onAddEdit(editeEmployee)

           }}}
              
        
        variant="contained">{ediID?'修改':'添加'}</Button>
        </FormControl>




       
      </div>
      </Modal>
      </Box>

      )}}

      export default AddEditForm