import React from 'react';
import { Link } from 'react-router-dom';
import Map from 'components/GoogleMap';
import { BsPinMap } from 'react-icons/bs';
const key = 'AIzaSyDP4p9VOIbLeeo5-BK_coBU5FF8r_c2jcU';

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us__banner">
        <h2 className="contact-us__title">Contacts Us</h2>
        <div className="contact-us__link">
          <Link to="/" className="link-home">
            Home
          </Link>
          <span className="link-contact-us"> &rsaquo; Contact us</span>
        </div>
      </div>
      <div className="map">
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `500px`,
                margin: `auto`,
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="icon">
        <div className="icon-address">
          <span className="icon-map">
            <BsPinMap />
          </span>
          <p className="text">
            The standard chunk of Lorem Impsum used since the 1500s is
            reproduced below of those interested
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
