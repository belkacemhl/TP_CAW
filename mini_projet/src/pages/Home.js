import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/header";
import './Home.css';
import img1 from './assets/01.png';
import img2 from './assets/02.png';
import img3 from './assets/03.png';
import img4 from './assets/04.png';

function Home() {
    useEffect(() => {
        document.getElementById('home-nav-btn').style.color = '#D6A7F5';
    }, []);

    return (
        <>
            <Header />
            <div className='hero-sect'>
                <div className='container'>
                    <img id='img1' src={img1} alt="" />
                    <img id='img2' src={img2} alt="" />
                    <img id='img3' src={img3} alt="" />
                    <img id='img4' src={img4} alt="" />
                </div>
                <div className='container'>
                    <h1>We Are Belkacem Heleili & <br /> Boukherouba Dhiya Eddine, <br /> Founders of UntitledLux </h1>
                    <p>You can browse our blog or contacts with the links below</p>
                    <div className='hero-btns-container'>
                        <div className='btn1'>
                            <Link id="blog-btn" to="/blog">Blog</Link>
                        </div>
                        <div className='btn2'>
                            <Link id="contacts-btn" to="/contacts">Contacts</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;