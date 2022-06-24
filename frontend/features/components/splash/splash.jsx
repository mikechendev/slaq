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
            Great teamwork starts <br /> with a
            <span className="yellow-text"> digital HQ</span>
          </h1>
          <br />
          <h3 className="billboard-text">
            With all your people, tools and communication in one place, <br />{' '}
            you can work faster and more flexibly than ever before.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="bold-text">SlaQ is free to try </span> for as long
            as you’d like
          </h3>
          <br />
        </div>
        <video autoPlay muted loop playsInline>
          <source
            src="https://slaq-objects.s3.amazonaws.com/slack-splash-video.webm"
            type="video/webm"
          />
        </video>
      </div>
      <div className="splash-section-top">
        <div className="splash-section-container">
          <video autoPlay muted loop playsInline>
            <source
              src="https://slaq-objects.s3.amazonaws.com/splash-section-1.webm"
              type="video/webm"
            />
          </video>
          <div className="splash-section-1-text">
            <h2 className="splash-section-header">
              Bring your team <br /> together{' '}
            </h2>
            <p className="splash-section-text">
              At the heart of SlaQ are channels: organized spaces for <br />
              everyone and everything you need for work. In channels, it’s{' '}
              <br />
              easier to connect across departments, offices, time zones <br />
              and even other companies.
            </p>
          </div>
        </div>
      </div>
      <div className="splash-section-mid">
        <div className="splash-section-container">
          <div className="splash-section-2-text">
            <h2 className="splash-section-header">
              Choose how you <br /> want to work
            </h2>
            <p className="splash-section-text">
              In SlaQ, you’ve got all the flexibility to work when, where <br />{' '}
              and how it’s best for you. You can easily chat, send audio and{' '}
              <br /> video clips, or hop on a huddle to talk things out live.
            </p>
          </div>
          <video autoPlay muted loop playsInline>
            <source
              src="https://slaq-objects.s3.amazonaws.com/splash-section-2.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
      <div className="splash-section-bottom">
        <div className="splash-section-container">
          <video autoPlay muted loop playsInline>
            <source
              src="https://slaq-objects.s3.amazonaws.com/splash-section-3.webm"
              type="video/webm"
            />
          </video>
          <div className="splash-section-3-text">
            <h2 className="splash-section-header">
              Move faster with your <br /> tools in one place
            </h2>
            <p className="splash-section-text">
              With your other work apps connected to SlaQ, you can <br /> work
              faster by switching tabs less. And with powerful tools <br /> like
              Workflow Builder, you can automate away routine tasks.
            </p>
          </div>
        </div>
      </div>
      <div className="splash-footer">
        <div className="splash-footer-container">
          <div className="splash-footer-text">
            Welcome to your new digital HQ
          </div>
        </div>
      </div>
      <div className="disclaimer-text-container">
        <p>This clone is for educational purposes only.</p>
        <p>Please do not put any sensitive information.</p>
      </div>
    </div>
  );
};

export default Splash;
