import React from 'react';

import AddStatus from './Timeline/AddStatus.js';
import Statuses from './Timeline/Statuses.js';

class Timeline extends React.Component{
	constructor(props){
		super(props)

		const data_status = [
		{id: 1, status:"Today was a great day thanks everyone!" , by:"Seef", date:"2/2/2018"},
		{id: 2, status:"This been great!" , by:"Lia", date:"2/2/2018"},
		{id: 3, status:"I Hope it went well" , by:"Doe", date:"2/2/2018"}
		]

		this.state = {
			status: data_status				
		}

		this.onStatusAdd = this.onStatusAdd.bind(this)

        


	}
	addZero(i){
		if(i < 10){
			i = "0"+i
		}
		return i
	}

	onStatusAdd(newstat){

		var today = new Date()

		var h = this.addZero(today.getUTCHours())
		var m = this.addZero(today.getUTCMinutes())
		var s = this.addZero(today.getUTCSeconds())
		var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' +today.getFullYear()
        var timeDate = h+':'+m+':'+s+' - '+date


		let new_status = this.state.status

		new_status.unshift({id: new_status.length+1, status:newstat, by:"Seef", date: timeDate})

		
		this.setState({
			statuses: new_status
		})
	}
	render(){
		const styles = {
			timeline: {
				padding: 60
			}
		}

		return(

			<div style={styles.timeline} className="border rounded">
				<div className="row">
					<div className="col-md-3">
					</div>
					<div className="col-md-6">
						<h2>This is the timeline </h2>
						<AddStatus onAdd={this.onStatusAdd} />
						<Statuses statuses={this.state.status} />
					</div>
					<div className="col-md-3">
					</div>
				</div>
			</div>
			)
	}
}

export default Timeline;