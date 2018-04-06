import React from 'react';
import ImageUploader from 'react-images-upload';
import { Button } from 'reactstrap';
class AddStatus extends React.Component {
	constructor(props){
		
		super(props)

		this.state = {
			status:"",
			pictures:[]
		}

		this.onDrop = this.onDrop.bind(this)
		this.onStatusChange = this.onStatusChange.bind(this)
		this.addStatus = this.addStatus.bind(this)
	
	}
	
	onDrop (picture){
		this.setState({
			pictures:this.state.pictures.concat(picture)
		});
	}
	
	onStatusChange(event){
			
			this.setState({
				status:event.target.value
			})
		
		}

	addStatus(event){

		this.props.onAdd(this.state.status)

		this.setState({
			status:""		
		})
		{console.log(this.state.pictures)}

	}

	render(){

		return(

				<div className="row">
					<div className="col-md-12">
						<textarea className="w-100" onChange={this.onStatusChange} type="text" placeholder="" value={this.state.status}></textarea>
					</div>
					<div className="col-md-12">
						<Button onClick={this.addStatus}> Share </Button>
					</div>
				</div>

			)
	}
}

export default AddStatus; 