import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component{
    state = {
        data:{
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets:[
              {
                label: 'Number',
                data:[5,2,1,4,8,6,7,2,4,2,7,12],
                backgroundColor:['rgba(54, 162, 235, 0.6)'],
                fill: false,
                borderColor:'rgba(54, 162, 235, 0.6)',

              }
          ]
        }
    }
  
  render(){
    return (
      <div className="col-md-4">
        <Line
          data={this.state.data}
          options={{
            title:{
                display:true
            }
          }}
        />
      </div>
    )
  }
}

export default LineChart;