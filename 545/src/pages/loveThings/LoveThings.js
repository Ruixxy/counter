import React from 'react'
import { Card,Row,Col } from 'antd'

const Component = React.Component

class LoveThings extends Component
{
	constructor(props)
	{
		super(props)
	}

	render()
	{
		var all = [1,2,3,4,5,6];
		return(
			<div className="loveThings-wrapper">
				<Row>
					{
						all.map(function(val)
						{
							return(
								<Col span={8}>
									<Card title='Music' extra={<span>Something</span>}>
										<audio controls='controls' src="http://v2v.cc/~j/theora_testsuite/320x240.ogg">您的浏览器不支持播放，请使用Chrome</audio>
									</Card>
								</Col>
								)
						})
					}
				</Row>
			</div>
		)
	}
}

module.exports = LoveThings;