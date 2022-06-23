import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';

const Splash = (props) => {
  return (
    <div className="splash-page-wrapper">
      <header>
        <Nav logout={props.logout} currentUser={props.currentUser} />
      </header>
      <div className="splash-billboard">
        <div>
          <h1 className="billboard-headline">
            Great teamwork starts with a
            <span className="yellow-text"> digital HQ</span>
          </h1>
          <br />
          <h3>
            With all your people, tools and communication in one place, you can
            work faster and more flexibly than ever before.
          </h3>
          <br />
        </div>
        <video autoPlay muted loop playsInline>
          <source
            src="https://slaq-objects.s3.amazonaws.com/slack-splash-video.webm"
            type="video/webm"
          />
        </video>
        <h2>Slack is free to try for as long as you’d like</h2>
      </div>
    </div>
  );
};

export default Splash;
