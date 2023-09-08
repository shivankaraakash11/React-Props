import React, { Component } from 'react'

export default function Hoc(hocComponent) {
  return class extends Component{
    render(){
        return (
            <div>
              <hocComponent></hocComponent>
            </div>
          )
    }
  }
}
