import React from 'react'
import './footer.css'
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-12 mt-4">
              <a href="#"><BiLogoInstagramAlt className='ion-icon' /></a>
              <a href="#"><BsFacebook className='ion-icon' /></a>
              <a href="#"><BiLogoTwitter className='ion-icon' /></a>
              <a href="#"><BiLogoYoutube className='ion-icon' /></a>
            </div>
          </div>
          <div class="row ftrrow">
            <div className="col-xl-3 col-md-6 col-6 mt-2 ">
              <p>Registered Office Temple Row 12, Birmingham (UK)</p>
              <p>P.IVA 05850300546</p>
            </div>
            <div class="col-xl-3 col-md-6 col-6 mt-2">
              <a href="#"><p>News</p></a>
              <a href="#"><p>Events</p></a>
              <a href="#"><p>Subscribe to the newsletter</p></a>
            </div>
            <div class="col-xl-3 col-md-6 col-6">
              <a href="#"><p>Privacy</p></a>
              <a href="#"><p>Purchase information</p></a>
              <a href="#"><p>Legal Notices</p></a>
            </div>
            <div class="col-xl-3 col-md-6 col-6">
              <a href="#"><p>Gift Cards</p></a>
              <a href="#"><p>Terms of Use</p></a>
              <a href="#"><p>Corporats Information</p></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MyFooter








