import React from 'react'

const New2 = () => {
  return (
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
        <li><a href="./registration">SignUp</a></li>
        <li><a href="./login">Login</a></li>
       
      </ul>
    </nav>
  </header><br /><br /><br />
  <div className='total'>
    <div className='img'>
        <img src="data:image/jpeg;base64,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"></img>
    </div>
    <div className='text'>
        <p>FACESCANADA Ultime Pro Intense Gel Kajal With Smudger & Sharpener - Black,1.2 G|24 Hr Long Stay|Waterproof & Smudgeproof|One Swipe Smooth Application|3-In-1 Kajal,Eyeliner,Smokey Eyeshadow,Matte
        4.1 out of 5 stars 3,876</p>
        <p>₹385 M.R.P: ₹549 (30% off)
Buy 3 items, get 7% offBuy 3 items, get 7% off
Get it by Tuesday 20 August
FREE Delivery by Amazon</p>

    </div>
  </div>
    </div>
  )
}

export default New2;