
import React from "react";
import Date from './Date'
import Payment from "./Payment";
import Time from "./Time";

const Forms = () => {
    return (
        <div className="max-w-[1080px] flex justify-center items-center mx-auto mb-8">
            <div className="w-auto ">
                <div className="shadow-md mt-4 shadow-slate-600 w-auto h-20 flex justify-center items-center">
                    <h1 className="text-blue-600 text-2xl font-semibold text-center ">
                        Edit Pickup & Delivery Details
                    </h1>
                </div>
                <div className="mt-8">
                    <div className="flex">
                        <svg
                            stroke="currentColor"
                            className="text-xl text-blue-600 mt-2 mr-4"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 640 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                        </svg>
                        <h1 className="text-blue-600 text-2xl">Schedule</h1>
                    </div>
                    <p className="text-gray-600 text-md mt-4">
                        Expert will arrive at your given address within 30 minutes
                    </p>
                    <div className="flex items-center mt-4">
                        <div className="w-56">
                            <Date />
                        </div>
                        <div className="w-56 ml-4">
                            <Time />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex">
                        <svg
                            stroke="currentColor"
                            className="text-xl text-blue-600 mt-2 mr-4"

                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M594.3 601.5a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1 8 8 0 0 0 8 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"></path>
                        </svg>


                        <h1 className="text-blue-600 text-2xl">Contact Person</h1>
                    </div>
                    <p className="text-gray-600 text-md mt-4">
                        Expert will arrive at the address given below
                    </p>
                    {/* <input type="time" name="" id="" /> */}
                    <div className="flex-col justify-center items-center">
                        <div>
                            <input
                                className="w-96 h-10 mt-4 border-2 border-gray-600 rounded-3xl p-4 outline-none"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div>
                            <input
                                className="w-96 h-10 mt-4 border-2 border-gray-600 rounded-3xl p-4 outline-none"
                                type="email"
                                name=""
                                id=""
                            />
                        </div>
                        <input
                            className="w-96 h-10 mt-4 border-2 border-gray-600 rounded-3xl p-4 outline-none"
                            type="number"
                            name=""
                            id=""
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            className="text-xl text-blue-600 mt-2 mr-4"

                            stroke-width="0"
                            viewBox="0 0 12 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                            ></path>
                        </svg>
                        <h1 className="text-blue-600 text-2xl">Address</h1>
                    </div>
                    <p className="text-gray-600 text-md mt-4">
                        Expert will arrive at the address given below
                    </p>
                    <div className="flex-col justify-center">
                        <input
                            className="w-96 h-10 mt-4 border-2 border-gray-600 rounded-3xl p-4 outline-none"
                            type="text"
                            name=""
                            id=""
                        />
                        <input
                            className="w-96 h-10 mt-4 ml-4 border-2 border-gray-600 rounded-3xl p-4 outline-none"
                            type="text"
                            name=""
                            id=""
                        />
                        <input
                            className="w-96 h-10 mt-4 border-2 border-gray-600 rounded-3xl p-4 outline-none"
                            type="text"
                            name=""
                            id=""
                        />
                        <input
                            className="w-96 h-10 mt-4 ml-4 border-2 border-gray-600 rounded-3xl p-4 outline-none"
                            type="text"
                            name=""
                            id=""
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            className="text-xl text-blue-600 mt-2 mr-4"

                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                        </svg>
                        <h1 className="text-blue-600 text-2xl">Payment Method</h1>
                    </div>
                    <p className="text-gray-600 text-md mt-4">
                        Expert will contact your payment after delivery your order
                    </p>
                    <div className="w-56 mt-4">
                        <Payment />
                    </div>
                    <button className="w-56 h-14 mt-4 rounded-md bg-red-600 text-center text-white ">
                        Save & Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Forms;