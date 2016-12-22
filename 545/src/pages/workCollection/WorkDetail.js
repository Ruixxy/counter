import React from 'react'
import {Row,Col,Card} from 'antd'

const Component = React.Component

class WorkDetail extends Component
{
	constructor(props)
	{
		super(props)
	}

	render()
	{
		var all = [];
		for(var i=0;i<30;i++)
		{
			all.push(i+1);
		}
		return(
			<div className="work-detail-wrapper">
				<Row>
					<Col span={4}>
						{
							all.map(function(val)
							{
								return (
									<h3>第{val}个题目</h3>
									)
							})
						}
					</Col>
					<Col span={20}>
						<h2>TITLE</h2>
						<Card title="内容介绍">
							<p>“我们萧萧的树叶都有声响回答那风和雨。
							你是谁呢，那样的沉默着？” 
							“我不过是一朵花。”
							“We, the rustling leaves, 
							have a voice that answers the storms,
							but who are you so silent?“
							“I am a mere flower.“
							</p>
						</Card>
						<Card title="工具介绍">
							<p>“我们萧萧的树叶都有声响回答那风和雨。
							你是谁呢，那样的沉默着？” 
							“我不过是一朵花。”
							“We, the rustling leaves, 
							have a voice that answers the storms,
							but who are you so silent?“
							“I am a mere flower.“
							</p>
						</Card>
						<Card title="效果截图">
							<Row>
								<Col span={18}>
									<img src="http://img.hb.aicdn.com/761f1bce319b745e663fed957606b4b5d167b9bff70a-nfBc9N_fw580" />
								</Col>
								<Col span={1}></Col>
								<Col span={5}>
									<p>“We, the rustling leaves, 
							have a voice that answers the storms,
							but who are you so silent?“
							“I am a mere flower.“</p>
								</Col>
							</Row>
						</Card>
						<Card title="注意&感受">
							<p>“我们萧萧的树叶都有声响回答那风和雨。
							你是谁呢，那样的沉默着？” 
							“我不过是一朵花。”
							“We, the rustling leaves, 
							have a voice that answers the storms,
							but who are you so silent?“
							“I am a mere flower.“
							</p>
						</Card>
						<Card title="代码">
							<p>“我们萧萧的树叶都有声响回答那风和雨。
							你是谁呢，那样的沉默着？” 
							“我不过是一朵花。”
							“We, the rustling leaves, 
							have a voice that answers the storms,
							but who are you so silent?“
							“I am a mere flower.“
							</p>
						</Card>
						<Card title="Github">
							<p>“我们萧萧的树叶都有声响回答那风和雨。
							你是谁呢，那样的沉默着？” 
							“我不过是一朵花。”
							“We, the rustling leaves, 
							have a voice that answers the storms,
							but who are you so silent?“
							“I am a mere flower.“
							</p>
						</Card>
					</Col>
				</Row>
			</div>
			)
	}
}

module.exports = WorkDetail;