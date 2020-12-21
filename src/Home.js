import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="213465"
                        title="The lean startup" price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5} />

                    <Product
                        id="233444"
                        title="iRobot Roomba 960 Robot Vacuum- Wi-Fi Connected Mapping, Works with Alexa, Ideal for Pet Hair, Carpets, Hard Floors (Renewed)"
                        price={279.99}
                        image="data:image/webp;base64,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"
                        rating={5} />

                </div>

                <div className="home__row">
                    <Product
                        id="222"
                        title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
                        price={102.58}
                        image="https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SL1500_.jpg"
                        rating={5} />
                    <Product
                        id="24234324"
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black "
                        price={96.43}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
                        rating={5} />
                    <Product
                        id="42434333"
                        title="Keurig K-Cafe Special Edition Single Serve K-Cup Pod Coffee, Latte and Cappuccino Maker, Comes with Dishwasher Safe Milk Frother, Shot Capability, Nickel"
                        price={189.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71NF2frANqL._AC_SL1500_.jpg"
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product
                        id="323333"
                        title="Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel, 1/2.3-Inch Sensor, 4K Video, WiFi, Splash & Dustproof Camera Body, LEICA DC 24X F2.8 Zoom Lens - DMC-FZ300K - (Black) USA"
                        price={1597.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81xVbbwlqlL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>


            </div>
        </div>
    )
}

export default Home
