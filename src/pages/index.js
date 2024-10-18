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
function HomepageHeader() {
  return (
    <header className="hero hero--primary hero-bg hero-banner">
      <div className="container header-container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h1" className="hero__title">
              Open-source, Cloud Native AI Infrastructure Platform <Typing />
            </Heading>
            <div className="hero-subtitle home-subtitle">
              <p className="margin-bottom--md">
                Accelerates AI application development and simplifies the management of large language models (LLMs). Built on open-source technologies like Kubernetes and Ray, it is cloud-agnostic and works with any ML framework.
              </p>
              <div className="flex items-center">
                <Link
                  className="button button-bordered button-large button-white"
                  to="https://llmos.1block.ai/docs/quickstart"
                >
                  Get Started
                </Link>
                <Link
                  className="button button-bordered button-large margin-left--md"
                  to="/contact-us"
                >
                  Book a Demo
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
      title={`${siteConfig.title} - Cloud-Native AI Infra Platform`}
      description="An Unified Open-Source Cloud-Native AI Infrastructure Platform"
    >
      <HomepageHeader/>
      <main>
        <HomepageFeatures/>
        <div className="container">
          <div className="row padding--lg">
            <div className="col col--offset-4 col--4">
              <a className="button button--outline button--primary button--block" href="/contact-us">
                Talk with us
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
);
}