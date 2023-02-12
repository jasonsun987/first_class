import React, { Component } from "react";
import Button from '@mui/material/Button';

class TopBarButton extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const {employee,showFrom,onAddButton}=this.props;
      return (
        <div>
            <Button variant="outlined" onClick={() => onAddButton({showFrom
          })}
        >
          添加
        </Button>
        </div>
      )
      }}

      export default TopBarButton