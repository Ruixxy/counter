import React from 'react'
import {Carousel} from 'antd'

const Component = React.Component

class Home extends Component
{
	constructor(props)
	{
		super(props)
	}

	render()
	{
		return(
			<div className="home-wrapper">
				<div className="pic-wrapper">
					<Carousel>
					    <div><img src="../images/homeImg1.jpg"/></div>
					    <div><img src="../images/homeImg2.jpg"/></div>
					    <div><img src="../images/homeImg3.jpg"/></div>
					    <div><img src="../images/homeImg4.jpg"/></div>
					</Carousel>
				</div>
			</div>
			)
	}
}

module.exports = Home