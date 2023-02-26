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
import Link from 'next/link'


export default function About() {


  const [isDisabled, setIsDisabled] = useState('disabled')
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

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
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
        <title>About | Carmaxxx - Crazy Deals on Cars</title>
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

        {/* HERO SECTION */}
        <section className='about-hero-container'>
          <div className="about-hero-header">
            <Image loading="eager" as="image" className='hero-main-img' width='175' height="25" alt='logo' priority src={logoText} />
            <motion.h1 variants={FadeUp} initial="hidden" animate="animate">
              <motion.span variants={stagger}>Freedom </motion.span>
              <motion.span variants={stagger}>of </motion.span>
              <motion.span variants={stagger}>choosing </motion.span>
              <motion.span variants={stagger}>what </motion.span>
              <motion.span variants={stagger}>you </motion.span>
              <motion.span variants={stagger}>want.</motion.span>
            </motion.h1>
            <p>With 50,000 CarMax Quality Certified cars to choose from,there&apos;s a perfect match for your budget and life. Millions of cars are ruled out by our vetting process, and we never sell cars with flood damage, frame damage, or salvage history. Anything that doesn&apos;t meet our standards is repaired or replaced by our highly trained technicians.</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-details">
            <h1>HAVE ANY QUESTIONS ?</h1>
            <p>based in</p>
            <h6>United States of America & Australia</h6>
            <a href='tel:8338780241'>CONTACT ON - 8338780241</a>
          </div>
          <div className="copywright">
            <h5>Copyright © 2023 CarMaxxx Enterprise Services, LLC</h5>
          </div>
        </footer>
      </main>
    </>
  )
}
