import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Fourhomecards from '@site/src/components/Fourhomecards';


import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (


<div className='homehero padding-vert--lg'>
  <div className="container margin-top--lg" >
  <div className="row ">
    
    <div className="col col--1">
      <div className=""></div>
    </div>
    <div className="col col--3 text--center padding-horiz--md">
      <div className="" > <img src="./img/docux.png" style={{borderRadius:'50%'}}></img></div>
   
    </div> 
    <div className="col col--6 text--center  ">
      <div className=" padding-vert--xl"><h1 className="hero__title ">Columns Component            
         by @Docux </h1>
   </div>
            
    </div>
    <div className="col col--1">
      <div className=""></div>
    </div>
  </div>

    
    </div>
    </div>
  );
}

export default function Home() {
  
  return (
    <Layout>
      <HomepageHeader />
      <main>
      <div className='homebody padding-vert--lg'>
      <div className="container margin-top--lg">
  <div className="row">
    
   
    <div className="col  text--justify ">
    
            <p className="hero__subtitle">
            Docusaurus utilizes the Infima framework for styling layout. The components described here are fully based on the Infima grid system.

With this component, you will be able to easily create columns on demand according to the Infima grid. This provides great flexibility for structuring your content and creating attractive, responsive layouts. Whether you need a simple single-column layout or a complex layout with multiple columns, this component will allow you to achieve it quickly and efficiently. Harness the power of the Infima grid system to make your documentation clear, concise, and aesthetically pleasing.

</p><p>@Docux</p>
            </div>
            
   
  
  </div>

    
    </div></div>
      </main>

    </Layout>
  );
}
