import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from './card';

class Dashboard extends Component {
    state = { 
        data: [
            {id: 1, info: "newPlayer", chineses: "提案", value: 0, awesomeIcon:['far','smile']},
            {id: 2, info: "topup", chineses: "优惠申请数", value: 0, awesomeIcon:['far','smile']},
            {id: 3, info: "bet", chineses: "优惠申请额度", value: 0, awesomeIcon:['far','smile']}, 
        ]
     }
    render() { 
        const {cards} = this.props;
        return ( 
            <div className="col-12">
                <br></br>  
                <h1>平台選擇</h1>
                <hr></hr>
                    <div className="card-deck">
                        {cards.map(c => 
                        <Card 
                            key = {c.id}
                            info = {c.info}
                            chinese = {c.chinese}
                            value = {c.value}
                            awesomeIcon = {c.awesomeIcon}
                        />
                        )}
                    </div>
                <br></br>            
                <h1>营运数据</h1>
                <hr></hr>
                    <div className="card-deck">
                        {this.state.data.map(d =>
                        <Card
                            key = {d.id}
                            info = {d.info}
                            chineses = {d.chineses}
                            value = {d.value}
                            awesomeIcon = {d.awesomeIcon}
                        />
                        )}
                    </div>
            </div>

         );
    }
}
 
export default Dashboard;