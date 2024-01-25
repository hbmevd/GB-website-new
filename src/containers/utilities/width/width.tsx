
import { Fragment } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Card, Col, Row } from 'react-bootstrap'

function Width() {
	return (
		<Fragment>
			<Pageheader titles={'Width'} active={'Width'} Subtite={'Utilities'} />

			<Row className="row">
				<Col md={12} xl={12} xs={12} sm={12}>

					<Card>
						<div className='card-header'>
							<div className='card-title'>Width Values</div>
						</div>
						<Card.Body>
							<div className="example">
								<div className="d-md-flex">
									<div className="d-flex align-items-center justify-content-center wd-200 ht-100 bg-custom mt-4 mt-md-0 br-5">
										.wd-200
									</div>
									<div className="d-flex align-items-center justify-content-center wd-150 ht-100 bg-custom ms-md-4 mt-4 mt-md-0 br-5">
										.wd-150
									</div>
									<div className="d-flex align-items-center justify-content-center wd-100 ht-100 bg-custom ms-md-4 mt-4 mt-md-0 br-5">
										.wd-100
									</div>
									<div className="d-flex align-items-center justify-content-center wd-80 ht-100 bg-custom ms-md-4 mt-4 mt-md-0 br-5">
										.wd-80
									</div>
								</div>
							</div>
							<div className="table-responsive border radius-4 mg-t-20">
								<table className="table border-0 mb-0 text-nowrap">
									<thead>
										<tr>
											<th className="wd-30p">Smaller Width</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.wd-[value]</code></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="table-responsive border radius-4 mg-t-10">
								<table className="table border-0 mb-0 text-nowrap">
									<thead>
										<tr>
											<th className="wd-30p">Regular Width</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.wd-[value]</code></td>
											<td>15 | 20 | 25 | 30 | ... | 100 &nbsp; (step of 5)</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="table-responsive border radius-4 mg-t-10">
								<table className="table border-0 mb-0 text-nowrap">
									<thead>
										<tr>
											<th className="wd-30p">Bigger Width</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.wd-[value]</code></td>
											<td>150 | 200 | 250 | 300 | ... | 1000 &nbsp; (step of 50)</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Body>
					</Card>
				</Col>


				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<div className='card-header'>
							<div className='card-title'>Percentage Width</div>
						</div>
						<Card.Body>
							<div className="table-responsive border radius-4">
								<table className="table border-0 mb-0 text-nowrap">
									<thead>
										<tr>
											<th className="wd-30p">Class</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.wd-[value]p</code></td>
											<td>10 | 20 | 30 | 40 | ... | 100 &nbsp; (step of 10)</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Body>
					</Card>
				</Col>


				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<div className='card-header'>
							<div className='card-title'>Media Query Width</div>
						</div>
						<Card.Body>
							<div className="table-responsive border radius-4">
								<table className="table border-0 mb-0 text-nowrap">
									<thead>
										<tr>
											<th className="wd-30p">Class</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.wd-[size]-[value]</code></td>
											<td className="border-bottom">
												<p className="mg-b-5">size: xs | sm | md | lg | xl</p>
												<p className="mg-b-0">value: the width value (refer to code above)</p>
											</td>
										</tr>
										<tr>
											<td><code>.wd-[size]-[value]p</code></td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Body>
					</Card>
				</Col>


				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<div className='card-header'>
							<div className='card-title'>Extra Width Classes</div>
						</div>
						<Card.Body>
							<div className="table-responsive border radius-4">
								<table className="table border-0 mb-0 text-nowrap">
									<thead>
										<tr>
											<th className="wd-30p">Class</th>
											<th className="wd-70p">Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.wd-100v</code></td>
											<td>Set a width to an element based on viewport width.</td>
										</tr>
										<tr>
											<td><code>.wd-auto</code></td>
											<td>Set an auto width to an element.</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	)
}

export default Width