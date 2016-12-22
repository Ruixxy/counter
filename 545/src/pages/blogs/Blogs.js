import React from 'react'
import { Card,Row,Col,Calendar } from 'antd'

const Component = React.Component

class Blogs extends Component
{
	constructor(props)
	{
		super(props)
	}

	componentDidMount()
	{
		var editor = new Simditor({  textarea: $('#editor') });
		editor.placeholder = 'sda';
	}

	render()
	{
		var all = [1,2,3,4,5,6];
		return(
			<div className="blog-wrapper">
				<Row>
					<Col span={18}>
						{
							all.map(function(val)
							{
								return(
									<Card title="title" extra={<span>author</span>}>
										<p>寂静在喧嚣里低头不语，沉默在黑夜里与目光结交，
										于是，我们看错了世界，却说世界欺骗了我们。</p>
									</Card>
								)
							})
						}
					</Col>
					<Col span={6}>
						<div className="calendar-wrapper">
							<Calendar fullscreen={false}/>
						</div>
					</Col>
				</Row>
				<textarea id="editor" placeholder="" autofocus>
				</textarea>
			</div>
			)
	}
}

module.exports = Blogs;