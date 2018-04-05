import React from 'react';
import ImageUploader from 'react-images-upload';
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

				<div>
					<textarea onChange={this.onStatusChange} type="text" placeholder="" value={this.state.status}></textarea>
					<button onClick={this.addStatus}> Share </button>
				</div>

			)
	}
}

export default AddStatus; 