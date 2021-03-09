import React, { Component } from 'react'
import WorkList from './worklist'
import image1 from '../../img/academy-vbout.png'
import image2 from '../../img/innovation.png'
import image3 from '../../img/providentloan.png'
import image4 from '../../img/finshield.png'

export default class works extends Component {
	state = {
		works: [
			{
				id: 1,
				name: 'Academy VBOUT',
				description: 'Academy VBOUT is platform where small business can learn and enhance their marketing strategies',
				image: image1,
				url: 'http://academy.vbout.com/'
			},
			{
				id: 2,
				name: 'Innovation Advertising',
				description: 'Innovation Advertising is a platform that specialists in media buying and media planning for traditional and digital advertising.',
				image: image2,
				url: 'https://innovisionadvertising.com/'
			},
			{
				id: 3,
				name: 'Provident Loan',
				description: 'Provident Loan is a lending and pawning business that provides fash cash loans secured by valuable items.',
				image: image3,
				url: 'http://providentloan.com/'
			},
			{
				id: 4,
				name: 'Finland Shield',
				description: 'Finland Shield is the key market leaders in providing security to the motorbikes',
				image: image4,
				url: 'https://www.finlandshield.com/'
			}
		]
	}
	render() {
		return (
			<>
				<section className="section my-work" id="porfolio">
					<div className="container">
						<div className="section-heading">
							<h2>My Work</h2>
							<div className="line-dec" />
						</div>
						<div className="row clients">
							{this.state.works.map((work, index) =>
								<WorkList key={index} work={work} />
							)}
						</div>
					</div>
				</section>
			</>
		)
	}
}