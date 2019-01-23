import React, {Component} from "react"
import {Link} from 'react-router-dom'


export default class Header extends Component{
   render(){
       return(
           <div>
               <div className='top-Header'>
                    <h1>Timothy Meyer</h1>
               </div>
               <div className='bottom-Header'>
               <Link to='/'><button>Home</button></Link>
               <Link to='/about'><button>About</button></Link>
               <Link to='/portfolio'><button>portfolio</button></Link>
               <Link to='/skills'><button>Skills</button></Link>
               <Link to='/contact'><button>Contact</button></Link>
               </div>
           </div>
       )
   }
    }