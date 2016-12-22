/*******************
应该从服务端获取数据
*******************/
import React from 'react'
import { Card,Row,Col } from 'antd'

const Component = React.Component

class TimeRecord extends Component
{
	constructor(props)
	{
		super(props)
	}

	componentWillMount()
	{//向服务端发起请求，请求数据信息（图片的数据）

	}

	render()
	{
		var all = [1,2,3,4,5,6];
		return (
			<div className="gallery-wrapper">
				<Row>
				{
					all.map(function(val)
					{
						return(
							<Col span={8}>
								<Card title='Photo'>
								    <div className="custom-image">
								    	<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
								    </div>
								    <div className="custom-card">
								    	<h3>第{val}张照片</h3>
								    	<p>这是第{val}张照片。</p>
								    </div>
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

module.exports = TimeRecord;