import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id ="12345" 
                        title="The lean Startup" 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                        rating={5}
                    />
                        
                    <Product
                        id="12347"
                        title="14.1 Full HD Windows Laptop PC (Windows 10, 4GB RAM, Dual Band 5GHz WiFi (2X WiFi Speeds), T90B Pro Model, Lapbook, Intel Quad-Core, USB 3.0, Bluetooth, Laptop Compute (64GB)"
                        price={249}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Ii0aerc%2BL._AC_.jpg"
                    />
                    

                </div>
                <div className="home__row">
                    <Product
                        id="12346"
                        title="Mr IRONSTONE Large Gaming Desk 63 W x 32 D Home Office Computer Table, Black Gamer Workstation with Cup Holder, Headphone Hook and 3 Cable..."
                        price={239}
                        rating={3}
                        image= "https://images-na.ssl-images-amazon.com/images/I/71sdczldFsL._AC_SL1500_.jpg"
                    
                    />
                    <Product
                        id="12356"
                        title="Christopher Knight Home Evelyn Mid Century Modern Fabric Arm Chair, Beige and Walnut (305538)"
                        price={200}
                        rating={1}
                        image="https://images-na.ssl-images-amazon.com/images/I/91sqqeehm9L._AC_SL1500_.jpg"
                    />
                    <Product
                        id="12376"
                        title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
                        price="129"
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg"
                    />
                    

                </div>
                <div className="home__row">
                    <Product
                        id="12332"
                        title="The Self-Taught Programmer: The Definitive Guide to Programming Professionally"
                        price={29}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/31YJmObNTnL._SX404_BO1,204,203,200_.jpg"
                    />
                    
                </div>

            </div>
            
        </div>
    )
}

export default Home
