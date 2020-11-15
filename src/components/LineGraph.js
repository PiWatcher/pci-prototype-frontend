import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './LineGraph.css';

class LineGraph extends Component {

    constructor() {
        super();

        this.state = {
            graphData: {
             labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
     
             datasets: [
               {
                   label: 'Average Counted',
                   data: [909, 241, 305, 487, 267, 904, 578, 489, 364],
                   backgroundColor:[
                    'rgba(255, 51, 51, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 51, 51, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                  ]
               }
             ]
           }
         };
    }

    render(){
        return (
            <div className="LineGraph">
                <Line
                    data={this.state.graphData}

                    options={{
                        title:{
                            display: true,
                            text: 'People Counted Over Time',
                            fontSize:25
                          },
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default LineGraph;
