import React from 'react';
const Navbar = () => {
  return (
    <div className='Navbar'>
    <div>
  <h1><img width={150} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzdvqhlUlpgzQC4so_0IvAOZaYQ7nE-7Gcg&s" /> <br /> Product Showcase
    <br />The Them Of Beauty</h1><br /><br />
  <header>
    <nav>
      <ul>
        <li><a href="./New">New</a></li>
        <li><a href="./brands">Tools and Brushes</a></li>
        <li><a href="./makeup">Makeup</a></li>
        <li><a href="./skincare">SkinCare</a></li>
        <li><a href="./salesandoffers">Sales And Offers</a></li>
        <li><a href="./registration">SignUp</a></li>
        <li><a href="./login">Login</a></li>
        
      </ul>
    </nav>
  </header><br /><br /><br />
  <div className="focus img">
    <ul>
      <li><a href="#">
          <img width={300} height={300} src="https://www.sephora.com/contentimages/2024-07-14-slotting-just-arrived-v4-standard-site-rwd-home-page-hero-banner-english-US-CAN-handoff_01.jpg?imwidth=545" /></a></li>
      <li><a href="#">  
          <img autofocus width={300} height={300} src="https://www.sephora.com/contentimages/2024-7-XX-hourglass-unreal-liquid-blush-site-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=545" /></a></li>
      <li><a href="#"> 
          <img width={300} height={300} src="https://www.sephora.com/contentimages/2024-6-26-charlotte-tilbury-unreal-skin-sheer-foundation-stick-site-app-home-page-RWD-hero-banner-1200x800-en-us-can.jpg?imwidth=315" />
        </a></li>

    </ul>
  </div>
  <fotter>
    <p>© 2024 my mycompay.all rights reserved</p>
  </fotter>
</div>

    </div>
  )
}

export default Navbar;