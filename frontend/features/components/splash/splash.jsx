import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';

const Splash = (props) => {
  const billboardLoggedOut = () => {
    return (
      <div>
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
              <span className="bold-text">SlaQ is free to try </span> for as
              long as you’d like
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
                In SlaQ, you’ve got all the flexibility to work when, where{' '}
                <br /> and how it’s best for you. You can easily chat, send
                audio and <br /> video clips, or hop on a huddle to talk things
                out live.
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
                faster by switching tabs less. And with powerful tools <br />{' '}
                like Workflow Builder, you can automate away routine tasks.
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
      </div>
    );
  };

  const billboardLoggedIn = () => {
    let workspaceListItems = Object.values(props.currentUser.workspaces).map(
      (workspace) => {
        return (
          <li className="workspace-list-items" key={workspace.id}>
            <div className="workspace-item-container">
              <div className="workspace-item-name">{workspace.name}</div>
              <div className="workspace-item-member-count">
                {workspace.users}
              </div>
            </div>
            <div className="workspace-item-button">
              <Link to={`/client/${workspace.id}`}>
                <button>LAUNCH SLAQ</button>
              </Link>
            </div>
          </li>
        );
      }
    );

    return (
      <div className="splash-billboard-logged-in">
        <div className="billboard-logged-in-container">
          <div className="billboard-headline-logged-in">
            <div className="hand">
              <img src={window.waving_hand} />
            </div>
            <span>Welcome back</span>
          </div>
          <div className="welcome-container">
            <div>
              <div className="welcome-headline">
                Workspaces for {props.currentUser.email}
              </div>
              <div className="splash-workspace-lists">
                <div className="workspace-list-wrapper">
                  <ul>{workspaceListItems}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className="logged-in-footer-container">
            <div className="logged-in-footer-row">
              <div className="logged-in-footer-img">
                <img src={window.woman_with_laptop} />
              </div>
              <div className="logged-in-footer-text">
                Want to use SlaQ with a different team?
              </div>
              <div className="logged-in-footer-button">
                <Link to="/get-started">
                  <button>CREATE A NEW WORKSPACE</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="logged-in-footer-link">
            Not seeing your workspace?{' '}
            <Link to="/login" onClick={props.logout}>
              Try using a different email
            </Link>
          </div>
          <div className="logged-in-footer-grid">
            <div>
              <img src={window.pic1} />
            </div>
            <div>
              <img src={window.pic2} />
            </div>
            <div>
              <img src={window.pic3} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  let billboard = props.currentUser
    ? billboardLoggedIn()
    : billboardLoggedOut();

  return (
    <div className="splash-page-wrapper">
      <header className="splash-nav">
        <Nav logout={props.logout} currentUser={props.currentUser} />
      </header>
      {billboard}
      <div className="disclaimer-text-container">
        <p>This clone is for educational purposes only.</p>
        <p>Please do not put any sensitive information.</p>
      </div>
    </div>
  );
};

export default Splash;
