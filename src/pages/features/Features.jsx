import React from 'react';
import NavBar from "../../component/nav-bar/NavBar.jsx";
import Footer from "../../component/footer/Footer.jsx";
import PreviewHolder from "../../component/preview-holder/PreviewHolder.jsx";

function Features(props) {
  return (
    <>
      <NavBar />
      <div className="center">
        <h1 className="text-center-align">Features</h1>
        <p className="def-size def-color def-family text-center-align">
          Logs are a key component for troubleshooting infrastructure and application errors.
          Some software does a few things well, but falls short in other areas.
          We is a muscular application with a full suite of features. Work less, earn more.
        </p>
        <PreviewHolder
          text={(
            <div>
              <h1>Structural logging</h1>
              <p className="highlight-success">Debug on production</p>
              We allows you alongside the errors log also additional information like data user sent with request. You
              can view and search that data to check all errors related to user's request. Check our documentation for
              more information.
            </div>
          )}
          img={(
            <img
              style={{ paddingTop: "2rem" }}
              src="https://lh4.googleusercontent.com/Zg0gp5kris7dUkvdA7VTsaMmJMMVKNNaIhZdiJDEllngBWiHsnip-XtD7FBxWwXcFZQe-9avKcx9OKly60k2sJliPSOiXEbTLlMQVteLrIJUBZiR7mBmufE5jGTcFpklX9BoA-6c"
            />
)}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>No risk</h1>
              <p className="highlight-success">Website or servers are safe</p>
              We are requires no changes to your code or a proxy, so your website or servers are safe.
            </div>
          )}
          img={(
            <img
              src="https://images.ctfassets.net/c5bd0wqjc7v0/4Zbb6R21DzWs2ONq3mDABn/400b1c205dade66482f398245c4e6c4f/Setting_the_record_straight__Your_funds_are_safe_at_Coinbase_____and_always_will_be.png"
            />
)}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                Multiple projects
              </h1>
              We are passionate about an error-free user experience, and we want you to get the most out of your
              investment our service. We provide full support for our product, and we are is poised to help resolve
              challenges and answer queries.
            </div>
          )}
          img={<img src="https://de.smartsheet.com/sites/default/files/ManageMultipleProjects-tile.jpg" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                Blazing fast interface
              </h1>
              Faster than the blink of an eye
              We are showing your errors in fewer than 100ms. Get rid of those logging systems that have overloaded,
              slow interfaces.
            </div>
          )}
          img={<img src="https://cdn-icons-png.flaticon.com/512/4388/4388230.png" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                Easy set up
              </h1>
              Ready to go in five minutes
              Create a log and paste the code fragment in your app or on the website.
            </div>
          )}
          img={<img src="https://www.muscula.com/static/sixth_feature-e9ea82352bfe53126c99d401f55d3564.jpg" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                CMS or blogging platform diagnostic
              </h1>
              For websites, mobile or ecommerce
              Works with every CMS, framework or site generator, including: Gatsby, WordPress, Wix, Bootstrap and
              SquareSpace. Great for ecommerce platforms such as Magento and WooCommerce.
            </div>
          )}
          img={<img src="https://www.muscula.com/static/seventh_feature-1384388d2e89ea1385bde3c350006889.jpg" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                Supports all front-end frameworks
              </h1>
              Just drop in the code
              Compatible with Angular, React, Vue, Svelte, JQuery and many others.
            </div>
          )}
          img={<img src="https://www.muscula.com/static/ninth_feature-b281940a4f808d6c02141bde1078a377.jpg" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                All back-end frameworks
              </h1>
              Express, Backbone, NextJS and more!
            </div>
          )}
          img={<img src="https://dev-updates-uploads.s3.ap-south-1.amazonaws.com/1651161006094-JavaScript.jpg" />}
        />
      </div>
      <Footer />
    </>
  );
}

export const route = {
  href: "/features",
};
export default Features;
