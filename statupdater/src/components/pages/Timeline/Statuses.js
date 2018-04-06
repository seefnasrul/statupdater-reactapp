import React from 'react';
import { Button } from 'reactstrap';
class Statuses extends React.Component{


	render(){
		
		const styles = {
			buttons : {
				padding:10
			}
		}
		return(

			<div>
				{this.props.statuses.map( (statuses) => {

					return (

						<div className="card">
							<div className="row">
								<div className="col-md-12">
									<label className="text-primary">{statuses.by}</label>
								</div>	
								<div className="col-md-12">
									<label className="text-muted">{statuses.date}</label>
								</div>
								<div className="col-md-12">
									<label>{statuses.status}</label>
								</div>
								<div className="col-md-12">	
									<div className="form-inline" style={styles.buttons}>
										<Button color="primary">Like</Button>		
										<Button  >Comment</Button>
									</div>
								</div>
							</div>

						</div>

						)
				})}

			</div>

			)
	}
}
export default  Statuses;