import React from "react";


const Addons = () => {
    // handle events 

    return (
        <React.Fragment>
            <section>
                <form >
                    <div className="bg-white w-auto h-auto pb-10 mt-16 mx-5 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
                        {/* header section */}
                        <div className="h-16 flex justify-center items-center shadow">
                            <p className=" font-bold text-3xl text-center  ">
                                Services & Addons
                            </p>

                        </div>


                        {/* body section */}
                        <div>
                            <div className="mt-10 mx-10 space-y-6  ">


                                <div className="grid justify-center space-y-5">
                                    {/* red section */}
                                    <div className="flex space-x-4 items-center ">
                                        <input
                                            type="checkbox"
                                            value='red'
                                            className="w-6 h-6"


                                        />
                                        <p className="text-2xl">DryClean</p>

                                    </div>

                                    {/* yellow section */}
                                    <div className="flex space-x-4 items-center ">
                                        <input
                                            type="checkbox"
                                            value='yellow'
                                            className="w-6 h-6"

                                        />
                                        <p className="text-2xl">Wash & Fold</p>
                                    </div>

                                    {/* blue section */}
                                    <div className="flex space-x-4 items-center ">
                                        <input
                                            type="checkbox"
                                            value='blue'
                                            className="w-6 h-6"

                                        />
                                        <p className="text-2xl">Wash & Iron</p>
                                    </div>

                                    {/* green section */}
                                    <div className="flex space-x-4 items-center ">
                                        <input
                                            type="checkbox"
                                            value='green'
                                            className="w-6 h-6"

                                        />
                                        <p className="text-2xl">Iron & Fold</p>
                                    </div>
                                    <div className="flex space-x-4 items-center ">
                                        <input
                                            type="checkbox"
                                            value='green'
                                            className="w-6 h-6"

                                        />
                                        <p className="text-2xl">Emergency Service</p>
                                    </div>
                                    <div className="flex space-x-4 items-center ">
                                        <input
                                            type="checkbox"
                                            value='green'
                                            className="w-6 h-6"

                                        />
                                        <p className="text-2xl">Subscription Based</p>
                                    </div>
                                    <div className="flex space-x-4 items-center ">
                                        <input
                                            type="checkbox"
                                            value='green'
                                            className="w-6 h-6"

                                        />
                                        <p className="text-2xl">Steam Press</p>
                                    </div>
                                    <div className="flex space-x-4 items-center ">
                                        <input
                                            type="checkbox"
                                            value='green'
                                            className="w-6 h-6"

                                        />
                                        <p className="text-2xl">Curtains Cleaning</p>
                                    </div>
                                    <div className="flex space-x-4 items-center ">
                                        <input
                                            type="checkbox"
                                            value='green'
                                            className="w-6 h-6"

                                        />
                                        <p className="text-2xl">Shoe Cleaning</p>
                                    </div>
                                    <div>

                                    </div>
                                </div>

                            </div>

                            {/* submit section */}
                            <div className="flex justify-center items-center mt-10">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="w-1/3 h-10 bg-blue-400 text-white font-bold rounded-lg text-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </React.Fragment>
    );
};

export default Addons;
