import React, { Component } from "react";
import AddEditForm from "./AddEditForm";
import Data from "./Data";
import EmpoloyeeList from "./EmployeeList"
import TopBarButton from "./TopBarButton"

const trueFalseOption=[
  {id:'true',value:true}
]

class App extends Component {
  //继承react的功能
  constructor(props) {
    super(props);
    this.state = {
      //state是状态
      templateWord: "hello world",
      employee: Data,
      showFrom: false,
      name: null,
      worktime: null,
      attend: null,
      date: null,
      //updateFrom:false,
      ediID:null
    };
  }

  render() {
    const { employee, showFrom, name, worktime, attend, date,ediID } = this.state; //取state
    //const templatWord = this.state.temlateWord

    return (
       
      <div>
        {/* 添加按钮 */}
        <TopBarButton 
          showFrom={showFrom}
          onAddButton={(onShowFrom)=>{
              const {showFrom}=onShowFrom;
            this.setState({
              //更新State
              showFrom: !showFrom,
              ediID:null
            })}}
        />
       {/* 显示员工列表 */}
       <EmpoloyeeList
              employee={employee}
              onCustomizeEdit={(entity)=>{
                //这种写法 和 下面的是等价的

                const {showFrom,name,worktime,attend,date,ediID,}=entity||{}; //空检查 前面
                this.setState({
                  showFrom,
                      name,
                      worktime,
                      attend,
                      date,
                      ediID,
                })
              }}
              onCustomizeDelete={(needDeleteId)=>{
//知道了删除的ID
                const afterDeletedEmployee=employee.filter(emp=>emp.id!==needDeleteId)
                this.setState({
                  employee:afterDeletedEmployee
                })
              }}
          /> 



        {/* 添加 表单 */}
    
       




        {showFrom && (
           <AddEditForm 
           onCustomizeCancle = {showFrom => {
            console.log(showFrom)
            this.setState({showFrom:false,})
          console.log(showFrom)
          }}


           onAddEdit={(employee)=>this.setState({
            employee,
            showFrom:false,
            employee,
              name: null,
              worktime: null,
              attend: null,
              date: null
              
          })}
           onCustomizeValueChange={entity=>{
            const {name,value}=entity||{};
            this.setState({
              [name]:value

            })
           }}
           name={name}
           worktime= {worktime}
           attend={attend}
           date= {date}
           ediID={ediID}
           employee={employee}
           
         
           />
        )}
      </div>
    );
  }
}

export default App;
