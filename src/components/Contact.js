import React, { Component } from 'react';

import Footer from './Footer';

import '../css/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="row justify-content-center">
          <div className="col-8 row">
            <div className="contactInfoList col-md-6 col-12 row align-items-center">
              <h3 className="col-12 contactInfo">
                Jacob Bodkin<br/>
                Austin, TX<br/>
                512.605.9940<br/>
                <a className="emailLink" href="mailto:jacob@jacobbodkin.com">jacob@jacobbodkin.com</a>
              </h3>
              <h3 className="col-12 contactInfo">
                Aurora Photos - stock agency<br/>
                207.828.8787<br/>
                <a className="emailLink contactInfo" href="https://www.auroraphotos.com/result?self_url=%2Fadvanced-search&initvalue4search=2&advancedSearchKey=jacob+bodkin&keywordSearchFields=uname&license_type%5B%5D=rm&license_type%5B%5D=rf&extParam%5Breleases%5D%5B%5D=n&extParam%5Breleases%5D%5B%5D=r&extParam%5Breleases%5D%5B%5D=x&search_orientation_extSearch%5B%5D=h&search_orientation_extSearch%5B%5D=v&search_orientation_extSearch%5B%5D=p&search_orientation_extSearch%5B%5D=q&image_colors_extSearch%5B%5D=c&image_colors_extSearch%5B%5D=bw" target="_blank">www.auroraphotos.com</a><br/>
                <a className="emailLink contactInfo" href="mailto:sales@auroraphotos.com">sales@auroraphotos.com</a>
              </h3>
            </div>

            <form className="form col-md-6 col-12" action="https://formspree.io/jacob@jacobbodkin.com" method="POST">
              <div className="form-group">
                {/* Hides form from scrapers */}
                <input type="text" name="_gotcha" style={ { display: 'none' } } />
                <label>Name</label>
                <input name="name" type="text" className="form-control" id="name" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="_replyto" type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input name="name" type="text" className="form-control" id="phone" />
              </div>
              <div className="form-group">
                <label>Comments</label>
                <textarea name="name" className="form-control" id="comments" rows="8"></textarea>
              </div>
              {/* Takes users back to contact page */}
              <input type="hidden" name="_next" value="https://jacobbodkin.com/" />
              <button type="submit" className="btn btn-primary">Get in Touch</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
