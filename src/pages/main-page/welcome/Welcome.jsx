import React from 'react';
import "./welcome.sass";
import "../../../component/button/small-button.sass";
import DefaultButton from "../../../component/button/DefaultButton.jsx";
import PreviewHolder from "../../../component/preview-holder/PreviewHolder.jsx";
import MiniHolder from "../../../component/mini-holder/MiniHolder.jsx";

function Welcome(props) {
  return (
    <>
      <div className="center welcome">
        <span>
          Track your
          <span className="error"> errors </span>
          and
          <span className="error"> exceptions </span>
          in your JavaScript projects for
          {' '}
          <span className="green">free</span>
          .
        </span>
        <div className="spacer">
          We are an error logging solution that allows you
          to conveniently collect and analyze errors on a website or application.
        </div>
        <div>
          <DefaultButton text="Yes! Help me save time" classes={["small-button", "success"]} href="/register" />
          <DefaultButton text="Contact to us" classes={["small-button", "white-border"]} href="/contact" />
        </div>
      </div>
      <PreviewHolder
        text={(
          <>
            <h1>You’ve Got to Know about an Error to Fix It.</h1>
            {' '}
            Don't waste expensive time checking server
            logs every time something happens.View more screenshots and features
          </>
      )}
        img={<img src="https://www.muscula.com/static/dashboard-5fa6aace60014a206124229f885e28ac.webp" />}
      />
      <PreviewHolder
        text={(
          <>
            <h1>You’ve Got to Know about an Error to Fix It.</h1>
            {' '}
            Don't waste expensive time checking server
            logs every time something happens.View more screenshots and features
          </>
        )}
        img={<img src="https://www.muscula.com/static/dashboard-5fa6aace60014a206124229f885e28ac.webp" />}
      />
      <div className="center welcome">
        <div className="spacer">
          <h1>With us you can</h1>
          get free, business and selfhosted plans that offer a range of
          features
        </div>
      </div>
      <div className="center">
        <div className="grid col3 gap">
          <MiniHolder desc="Receive notifications about errors" header="Notifications" />
          <MiniHolder desc="Receive uptime checks" header="Checks" />
          <MiniHolder desc="Enhance value for clients" header="Value" />
          <MiniHolder desc="Improve the user experience" header="Experience" />
          <MiniHolder desc="Increase page rank" header="Rank" />
          <MiniHolder desc="Use JavaScript, PHP, C#, Java" header="Languages" />
          <MiniHolder desc="Use plugins for React, Angular, Vue, WordPress" header="Plugins" />
          <MiniHolder desc="Bolster your security" header="Security" />
        </div>

        <PreviewHolder
          classes="green"
          text={(
            <>
              <h1>Get free trial.</h1>
              No credit card needed & free plan available!
              Start with a free plan and upgrade any time.
              View pricing plans
            </>
        )}
        />
        <PreviewHolder
          classes="green"
          text={(
            <>
              <h1>Features.</h1>
              Show me more!
            </>
        )}
        />
      </div>
    </>
  );
}

export default Welcome;
