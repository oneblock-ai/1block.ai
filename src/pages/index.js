import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import "./homePage.scss";
import Typing from "@site/src/components/Typing";
import useBaseUrl from '@docusaurus/useBaseUrl';
function HomepageHeader() {
  return (
    <header className="hero hero--primary hero-bg hero-banner">
      <div className="header-container container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h1" className="hero__title">
              Open Source, Cloud-Native LLMOps Platform For <Typing/>
            </Heading>
            <div className="hero-subtitle home-subtitle">
              <p className="mb-3">
                Fosters innovation in LLMs and generative AI applications. Built on top of open-source and cutting-edge technologies such as Kubernetes, Ray.io, vLLM, etc., and designed to be cloud-agnostic and ML framework agnostic.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  className="button button-bordered button-large button-white"
                  to="https://llmos.1block.ai/docs/quickstart"
                >
                  Get Started
                </Link>
                <Link
                  className="button button-bordered button-large"
                  to="/contact-us"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

          </div>

          <div className="col col--6">
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
      title={`${siteConfig.title} - An Cloud-Native LLMOps Platform`}
      description="An Unified Open Source Cloud-Native LLMOps Platform"
    >
      <HomepageHeader/>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}