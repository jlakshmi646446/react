import React from 'react'

const New1 = () => {
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
        <img src='data:image/jpeg;base64,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'></img>
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

export default New1