import React from "react";
import { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';
import './feature.scss';
import Carousel from 'react-bootstrap/Carousel';
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";

const FeatureList = [
  {
    title: 'Easy to Install',
    classVal: "col col-12 mb-3",
    description: (
      <>
        Works out of the box on both x86_64 and ARM64 architectures for a smooth installation experience.
      </>
    ),
    code: `## Install the cluster-init node
curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken

## To monitor installation logs, run 
journalctl -u llmos -f

## (Optional) Add a worker node to the cluster
curl -sfL https://get-llmos.1block.ai | LLMOS_SERVER=https://server-url:6443 LLMOS_TOKEN=mytoken sh -s -
`,
  },
  {
    title: 'Infrastructure, LLM & Application Lifecycle Management',
    classVal: "col col-12 mb-3",
    description: (
      <>
        Offers a unified interface that makes it easy for both developers and non-developers to manage infrastructure, ML clusters, models, and workloads.
      </>
    ),
    carousel: {
      items: [
        {
          file: '/img/llmos/home.png',
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
    title: 'Cloud-Agnostic & ML Framework-Agnostic',
    classVal: "col col-6 col-md-6 col-sm-12 mb-3",
    Svg: require('@site/static/img/multi-cloud.svg').default,
    description: (
      <>
        Works seamlessly across public clouds and on-premise servers. Compatible with any machine learning framework.
      </>
    ),
  },
  {
    title: 'Private & Ideal for Edge & Branch',
    classVal: "col col-6 col-md-6 col-sm-12 mb-3",
    Svg: require('@site/static/img/feature_branch.svg').default,
    description: (
      <>
        Supports private deployments with optimized resources for running models and workloads in edge and branch networks. It also allows for horizontal scaling to meet future business needs.
      </>
    ),
  },
];

function Feature({Svg, title, description, code, carousel, Img, classVal}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={classVal}>
      <div className="mt-2">
        <div className="bg-body-tertiary me-md-3 pt-2 px-3 pt-md-2 px-md-5 text-center overflow-hidden">
          <div className="pt-4 pb-3">
            <h3 className="mb-2">{title}</h3>
            <p className="feature-lead">{description}</p>
          </div>

          <div className="bg-body shadow-sm mx-auto feature-img-wrapper">
            {code &&
              <CodeBlock
                text={code}
                language="shell"
                showLineNumbers={false}
                wrapLines
                theme="github"
              />
            }

            { carousel &&
              <div>
                <Carousel activeIndex={index} onSelect={handleSelect} slide={true}>
                  {carousel.items.map((item, idx) => (
                    <Carousel.Item key={idx}>
                      {/*<CarouselImage text="First slide"/>*/}
                      <img src={useBaseUrl(item.file)} alt={`Slide Img ${idx + 1}`} className="d-block w-100 img-fluid" />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            }

            { Svg &&
              <Svg className="feature-img" role="img" />
            }

            { Img &&
              <img src={Img} className="feature-img" role="img" id={Img} />
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="features-wrapper text-center">
      <div className="container container-lg">
        <h2 className="mb-4 mt-3">A Full Private Platform. Not Just GPUs</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
