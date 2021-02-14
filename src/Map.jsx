import React from 'react';

export default class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
		};
	}

	componentDidMount() {
		var req = new XMLHttpRequest();
		var self = this;

		req.open(
			'GET',
			'https://api.ipdata.co/?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e'
		);
		req.setRequestHeader('Accept', 'application/json');
		req.onreadystatechange = function () {
			if (req.readyState === 4 && req.status === 200) {
				self.setState({
					data: JSON.parse(this.responseText),
				});
			}
		};
		req.send();
	}

	render() {
		let city = this.state.data.city + ',';
		let country = this.state.data.country_name;
		let src =
			'https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=';

		src += city + country + '&zoom=13';

		console.log('City: ', city);
		console.log('Country: ', country);

		return (
			<iframe
				className='map'
				width='800'
				height='787.5'
				frameBorder='0'
				src={src}
				allowFullScreen
			></iframe>
		);
	}
}
