import React from "react";
import Slider from "react-slick";
import { CodeBlock } from 'react-code-blocks';
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";
import './feature.scss';
import Translate from '@docusaurus/Translate';
import {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    id: 0,
    title: translate({
      message: 'Easy to Install',
      id: 'home-features-title-install'
    }),
    description: translate({
      message: 'Works out of the box on both x86_64 and ARM64 architectures for a smooth installation experience.',
      id: 'home-features-desc-install'
    }),
    classVal: "row hero shadow--tl padding--xl margin-top--xl",
    code: `## To bootstrap a new cluster
curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken

## To monitor installation logs, run 
journalctl -u llmos -f
`,
  },
  {
    id: 1,
    title: translate({
      message: 'Unified Infrastructure, LLM & Application Lifecycle Management',
      id: 'home-features-title-mgmt'
    }),
    classVal: "row hero hero--dark padding-vert--xl padding-horiz--lg margin-vert--lg",
    description: translate({
      message: 'Offers a unified interface that makes it easy for both developers and non-developers to manage infrastructure, ML clusters, models, and user workloads.',
      id: 'home-features-desc-mgmt'
    }),
    carousel: {
      items: [
        {
          file: '/img/llmos/home-page.png',
        },
        {
          file: '/img/llmos/ml-cluster.png',
        },
        {
          file: '/img/llmos/model-service.png',
        },
        {
          file: '/img/llmos/notebook.png',
        }
      ]
    }
  },
  {
    id: 2,
    title: translate({
      message: 'Cloud-Agnostic & ML Framework-Agnostic',
      id: 'home-features-title-clouds'
    }),
    classVal: "row hero shadow--lw padding--xl margin-vert--lg",
    Svg: require('@site/static/img/multi-cloud.svg').default,
    description: translate({
      message: 'Works seamlessly across public clouds and on-premise servers. Compatible with any machine learning framework.',
      id: 'home-features-desc-clouds'
    }),
  },
  {
    id: 3,
    title: translate({
      message: 'Private Deployment, Ideal for Edge & Branch',
      id: 'home-features-title-deployment'
    }),
    classVal: "row hero hero--primary padding--xl margin-vert--lg",
    Svg: require('@site/static/img/feature_branch.svg').default,
    description: translate({
      message: 'Supports private deployments with optimized resources for running models and workloads in edge and branch networks. It also allows for horizontal scaling to meet future business needs.',
      id: 'home-features-desc-deployment'
    }),
  },
];

function Feature({title, description, code, carousel, Svg, Img, classVal, id}) {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classVal}>
      <div className="col col--4">
        <h2 className="hero__title feature-title">{title}</h2>
        <p className="hero__subtitle feature-lead">{description}</p>
      </div>

      <div className="col col--8 feature-img-wrapper">
        {code &&
          <CodeBlock
            text={code}
            language="shell"
            showLineNumbers={false}
            theme="docuras"
            className="code-block"
          />
        }

        {carousel &&
          <div className="carousel-wrapper">
            <Slider {...slickSettings}>
              {carousel.items.map((item, idx) => (
                <div key={idx} className="slider">
                  <img src={useBaseUrl(item.file)} alt={`Slide Img ${idx + 1}`}
                       className="d-block w-100 img-fluid"/>
                </div>
              ))}
            </Slider>
          </div>
        }

        {Svg &&
          <Svg className="feature-img" role="img"/>
        }

        {Img &&
          <img src={Img} className="feature-img" role="img" id={Img}/>
        }
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="features-wrapper text-center">
      <div className="container container-lg">
        <h1 className="text--center padding-top--xl">
          <Translate id="home-slogan">Your Private AI Innovation Platform. Not Just GPUs</Translate>
        </h1>
        <div className="container">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
