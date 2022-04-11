import React from 'react'
import '../assets/css/Header.css'
import insta1 from '../assets/icons/inst1.png'
import facebo from  '../assets/icons/face2.png'


export default function Header() {
  return (
    <>
      
      <div className='redes'>
        <div className='facebook'>
            <a href="https://www.facebook.com/nutriglesias/?fref=mentions" target="_blank">
            <img src={facebo} alt="facebook" />            
            </a>
        </div>
        <div className='instagram'>
          <a href="https://www.instagram.com/hugoiglesiasgutierrez/?hl=es" target="_blank">
              <img src={insta1} alt="facebook" />
          </a>
        </div>
      </div>
    </>
  )
}


{/* <IoLogoFacebook/>
      <IoLogoInstagram/> */}
