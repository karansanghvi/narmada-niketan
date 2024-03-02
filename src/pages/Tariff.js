import React from 'react';
import '../assets/styles/tariff.css';
import Footer from '../components/Footer';

function Tariff() {
  return (
    <>
      <div className='flex justify-center mt-36'>
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-center text-black">
          Price Chart
        </h1>
      </div>
      <div className='flex justify-center mt-4'>
        <p className='text-black text-lg md:text-xl lg:text-xl ml-2 mr-2 text-center'>
          Deposit & Monthly Charges w.e.f April 2023 Per Senior Citizen
        </p>
      </div>
      <div class="price-table">
					<table class="comparison-table">
						<thead>
							<tr class="product-tile-row">
								<th class="product-feature">
                  <div>Price Plans</div>
                </th>
								<th class="product">Old Age Home</th>
								<th class="product">Arogya Dham</th>
								<th class="product">Special Room  <br /> (Bedridden Inmate)</th>
                <th class="product">Ward <br /> (Bedridden Inmate)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td colspan="3">Number Of Inmates Per Room</td>
							</tr>
							<tr class="compare-row">
								<td>Number Of Inmates Per Room</td>
								<td>
									<span>Up to 1 Inmate</span>
								</td>
								<td>
									<span>Up to 1 Inmate</span>
								</td>
								<td>
									<span>Up to 1 Inmate</span>
								</td>
                <td>
									<span>Up to 15 Inmates</span>
								</td>
							</tr>
							<tr>
								<td></td>
								<td colspan="3">Deposit Money</td>
							</tr>
							<tr>
								<td>Deposit Money</td>
								<td>
									<span>&#8377; 20,000/-</span>
								</td>
								<td>
                  <span>&#8377; 20,000/-</span>
								</td>
								<td>
                  <span>&#8377; 50,000/-</span>
								</td>
                <td>
                  <span>&#8377; 25,000/-</span>
								</td>
							</tr>
							<tr>
								<td></td>
								<td colspan="3">For 15 Days</td>
							</tr>
							<tr class="compare-row">
								<td>For 15 Days</td>
								<td>
									<span>&#8377; 1950/-</span>
								</td>
								<td>
                  <span>&#8377; 2200/-</span>
								</td>
								<td>
                  <span>&#8377; 2300/-</span>
								</td>
                <td>
                  <span>&#8377; 1700/-</span>
								</td>
							</tr>
							<tr>
								<td></td>
								<td colspan="4">For 21 Days</td>
							</tr>
							<tr>
								<td>For 21 Days</td>
								<td>
                  <span>&#8377; 2600/-</span>
								</td>
								<td>
                  <span>&#8377; 2900/-</span>
								</td>
								<td>
                  <span>&#8377; 3300/-</span>
								</td>
                <td>
                  <span>&#8377; 2400/-</span>
								</td>
							</tr>
							<tr>
								<td></td>
								<td colspan="3">For 1 Month</td>
							</tr>
							<tr class="compare-row">
								<td>For 1 Month</td>
								<td>
                  <span>&#8377; 2900/-</span>
								</td>
								<td>
                  <span>&#8377; 3300/-</span>
								</td>
								<td>
                  <span>&#8377; 4000/-</span>
								</td>
                <td>
                  <span>&#8377; 3000/-</span>
								</td>
							</tr>
							<tr>
								<td></td>
								<td colspan="4">For 1 Day</td>
							</tr>
							<tr>
								<td>For 1 Day</td>
								<td>
                  <span>&#8377; 250/-</span>
								</td>
								<td>
                  <span>&#8377; 250/-</span>
								</td>
								<td>
                  <span>&#8377; 250/-</span>
								</td>
                <td>
                  <span>&#8377; 250/-</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
        <div className='ml-20 mr-20'>
          <p className='text-black text-lg'>
            <b>Note:</b> For charges for Old Age Home and Arogya Dham, kindly give cheque on NEFT payable to <b>"NCF A/C HOME FOR THE AGED"</b> 
            (Bank Of Maharashtra, CBD Belapur)
          </p>
        </div>

        <br />

        <Footer/>
    </>
  );
}

export default Tariff;
