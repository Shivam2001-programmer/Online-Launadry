import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import SuceessModal from "../modals/SuccessModal";
import { BiSearch } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
const DeliveryList = () => {
	const [orders, setOrders] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [isSearchEmpty, setIsSearchEmpty] = useState(false);
	const [success, setSuccess] = useState("");
	const [viewModal, setViewModal] = useState(false);
	let statusStyle;

	const getOrders = async () => {
		try {
			const res = await axios.get("order/deliverer/deliver");
			setOrders(res.data);
		} catch (error) {
			console.error(error);
		}
	};

	const statusUpdate = async (id) => {
		try {
			await axios.put(`order/deliverystatus/${id}`);
			setSuccess("updated deliver status succesfully for order " + id);
			getOrders();
			setViewModal(true);
			console.log(isSearchEmpty);
		} catch (error) {
			console.log(error);
		}
	};

	const getOrdersBasedOnSearchQuery = async (e) => {
		e.preventDefault();
		if (searchQuery) {
			//setIsLoading(true);
			const res = await axios.get("order/deliverer/Pickup");
			const filteredorders = res.data.filter((AcceptedOrders) =>
				AcceptedOrders.Address.toLowerCase().includes(searchQuery.toLowerCase())
			);

			if (filteredorders.length === 0) {
				setOrders([]);
				setIsSearchEmpty(true);
				//setIsLoading(false);
				return;
			}

			setOrders(filteredorders);
			//setIsLoading(false);
		}
	};

	useEffect(() => {
		getOrders();
	}, []);

	return (
		<div
			style={{
				marginTop: "50px",
				marginLeft: "150px",
				marginRight: "150px",
			}}
		>
			{orders.length !== 0 ? (
				<div className="flex flex-col">
					<h3 className="text-center text-2xl  text-gray-400 mb-20 font-semibold ">
						Delivery order List
					</h3>
					<form
						className="w-2/5 text-center relative mb-12"
						onSubmit={getOrdersBasedOnSearchQuery}
					>
						<input
							type="text"
							name="search"
							id="search"
							className="outline-none rounded-full border px-5 py-1 focus:border-light-blue w-full"
							placeholder="Search by location"
							value={searchQuery}
							onChange={(e) => {
								setSearchQuery(e.target.value);
							}}
						/>
						<button className="text-white bg-light-blue absolute right-0 top-0 h-full rounded-full w-16 flex items-center justify-center font-bold text-2xl">
							<BiSearch />
						</button>
						{searchQuery && (
							<div
								className="absolute right-24 top-0 h-full rounded-full p-2 flex items-center justify-center font-bold text-3xl cursor-pointer"
								onClick={() => {
									setSearchQuery("");
									getOrders();
								}}
							>
								<IoIosClose className="text-red-400" />
							</div>
						)}
					</form>

					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-32">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-100">
										<tr>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Address
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Customer
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Date
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Delivery Status
											</th>

											<th scope="col" className="relative px-6 py-3">
												<span className="sr-only">Accept</span>
											</th>
											<th scope="col" className="relative px-6 py-3">
												<span className="sr-only">Accept</span>
											</th>
										</tr>
									</thead>
									{orders && (
										<tbody className="bg-white divide-y divide-gray-200">
											{orders.map((order) => {
												order.DelivaryStatus === "delivered"
													? (statusStyle = "bg-green-100 text-green-800")
													: (statusStyle = "bg-gray-100 text-gray-500");
												return (
													<tr key={order._id}>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="flex items-center">
																<div className="text-sm text-gray-900">
																	{order.Address}
																</div>
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="text-sm text-gray-900">
																{order.CustomerName}
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="text-sm text-gray-900">
																{order.StartDate}
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap ">
															<span
																className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full  ${statusStyle}`}
															>
																{order.DelivaryStatus}
															</span>
														</td>

														<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
															<button
																onClick={() => {
																	statusUpdate(order._id);
																}}
																disabled={order.DelivaryStatus === "delivered"}
																className="text-green-500 hover:text-green-200"
															>
																Delivered
															</button>
														</td>
													</tr>
												);
											})}
										</tbody>
									)}
								</table>
							</div>
						</div>
						{viewModal && (
							<SuceessModal setview={setViewModal} message={success} />
						)}
					</div>
				</div>
			) : (
				<div className="font-semibold text-center text-blue-500 mb-80 mt-20 text-xl">
					no orders found for deliver
				</div>
			)}
		</div>
	);
};

export default DeliveryList;
