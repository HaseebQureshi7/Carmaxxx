import Head from 'next/head'
import hamMenu from '/public/static/images/ham-menu.png'
import logoText from '/public/static/images/logo-text.png'
import flagImage from '/public/static/images/flag.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import hilux from '/public/static/images/usedCars/hilux.jpg'
import i30 from '/public/static/images/usedCars/i30.jpg'
import ranger from '/public/static/images/usedCars/ford-ranger.jpg'
import corolla from '/public/static/images/usedCars/corolla.jpg'
import triton from '/public/static/images/usedCars/Mitsubishi-Triton.jpg'
import cx5 from '/public/static/images/usedCars/mazda-cx5.jpg'
import rav4 from '/public/static/images/usedCars/toyota-rav4.jpg'
import camry from '/public/static/images/usedCars/camry.jpg'

export default function Shop() {


    const [isDisabled, setIsDisabled] = useState('disabled')
    const [modalData, setModalData] = useState('Toyota Corolla (2018)')
    const [currentCountry, setCurrentCountry] = useState('Australia')

    const FadeUp = {
        hidden: {
            // y: 50,
            opacity: 0
        },
        animate: {
            // y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
                staggerChildren: 0.15,
                delayChildren: 2
            }
        }
    };

    const stagger = {
        hidden: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    };

    // Open Modal
    function OpenModal() {
        const modal = document.querySelector('.modal')
        modal.style.display = 'flex';
    }

    // Close Modal
    function CloseModal() {
        const modal = document.querySelector('.modal')
        modal.style.display = 'none';
    }

    useEffect(() => {
        AOS.init();
        setTimeout(() => {
            document.querySelector('.animator-container').style.display = 'none'
        }, 4000);


        // LOCATION FETCH
        fetch('https://api.ipregistry.co/?key=tryout')
            .then(function (response) {
                return response.json();
            })
            .then(function (payload) {
                console.log(payload.location.country.name + ', ' + payload.location.city);
                setCurrentCountry(payload.location.country.name)
            }).catch(err => console.log(err))
    })

    return (
        <>
            <Head>
                <title>Shop | Carmaxxx - Crazy Deals on Cars</title>
                <meta name="description" content="Find the best deals on cars and get expert advice for free. Carmaxxx offers a wide range of vehicles and unbeatable prices. Call us today!" />
                <meta name="keywords" content="carmaxxx, cars, deals, experts, free advice" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main-body">

                {/* ANIMATION */}
                <div className='animator-container'>
                    <div className="curtain1"></div>
                    <div className="curtain2"></div>
                    <div className="curtain3"></div>
                </div>

                {/* POPUP MODAL */}
                <div className="modal">
                    <div className="modal-body">
                        <p onClick={() => CloseModal()}>x</p>
                        <h2>{modalData}</h2>
                        <h6>Available</h6>
                        <h4>Contact the car seller on the number below to make a deal!</h4>
                        <a href='tel:8338780241'>Call The Seller</a>
                    </div>
                </div>

                {/* NAVIGATION BAR */}
                <nav>
                    <div className='nav-splitter'>
                        <div className='nav-left-side'>
                            <div className='logo-container'>
                                <Image loading="eager" as="image" onClick={() => setIsDisabled(isDisabled == 'disabled' ? '' : 'disabled')} className='menu-img' width='25' height="25" alt='logo' priority src={hamMenu} />
                                <Link style={{ color: 'inherit', textDecoration: 'none' }} href={'/'}><Image loading="eager" as="image" className='logo-img' width='175' height="25" alt='logo' priority src={logoText} /></Link>
                            </div>
                            <div className="navlink">
                                <h5><Link style={{ color: 'inherit', textDecoration: 'none' }} href={'/Shop'}>Shop</Link></h5>
                            </div>
                            <div className="navlink">
                                <h5><Link style={{ color: 'inherit', textDecoration: 'none' }} href={'/Shop'}>Sell/Trade</Link></h5>
                            </div>
                            <div className="navlink">
                                <h5><Link style={{ color: 'inherit', textDecoration: 'none' }} href={'/About'}>About</Link></h5>
                            </div>
                        </div>
                        <div className='nav-right-side'>
                            <Image loading="eager" as="image" width='50' height="50" alt='country' priority src={flagImage} />
                            <div>
                                <h5>{currentCountry}</h5>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* SIDEBAR MOBILE ONLY */}
                <section className={`sidebar-container ${isDisabled}`}>

                    <div className="sidebar-drawer">
                        <Link style={{ color: 'inherit', textDecoration: 'none' }} href={'/'}><Image loading="eager" as="image" className='logo-img' width='175' height="25" alt='logo' priority src={logoText} /></Link>
                        <Link style={{ color: 'inherit', textDecoration: 'none' }} href={'/Shop'}><h3>Shop</h3></Link>
                        <hr />
                        <Link style={{ color: 'inherit', textDecoration: 'none' }} href={'/Shop'}><h3>Sell/Trade</h3></Link>
                        <hr />
                        <Link style={{ color: 'inherit', textDecoration: 'none' }} href={'/About'}><h3>About</h3></Link>
                        <hr />
                    </div>
                    <h3 onClick={() => setIsDisabled(isDisabled == 'disabled' ? '' : 'disabled')} className='exit-sidebar'>X</h3>
                </section>

                {/* SHOP HERO SECTION */}
                <section className='shop-hero-container'>
                    <div className="shop-hero-header">
                        <motion.h1 variants={FadeUp} initial="hidden" animate="animate">
                            <motion.span variants={stagger}>Be </motion.span>
                            <motion.span variants={stagger}>Selective, </motion.span>
                            <motion.span variants={stagger}>Because </motion.span>
                            <motion.span variants={stagger}>You </motion.span>
                            <motion.span variants={stagger}>Can ! </motion.span>
                        </motion.h1>
                        <motion.h3 variants={FadeUp} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.75, duration: 0.6, ease: 'easeInOut' }}>Choose from a wide range of cars with reasonable prices</motion.h3>
                    </div>
                </section>

                {/*SHOP USED CARS */}
                <section className='shop-cars-container'>
                    <div className="shop-cars-heading">
                        <h1>Research popular used cars & SUVs</h1>
                        <h6>All listings are fetched in real time and all cars are in stock.</h6>
                    </div>

                    <div data-aos="fade-up" suppressHydrationWarning className="shop-car-tabs-container">
                        <div onClick={() => { OpenModal(); setModalData("Toyota Hilux (2017)") }} data-aos="fade-up" suppressHydrationWarning className="shop-car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={hilux} />
                            <h6>Toyota Hilux (2017)</h6>
                        </div>

                        <div onClick={() => { OpenModal(); setModalData("Hyundai i30 (2018)") }} data-aos="fade-up" suppressHydrationWarning className="shop-car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={i30} />
                            <h6>Hyundai i30 (2018)</h6>
                        </div>
                        <div onClick={() => { OpenModal(); setModalData("Ford Ranger (2020)") }} data-aos="fade-up" suppressHydrationWarning className="shop-car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={ranger} />
                            <h6>Ford Ranger (2020)</h6>
                        </div>
                        <div onClick={() => { OpenModal(); setModalData("Toyota Corolla (2022)") }} data-aos="fade-up" suppressHydrationWarning className="shop-car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={corolla} />
                            <h6>Toyota Corolla (2022)</h6>
                        </div>
                        <div onClick={() => { OpenModal(); setModalData("Mitsubishi Triton (2021)") }} data-aos="fade-up" suppressHydrationWarning className="shop-car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={triton} />
                            <h6>Mitsubishi Triton (2021)</h6>
                        </div>
                        <div onClick={() => { OpenModal(); setModalData("Mazda CX-5 (2017)") }} data-aos="fade-up" suppressHydrationWarning className="shop-car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={cx5} />
                            <h6>Mazda CX-5 (2017)</h6>
                        </div>
                        <div onClick={() => { OpenModal(); setModalData("Toyota RAV4 (2019)") }} data-aos="fade-up" suppressHydrationWarning className="shop-car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={rav4} />
                            <h6>Toyota RAV4 (2019)</h6>
                        </div>
                        <div onClick={() => { OpenModal(); setModalData("Toyota Camry (2022)") }} data-aos="fade-up" suppressHydrationWarning className="shop-car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={camry} />
                            <h6>Toyota Camry (2022)</h6>
                        </div>
                    </div>
                </section>


                {/* ADVERTISEMENT */}
                <section data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='advert-container'>
                    <div className="advert-details">
                        <h1>Don’t know which car to buy ?</h1>
                        <h6>You are just one call away from getting your new car!</h6>
                        <a href='tel:8338780241'>Talk to a Professional</a>
                    </div>
                </section>

                {/* FOOTER */}
                <footer>
                    <div className="footer-details">
                        <h1>WANT TO KNOW ABOUT OUR BEST DEALS ?</h1>
                        <p>based in</p>
                        <h6>United States of America & Australia</h6>
                        <a href='tel:8338780241'>CALL US - 8338780241</a>
                    </div>
                    <div className="copywright">
                        <h5>Copyright © 2023 CarMaxxx Enterprise Services, LLC</h5>
                    </div>
                </footer>

            </main>
        </>
    )
}
