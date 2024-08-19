import React from 'react'

const Signin = () => {
    const Validate=()=>{
        var uname=document.myform.username.value;
      var password=document.myform.password.value;
      if(uname==null || uname==""){
          alert("username should not blank")
          return false;
      }
      else if(password.length<6){
          alert("password must have 6 letters")
          return false;
      }
      else{
          return true;
      }
    }
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
  <h1>LOGIN</h1>
  <center>
  <table>
    <tr>
    <div class="box">
    <form name="myform" action="/" onsubmit="return Validate(this)">
        USERNAME:<br></br>
        <input type="text" name='username'></input><br/><br/>
        PASSWORD:<br/>
        <input type='password' name='pass'></input><br/><br/>
        <button >SUBMIT</button>
    </form>
    </div>
    </tr>
  </table>
  </center>
  </div>
  )
}

export default Signin