

import "aos/dist/aos.css";
import "./ServicesHeader.css"
import Aos from "aos";
import { useHistory, Redirect } from 'react-router-dom'

const ServicesHero = () => {

    const history = useHistory()

    return (
        <>
            <h1 className='hero '>Laundry & Dry Clean Services</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card ">
                        <img src="https://smart-dhopa-online-laundry-app.web.app/static/media/wash-iron.a47c473a.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 class="card-title">Wash & Iron
                            </h1>
                            <p class="card-text">All your regular wear garments will be washed, steam ironed and neatly packed for delivery.</p>
                            <h1 className='price'>Starting Price ₹59/pc</h1>
                            <p className="paragraph">Delivers in 48 Hrs</p>
                            <button onClick={() => history.push('/addon')} className='bookbtn' >Service</button>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">
                        <img src="https://smart-dhopa-online-laundry-app.web.app/static/media/wash-fold.f94c7281.jpg" />
                        <div class="card-body">
                            <h1 class="card-title"><b>Wash & Fold
                            </b></h1>
                            <p class="card-text">Just in case you choose not to use our steam ironing services we will wash and fold them for you.</p>
                            <h1 className='price'>Starting Price ₹80/pc</h1>
                            <p className="paragraph">Delivers in 48 Hrs</p>
                            <button onClick={() => Redirect.push('/addon')} className='bookbtn'>Service</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">
                        <img src="https://smart-dhopa-online-laundry-app.web.app/static/media/iron-fold.9640f0d2.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><b>Iron & Fold</b></h5>
                            <p class="card-text">Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you..</p>
                            <h1 className='price'>Starting Price ₹76/pc</h1>
                            <p className="paragraph">Delivers in 48 Hrs</p>
                            <button className='bookbtn'>Service</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">
                        <img src="https://smart-dhopa-online-laundry-app.web.app/static/media/dry-cleaning.6a5bef2e.webp" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><b>Dry Cleaning</b></h5>
                            <p class="card-text">All your sensitive and special garments will be individually treated for any stains and dry cleaned.</p>
                            <h1 className='price'>Starting Price ₹79/pc</h1>
                            <p className="paragraph">Delivers in 48 Hrs</p>
                            <button className='bookbtn'>Service</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">
                        <img src="https://p4.wallpaperbetter.com/wallpaper/873/725/182/blue-blur-boutique-clothes-wallpaper-preview.jpg" />
                        <div class="card-body">
                            <h1 class="card-title"><b>Emergency Service</b></h1>
                            <p class="card-text">You can use our emergency service to receive services easily and quickly in our machines using very safe.</p>
                            <h1 className='price'>Starting Price ₹99/pc</h1>
                            <p className="paragraph">Delivers in 48 Hrs</p>
                            <button className='bookbtn'>Service</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">
                        <img src="https://img.freepik.com/premium-photo/concept-housework-with-washing-machine-blue-background_185193-66789.jpg?w=1060" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><b>Subscription Based</b></h5>
                            <p class="card-text">You can get Best Price, Quality Service, Doorstep Pickup & Delivery Service, Hygiene & Fresh Laundry.</p>
                            <h1 className='price'>Starting Price ₹69/pc</h1>
                            <p className="paragraph">Delivers in 48 Hrs</p>
                            <button className='bookbtn'>Service</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">
                        <img src="https://st2.depositphotos.com/1037987/6825/i/600/depositphotos_68250975-stock-photo-man-ironing-laundry.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><b>Steam Press</b></h5>
                            <p class="card-text"> Laundress, steaming your clothes not only gets out wrinkles but it also kills odor-causing bacteria, keeping clothes fresh in between washes.</p>
                            <h1 className='price'>Starting Price ₹19/pr</h1>
                            <p className="paragraph">Delivers in 48 Hrs</p>
                            <button className='bookbtn'>Service</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">
                        <img src="http://www.ehomeservices.com.sg/images/curtain-cleaning.jpg" />
                        <div class="card-body">
                            <h1 class="card-title"><b>Curtains Cleaning</b></h1>
                            <p class="card-text">
                                Curtains collect dirt and moisture when the windows are open. Dust from the ceilings fans and air vents also tend to settle down on curtains.</p>
                            <h1 className='price'>Starting Price ₹99/pc</h1>
                            <p className="paragraph">Delivers in 48 Hrs</p>
                            <button className='bookbtn'>Service</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">
                        <img src="https://www.ezeewash.com/assets/images/shoe.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><b>Shoe Cleaning</b></h5>
                            <p class="card-text">You might have heard that it is tough to clean suede shoes. That’s true to some extent. However, there is no rocket science behind the process.</p>
                            <h1 className='price'>Starting Price ₹39/pr</h1>
                            <p className="paragraph">Delivers in 48 Hrs</p>
                            <button className='bookbtn'>Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesHero