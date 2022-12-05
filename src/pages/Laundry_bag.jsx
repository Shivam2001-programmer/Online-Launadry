import React from 'react'
import Addons from './Addons'
import Condition from './Condition'
import Orderses from './Orderses'
import Footer from '../components/footer/Footer'

const Laundry_bag = () => {
	return (
		<>
			<Addons />
			<Orderses />
			<Condition />
			<Footer />
		</>
	)
}

export default Laundry_bag