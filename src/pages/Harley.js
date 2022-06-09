import React from 'react';

import Showcase from '../components/products/Showcase';
import Brand from '../components/products/Brand';
import Products from '../components/products/Products';

import classes from './PageProduct.module.css';

import motorImage1 from './../assets/img/products/harley/harley-lowrider.webp';
import motorImage2 from './../assets/img/products/harley/harley-heritageClassic.webp';
import motorImage3 from './../assets/img/products/harley/harley-fatboy.webp';
import motorImage4 from './../assets/img/products/harley/harley-breakout.webp';
import motorImage5 from './../assets/img/products/harley/harley-fatbob.webp';
import motorImage6 from './../assets/img/products/harley/harley-streetbob.webp';

import showcaseImg from './../assets/img/showcase/showcase-harley.png';
import brandImg from './../assets/img/brand/brand-harley.png';

const Harley = (props, ref) => {
  const showcaseRef = ref;

  const showcaseTitle = 'H - D';
  const heading = 'Live to ride, ride to live.';
  const description =
    'Their innovation and imagination for what was possible on two wheels sparked a transportation revolution and lifestyle that would make Harley-Davidson the most desirable motorcycle brand in the world.';

  const DATA = [
    {
      id: 'harley1',
      make: 'Harley-Davidson',
      model: 'Low Rider ST',
      displacement: '1923cc',
      rate: 4,
      image: motorImage1,
      price: 7495,
      disabled: true,
    },
    {
      id: 'harley2',
      make: 'Harley-Davidson',
      model: 'Heritage Classic',
      displacement: '1868cc',
      rate: 5,
      image: motorImage2,
      price: 7495,
    },
    {
      id: 'harley3',
      make: 'Harley-Davidson',
      model: 'Fat Boy',
      displacement: '1868cc',
      rate: 3,
      image: motorImage3,
      price: 6095,
    },
    {
      id: 'harley4',
      make: 'Harley-Davidson',
      model: 'Breakout',
      displacement: '1868cc',
      rate: 5,
      image: motorImage4,
      price: 6095,
    },
    {
      id: 'harley5',
      make: 'Harley-Davidson',
      model: 'Fat Bob',
      displacement: '1868cc',
      rate: 3,
      image: motorImage5,
      price: 6095,
    },
    {
      id: 'harley6',
      make: 'Harley-Davidson',
      model: 'Street Bob',
      displacement: '1868cc',
      rate: 4,
      image: motorImage6,
      price: 6095,
    },
  ];

  return (
    <section className={classes.container}>
      <Showcase
        class={classes.showcase}
        title={showcaseTitle}
        showcaseImg={showcaseImg}
        ref={showcaseRef}
      />

      <Brand
        class={classes.brand}
        brand={showcaseTitle}
        brandImg={brandImg}
        heading={heading}
        description={description}
      />
      <Products
        class={classes.products}
        products={DATA}
        onShowModal={props.onShowModal}
      />
    </section>
  );
};

export default React.forwardRef(Harley);
