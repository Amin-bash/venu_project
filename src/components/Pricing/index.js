import React, { Component } from 'react';
import MyButton from '../utills/MyButton';
import Zoom from 'react-reveal/Zoom';
import './styles.css';

export default class Pricing extends Component {
	state = {
		prices: [ 100, 150, 250 ],
		positions: [ 'Balcony', 'Medium', 'Star' ],
		desc: [
			'Long testing some text on the web to see how it can perform in the real browser',
			'Long testing some text on the web to see how it can perform in the real browser',
			'Long testing some text on the web to see how it can perform in the real browser'
		],
    linkTo: [ 'google.com', 'google.com', 'google.com' ],
    delay: [500, 0, 400]
	};

	showBoxes = () =>
		this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton text="purchase" bck="#ffa800" color="#ffffff " />
            </div>
          </div>
        </div>
      </Zoom>
		));
	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>
					<div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
				</div>
			</div>
		);
	}
}
