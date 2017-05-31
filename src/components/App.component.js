import React from 'react';

export default class App extends React.Component {

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="header col-xs-12"></div>
				</div>
				<div className="row">
					<div className="col-md-1 navbar"></div>
					<div className="col-md-10 body">
						<div className="row">
							<div className="title col-xs-12"></div>
						</div>
						<div className="row">
							<div className="col-md-5 big-tile"></div>
							<div className="col-md-offset-1 col-md-5 big-tile"></div>
						</div>
						<div className="row">
							<div className="col-md-2 small-tile"></div>
							<div className="col-md-2 small-tile"></div>
							<div className="col-md-3 small-tile"></div>
							<div className="col-md-2 small-tile"></div>
							<div className="col-md-2 small-tile"></div>
						</div>
						<div className="row">
							<div className="col-md-2 small-tile"></div>
							<div className="col-md-2 small-tile"></div>
							<div className="col-md-3 small-tile"></div>
							<div className="col-md-2 small-tile"></div>
							<div className="col-md-2 small-tile"></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 footer" />
				</div>
			</div>
		);
	}

}