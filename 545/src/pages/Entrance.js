import React from 'react'
import {Menu} from 'antd'

const Component = React.Component

class Entrance extends Component
{
	constructor(props)
	{
		super(props)
	}

	render()
	{
		return(
			<div>
				<div className="page-header-wrapper">
					<div className="header"></div>
					<h1>月が绮丽ですね</h1>
					<p>Today is an another day</p>
					<Menu mode="horizontal">
						<Menu.Item>首页</Menu.Item>
						<Menu.Item>照片墙</Menu.Item>
						<Menu.Item>博客</Menu.Item>
						<Menu.Item>作品集</Menu.Item>
					</Menu>
				</div>
				{
					this.props.children
				}
				<div className='page-footer-wrapper'>

				</div>
			</div>
		)
	}
}

module.exports = Entrance;