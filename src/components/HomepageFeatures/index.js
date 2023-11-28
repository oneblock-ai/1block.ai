import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Install',
    Svg: require('@site/static/img/k8s-buildings.svg').default,
    description: (
      <>
        Installs directly to any Kubernetes cluster and provides an out-of-box user experience.
      </>
    ),
  },
  {
    title: 'Full LLM & Generative AI Application Lifecycle Management',
    Svg: require('@site/static/img/k8s-team.svg').default,
    description: (
      <>
       Provide a unified interface to facilitate both developers and non-developers in implementing the complete life cycle management of Large Language Models(LLM) and generative AI applications.
      </>
    ),
  },
  {
    title: 'Cloud-Agnostic & Machine Learning Framework Agnostic',
    Svg: require('@site/static/img/multi-cloud.svg').default,
    description: (
      <>
        Cloud-agnostic and Machine Learning(ML) framework agnostic. Support serverless deployment from the public cloud to on-premise servers.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg}  role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
