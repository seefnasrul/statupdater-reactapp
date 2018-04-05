import React from 'react';

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

						<div>
							<div>
							<label className="text-primary">{statuses.by}</label>
							<label className="text-muted">{statuses.date}</label>
							<label>{statuses.status}</label>
							<div className="form-inline" style={styles.buttons}>
								<button>Like</button>
								<button>Comment</button>
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