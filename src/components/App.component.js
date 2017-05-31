import React from 'react';

export default class App extends React.Component {

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="header col-xs-12"></div>
				</div>
				<div className="row">
					<div className="col-md-2 col-sm-1 hidden-xs navbar-col"><div className="navbar" /></div>
					<div className="col-md-10 col-sm-11 col-xs-12 body-col">
						<div className="body">
							<div className="row">
								<div className="col-xs-12 title-col"><div className="title" /></div>
							</div>
							<div className="row big-tile-row">
								<div className="big-tile-container">
									<div className="col-md-6 col-sm-12 big-tile-col"><div className="big-tile" /></div>
									<div className=" col-md-6 col-sm-12 big-tile-col"><div className="big-tile" /></div>
								</div>
							</div>
							<div className="">
								<div className="small-tile-container">
									<div className="row small-tile-row">
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
										<div className="col-md-2 col-sm-3 col-xs-6"><div className="small-tile" /></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 footer-col">
						<div className="footer" />
					</div>
				</div>
			</div>
		);
	}

}