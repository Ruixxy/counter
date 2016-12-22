import React from 'react'
import { Card,Row,Col } from 'antd'

const Component = React.Component

class WorkCollection extends Component
{
	constructor(props)
	{
		super(props)
	}

	onWorkDetail(e)
	{	
		debugger;
	}

	render()
	{
		var t = this;
		var all = [1,2,3,4,5,6];
		return(
			<div className="work-collection-wrapper">
				{
					all.map(function(val)
					{
						return(
							<Card title={<span onClick={t.onWorkDetail.bind(t)}>title</span>} extra={<span>time</span>}>
								<Row>
									<Col span={16}>
										<p>本项目围绕生物反应器的关键技术问题重点开展工程化技术研究，
										采用植物油体系统实现了 外源蛋白的高效表达，
										并解决了蛋白分离纯化的、 问题； 基于分子伴侣与重组蛋白
										共表达的理论构建了外源蛋白可溶性表达体系， 实现了外源蛋白的
										可溶性高效表达； 采用定点化学修饰技术， 解决了 外源药物蛋
										白易降解、 不稳定和半衰期短等问题</p>
									</Col>
									<Col span={2}></Col>
									<Col span={6}>
										<img src="http://img.hb.aicdn.com/761f1bce319b745e663fed957606b4b5d167b9bff70a-nfBc9N_fw580"/>
									</Col>
								</Row>
							</Card>
							)
					})
				}
			</div>
			)
	}
}

module.exports = WorkCollection;