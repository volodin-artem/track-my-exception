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
              <h1>Intelligent error grouping</h1>
              No wasted time
              Muscula delivers all errors into your central dashboard, and gives you powerful search and sort capabilities.
              No wasted time reading lines of a log for a single error.
              Impress clients with your resolution speed. Muscula does the work; you get the credit.
            </div>
        )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>Uptime Checks</h1>
              Know Instantly When a Site Doesn’t Load
              Use Muscula’s outstanding Uptime Check as a standalone or with our error logging function.
              Know minute-by-minute whether a website or app is unavailable and FIX IT FAST! When a test fails,
              you’ll receive an immediate email with the error notification.
              Look smart and timely while Muscula’s Uptime Check does the hard work.
            </div>
        )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>Structural logging</h1>
              Debug on production
              Muscula allows you alongside the errors log also additional information like data user sent with request. You can view and search that data to check all errors related to user's request. Check our documentation for more information.
            </div>
          )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>No risk</h1>
              Website or servers are safe
              Muscula requires no changes to your code or a proxy, so your website or servers are safe.
              Try Muscula risk-free →
            </div>
          )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>Expert support</h1>
              We are fanatical about support
              As fellow developers, we are passionate about an error-free user experience, and we want you to get the most out of your investment in Muscula and our services. We provide full support for our product, and our team of experts is poised to help resolve challenges and answer queries.
            </div>
          )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                Multiple projects
              </h1>
              As fellow developers, we are passionate about an error-free user experience, and we want you to get the most out of your investment in Muscula and our services. We provide full support for our product, and our team of experts is poised to help resolve challenges and answer queries.
            </div>
          )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                Blazing fast interface
              </h1>
              Faster than the blink of an eye
              Muscula shows your errors in fewer than 100ms. Get rid of those logging systems that have overloaded, slow interfaces. Throttle into the future with Muscula.
              Try Muscula now →
            </div>
          )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
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
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                CMS or blogging platform diagnostic
              </h1>
              For websites, mobile or ecommerce
              Works with every CMS, framework or site generator, including: Gatsby, WordPress, Wix, Bootstrap and SquareSpace. Great for ecommerce platforms such as Magento and WooCommerce.
            </div>
          )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                Use it for mobile
              </h1>
              Any JavaScript-based site
              Android, iOS or nearly native platforms, such as PhoneGap, React Native or NativeScript.
              Muscula for mobile →d WooCommerce.
            </div>
          )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
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
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
        <PreviewHolder
          text={(
            <div>
              <h1>
                Virtually all back-end languages
              </h1>
              C#, Java, PHP, Python and more
              One centralized place to check all components.
              Try Muscula for free →
            </div>
          )}
          img={<img src="https://www.muscula.com/static/muscula_log_compare-d10f1eec2eff9bcefd67a1ecd61da943.gif" />}
        />
      </div>
      <Footer />
    </>
  );
}

const href = "/features";
export { href };
export default Features;
