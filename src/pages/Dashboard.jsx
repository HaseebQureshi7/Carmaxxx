import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logoText from '/public/static/images/logo-text.png'
import flagImage from '/public/static/images/flag.png'
import hamMenu from '/public/static/images/ham-menu.png'
import hilux from '/public/static/images/usedCars/hilux.jpg'
import i30 from '/public/static/images/usedCars/i30.jpg'
import ranger from '/public/static/images/usedCars/ford-ranger.jpg'
import corolla from '/public/static/images/usedCars/corolla.jpg'
import triton from '/public/static/images/usedCars/Mitsubishi-Triton.jpg'
import cx5 from '/public/static/images/usedCars/mazda-cx5.jpg'
import rav4 from '/public/static/images/usedCars/toyota-rav4.jpg'
import camry from '/public/static/images/usedCars/camry.jpg'
import person1 from '/public/static/images/people/Ellipse 6.png'
import person2 from '/public/static/images/people/Ellipse 6-1.png'
import person3 from '/public/static/images/people/Ellipse 6-5.png'
import star from '/public/static/images/star.png'
import { motion } from 'framer-motion'

export default function Dashboard() {

    const [isDisabled, setIsDisabled] = useState('disabled')

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
                staggerChildren: 0.1,
                delayChildren: 2
            }
        }
    };

    const stagger = {
        hidden: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    };

    useEffect(() => {
        setTimeout(() => {
            AOS.init();
            document.querySelector('.animator-container').style.display = 'none'
        }, 3000);
    })

    return (
        <>
            <Head>
                <title>Carmaxxx | Talk to Experts for Free - Crazy Deals on Cars</title>
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

                {/* NAVIGATION BAR */}
                <nav>
                    <div className='nav-splitter'>
                        <div className='nav-left-side'>
                            <div className='logo-container'>
                                <Image loading="eager" as="image" onClick={() => setIsDisabled(isDisabled == 'disabled' ? '' : 'disabled')} className='menu-img' width='25' height="25" alt='logo' priority src={hamMenu} />
                                <Image loading="eager" as="image" className='logo-img' width='175' height="25" alt='logo' priority src={logoText} />
                            </div>
                            <div className="navlink">
                                <h5>Shop</h5>
                            </div>
                            <div className="navlink">
                                <h5>Sell/Trade</h5>
                            </div>
                            <div className="navlink">
                                <h5>About</h5>
                            </div>
                        </div>
                        <div className='nav-right-side'>
                            <Image loading="eager" as="image" width='50' height="50" alt='country' priority src={flagImage} />
                            <div>
                                <h5>Australia</h5>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* SIDEBAR MOBILE ONLY */}
                <section className={`sidebar-container ${isDisabled}`}>

                    <div className="sidebar-drawer">
                        <Image loading="eager" as="image" className='logo-img' width='175' height="25" alt='logo' priority src={logoText} />
                        <h3>Shop</h3>
                        <hr />
                        <h3>Sell/Trade</h3>
                        <hr />
                        <h3>About</h3>
                        <hr />
                    </div>
                    <h3 onClick={() => setIsDisabled(isDisabled == 'disabled' ? '' : 'disabled')} className='exit-sidebar'>X</h3>
                </section>

                {/* HERO SECTION */}
                <section className='hero-container'>
                    <div className="hero-header">
                        <motion.h1 variants={FadeUp} initial="hidden" animate="animate">
                            <motion.span variants={stagger}>Find </motion.span>
                            <motion.span variants={stagger}>cars </motion.span>
                            <motion.span variants={stagger}>your </motion.span>
                            <motion.span variants={stagger}>budget </motion.span>
                            <motion.span variants={stagger}>will </motion.span>
                            <motion.span variants={stagger}>love.</motion.span>
                        </motion.h1>
                    </div>

                    <div className="hero-options">
                        <div className="hero-left-option">
                            <input type="text" placeholder='Make, Model or Brand' />
                            <button>Search Cars</button>
                            <h6>Take 30 days to love it or return it</h6>
                            <h6>(up to 1500 mi).</h6>
                        </div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, ease: [0.4, 0, 0.2, 1] }} className="hero-right-option">
                            <div className="sub-hero-right-option">
                                <h3>Want to talk to a professional ?</h3>
                                <a href='tel:18779083218'>Call Now</a>
                                {/* <p>It's free ; {")"}</p> */}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* USED CARS */}
                <section className='cars-container'>
                    <div className="cars-heading">
                        <h1>Research popular used cars & SUVs</h1>
                        <h6>All listings are fetched in real time and all cars are in stock.</h6>
                    </div>

                    <div data-aos="fade-up" suppressHydrationWarning className="car-tabs-container">
                        <div data-aos="fade-up" suppressHydrationWarning className="car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={hilux} />
                            <h6>Toyota Hilux (2017)</h6>
                        </div>
                        <div data-aos="fade-up" suppressHydrationWarning className="car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={i30} />
                            <h6>Hyundai i30 (2018)</h6>
                        </div>
                        <div data-aos="fade-up" suppressHydrationWarning className="car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={ranger} />
                            <h6>Ford Ranger (2020)</h6>
                        </div>
                        <div data-aos="fade-up" suppressHydrationWarning className="car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={corolla} />
                            <h6>Toyota Corolla (2022)</h6>
                        </div>
                        <div data-aos="fade-up" suppressHydrationWarning className="car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={triton} />
                            <h6>Mitsubishi Triton (2021)</h6>
                        </div>
                        <div data-aos="fade-up" suppressHydrationWarning className="car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={cx5} />
                            <h6>Mazda CX-5 (2017)</h6>
                        </div>
                        <div data-aos="fade-up" suppressHydrationWarning className="car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={rav4} />
                            <h6>Toyota RAV4 (2019)</h6>
                        </div>
                        <div data-aos="fade-up" suppressHydrationWarning className="car-tab-details">
                            <div className='box-design' />
                            <Image loading="lazy" as="image" width='250' height="250" alt='car-listing' src={camry} />
                            <h6>Toyota Camry (2022)</h6>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className='testimonials-container'>
                    <div className="testimonials-heading">
                        <h1>Few words from our happy customers</h1>
                        <h6>All testimonials are sourced from google reviews.</h6>
                    </div>

                    <div className="testimonial-container">
                        <div data-aos="zoom-in" className="testimonial-tab">
                            <h6>~ Buying from carmaxxx was the best decision i made, top class quality</h6>
                            <Image loading="lazy" as="image" className='personImg' width={75} height={75} alt="testimonial-tab" src={person1} />
                            <div className="stars-count">
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                            </div>
                            <h1>Arjun Sethi</h1>
                        </div>
                        <div data-aos="zoom-in" className="testimonial-tab">
                            <h6>~ Car is still running like the day i bought it from Carmaxxx ; {')'}</h6>
                            <Image loading="lazy" as="image" className='personImg' width={75} height={75} alt="testimonial-tab" src={person2} />
                            <div className="stars-count">
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                            </div>
                            <h1>Laury Randolf</h1>
                        </div>
                        <div data-aos="zoom-in" className="testimonial-tab">
                            <h6>~ 140,000 miles and counting! Amazing deal i got from Carmaxxx.</h6>
                            <Image loading="lazy" as="image" className='personImg' width={75} height={75} alt="testimonial-tab" src={person3} />
                            <div className="stars-count">
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                <Image loading="lazy" as="image" width={25} height={25} alt="testimonial-tab" src={star} />
                                {/* <Image width={25} height={25} alt="testimonial-tab" src={star} /> */}
                            </div>
                            <h1>Mathew R.</h1>
                        </div>
                    </div>

                </section>

                {/* ADVERTISEMENT */}
                <section data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='advert-container'>
                    <div className="advert-details">
                        <h1>Don’t know which car to buy ?</h1>
                        <h6>You are just one call away from getting your new car!</h6>
                        <a href='tel:18779083218'>Talk to a Professional</a>
                    </div>
                </section>

                {/* FOOTER */}
                <footer>
                    <div className="footer-details">
                        <h1>CALL US WHENEVER YOU LIKE ; {')'} </h1>
                        <p>based in</p>
                        <h6>United States of America & Australia</h6>
                        <a href='tel:18779083218'>CALL US - 770-493-332-22</a>
                    </div>
                    <div className="copywright">
                        <h5>Copyright © 2023 CarMaxxx Enterprise Services, LLC</h5>
                    </div>
                </footer>
            </main>
        </>
    )
}
