import React from 'react'

const New3 = () => {
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
        <img src="data:image/jpeg;base64,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" ></img>
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

export default New3