import React from 'react'

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
					<h1>月が绮丽ですね</h1>
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