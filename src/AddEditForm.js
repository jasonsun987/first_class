import React, { Component } from "react";
class AddEditForm extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const {employee,name,worktime,attend,date,ediID,onCustomizeValueChange,showFrom,onAddEdit,onCustomizeCancle}=this.props;
      return (
        <div>
        姓名:
        <input

        onChange={(evt) => onCustomizeValueChange({name:'name',value:evt.target.value})}
           /*  //onChange 后的evt是js自带的功能
            console.log(evt.target.value); //直接拿到数据
            this.setState({ name: evt.target.value }); //更新State */
          value={name}
        />{" "}
        <br />
        工时:
        <input
          onChange={(evt) => onCustomizeValueChange({name:'worktime',value:evt.target.value})}
          value={worktime}
        />{" "}
        <br />
        出勤:
        {/* <input
          onChange={(evt) => {
            console.log(evt.target.value);
            this.setState({ attend: evt.target.value });
          }}
          value={attend}
        />{" "}
        <br /> */}
        <select 
        value={attend} 
        onChange={(evt) => onCustomizeValueChange({name:'attend',value:evt.target.value})}>
            {/* option 是下拉选项 */}
          <option value={false}></option> 
          <option value={true}>是</option>
          <option value={false}>否</option>
        </select>
        <br />
        日期:
        <input
          onChange={(evt) => onCustomizeValueChange({name:'date',value:evt.target.value})}
          value={date}
        />{" "}
        <br />



        <button
          onClick={() => { onCustomizeCancle({ showFrom: false }); }}
        >
          取消
        </button>

        <button
          onClick={() => {
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
          >{ediID?'修改':'添加'}</button>
      </div>


      )}}

      export default AddEditForm