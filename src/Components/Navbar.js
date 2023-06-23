import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom'
import {logo} from '../data/data.json'

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>

function Navbar() {
  return (
    <div className='nav'>
        <div className='logo'>
            <Link to="/">
                <img id='logoImage' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX/aQD/////ZgD/fCP/chP/YgD/bQD/0bf/9u7/+PP/p3H//fr/eSP/1r//zKv/9vD/q33/l1b/7uP/kE3/49P/h0D/r4D/ijf/nFn/693/cAf/iDr/nmL/zKz/8un/0LP/jEb/k0//xZ3/upD/eir/hCn/v5T/om7/lFn/3MH/uoz/jD//6t//uZT/rHj/tYX/ybH/gTPoe5WgAAADpUlEQVR4nO3dXVPiMBiG4SSlELbY8lGQry3QRV1dweX//7ktzuwBTWCowNDn9blPOAmQy0RaRilKF6X5eKqkFYzjbI9TWtt4Fob3ns/1M2E4i+1eaH9NBfo+C9e5LYTx1Nx7JjcrXMdaZTOpK/jZLFOxaKBSsRrLFpqxCu49h9tmAtW49xxuG4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIX3WhCa+TMWd9ctV3z9sKTWf+4wr1esvHhjpjsu6zzTuViFWFppPb9hVKkmSSLkZPp5Gm+ZY5d7WbKhP+gvBBXzP7/HRqtzZb7l2in5UW8d5CHfWfh+rojL3CGEtYlL0cnbIQYbHvZkfmLEWo9cNv/6TlCHXqJwoS6nTgm7YkoZ4MPfMWJdSvnonLEuo39/IVwoTRH2fmwoR6IV6Y9Mr7VJpQL8pPJ074HpTmXh9hlCWTaNLO/t/YfnHTt7bfPryJouiUMNqUtmlthP3t45nNPxbv7ePEv3UVLsy5haHaddOjC/lQuuxYbYStZpWHCHcbe0SY7iQIiwcx2yPEyUqGUBm1zfzC3uFAWKEyjdz7u2i7h+NwhSocpsKFSo18Bw1RwqVvEW1XyCvN/oGmnsnLWsNw43mtkSV88RwTRQnNqo8s9J2SlocMoIW7ZbnBci1IaJap+xdDGzcOJgYt9B/N06EgYdf31kGUcCReeMEaYpy1NbmG+EKuIYX1F3KXwgt5tBAg5BriCy9YQ4zzUu5SfCGPFgKEXEN8ofw1lC/kLj0hBDmnEb+GlxzxuYY1Ecp/LZUv5C7FF4pfQ74/FCDkGp4Q8pymJkLuUnghjxYChFxDCusv5C6FFzZHyReFyTnC216fRqlNlpTrf5TG9FJnTJLlhxMzwcI6g5xrR3y4zzbZVppvdWFz2Sv3VP4372awcgatyj95E7hjAufZBs6gZbX5fuFqZu7FvtxN47sgmDPKM8h9pEsv9cXrtQmIQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8voXQ+UScrArh2P2iYUmZsYpFC800VtlMMtGsrNKtdcWPZQJldi2tdJSvpa5i2MmjQqij1sz7LVvohWq1/9patf+MexaPA3Gt5q+f33b6DyoEi3S4lQeNAAAAAElFTkSuQmCC' alt='Not' />
            </Link> 
            </div>
            <Link  className="navlinks" to="/#miphones">Mi Phones</Link>
           <Link   className="navlinks"  to="/#redmiphones">Redmi Phones</Link>
           <Link   className="navlinks" to="/#tv">TV</Link>
           <Link   className="navlinks" to="/#laptops">Laptops</Link>
           <Link   className="navlinks" to="/#lifestyle">Fitness & Lifestyle</Link>
           <Link  className="navlinks" to="/#home">Home</Link>
           <Link   className="navlinks" to="/#audio">Radio</Link>
           <Link   className="navlinks" to="/#accessories">Accessories</Link>
           <div className='searchbox'>
            <input type='text' name='search' placeholder='search products'/>
             {searchIcon}
           </div>
        </div>

  )
}

export default Navbar