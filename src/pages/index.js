import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Typing from "@site/src/components/Typing";
import useBaseUrl from '@docusaurus/useBaseUrl';
import "./home.scss";
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  return (
    <header className="hero hero--primary hero-bg hero-banner">
      <div className="container header-container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h1" className="hero__title" id="landing-title">
              <Translate id="home-landing-title">
                Open source AI Infrastructure & Innovation Platform
              </Translate> <br></br><Typing />
            </Heading>
            <div className="hero-subtitle home-subtitle">
              <p className="margin-bottom--md">
                <Translate id="home-landing-description">
                  Open source AI infrastructure management software designed to accelerate AI application development and simplify the management of large language models (LLMs).
                </Translate>
              </p>
              <div className="flex items-center">
                <Link
                  className="button button-bordered button-large button-white"
                  to="https://llmos.1block.ai/docs/quickstart"
                  id="btn-get-start"
                >
                  <Translate id="btn-get-started">Get Started</Translate>
                </Link>
                <Link
                  className="button button-bordered button-large margin-left--md"
                  to="/contact-us"
                >
                  <Translate id="btn-book-a-demo">Book a Demo</Translate>
                </Link>
              </div>
            </div>

          </div>

          <div className="col col--6" id="landing-img">
            <img src={useBaseUrl('/img/gpu-stack1.webp')} alt="w-logo"/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Open source AI Innovation Platform`}
      description="An Open source Cloud-Native AI Innovation Platform"
    >
      <HomepageHeader/>
      <main>
        <HomepageFeatures/>
        <div className="container">
          <div className="row padding--lg">
            <div className="col col--offset-4 col--4">
              <a className="button button--outline button--primary button--block" href="/contact-us" id="btn-talk-with-us">
                <Translate id="btn-talk-with-us">Talk with us</Translate>
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
);
}