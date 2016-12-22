import React from 'react'
import { Link } from 'react-router'
import {Menu,Row,Col} from 'antd'

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
				<div className="header"></div>
				<div className="page-header-wrapper">
					
					<h1>月が绮丽ですね</h1>
					<p>Today is an another day</p>
					<Menu mode="horizontal">
						<Menu.Item><Link to="/SiranZhang">首页</Link></Menu.Item>
						<Menu.Item><Link to="/timeRecord">照片墙</Link></Menu.Item>
						<Menu.Item><Link to="/loveThings">杂物</Link></Menu.Item>
						<Menu.Item><Link to="/blogs">博客</Link></Menu.Item>
						<Menu.Item><Link to="/workCollection">作品集</Link></Menu.Item>
					</Menu>
				</div>
				<div className="content-wrapper">
					{
						this.props.children
					}
				</div>
				<div className='page-footer-wrapper'>
					<Row>
						<Col span={10}>
							<div className="footer-item">
								<h2>About me</h2>
								<p>归去来兮，田园将芜胡不归？既自以心为形役，奚惆怅而独悲？
								悟已往之不谏，知来者之可追。实迷途其未远，觉今是而昨非。
								舟遥遥以轻飏，风飘飘而吹衣。问征夫以前路，恨晨光之熹微。
								</p>
							</div>
						</Col>
						<Col span={4}><div className="inner-seperate-line"></div></Col>
						<Col span={10}>
							<div className="footer-item">
								<h2>Contact me</h2>
								<ul>
									<li>QQ:371378274</li>
									<li>Email:381378123@qq.com</li>
									<li>Tel:13248727432</li>
								</ul>
							</div>
						</Col>
					</Row>				
				</div>
				<div className="footer"></div>
			</div>
		)
	}
}

module.exports = Entrance;