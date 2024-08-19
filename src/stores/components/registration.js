import React from 'react'

const SignUp= () => {
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
  <center>
  <h1>SignUp</h1>
  <div className="box">
    <form name="myform" action="/login" onsubmit="return Signup(this)">
      Email Id:<input type="email" name="email" /><br /><br />
      username:<input type="text" name="username" /><br /><br />
      password:<input type="password" name="password" /><br /><br />
      <center>
        <input type="submit" /></center>
      <br />
      <br />
    </form>
  </div>
</center>

    </div>
  )
}

export default SignUp