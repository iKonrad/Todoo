var React = require('react');
var Nav = require('Nav');

var Main = (props) => {

	var title = props.title;
	if (title === 'undefined') {
		title = '';
	}
	return (

		<div>
			<Nav />	

			<div className="main" style={{paddingBottom: '50px', 'paddingTop': '30px'}}>
				<div className="sections">
					<div className="container">
						<div className="title">
							<h2></h2>
						</div>
						<div className="col col-xs-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
							{props.children}
						</div>
							
					</div>
				</div>
	
			</div>
			<footer className="footer">
				<div className="container">
					<center>Made by Konrad Jarosinski</center>
				</div>
			</footer>
		</div>

	);
};

module.exports = Main;