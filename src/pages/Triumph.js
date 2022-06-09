import React from 'react';

import Showcase from '../components/products/Showcase';
import Brand from '../components/products/Brand';
import Products from '../components/products/Products';

import classes from './PageProduct.module.css';

import motorImage1 from './../assets/img/products/triumph/triumph-rocket.webp';
import motorImage2 from './../assets/img/products/triumph/triumph-thruxtonRS.webp';
import motorImage3 from './../assets/img/products/triumph/triumph-bonnevilleT120.webp';
import motorImage4 from './../assets/img/products/triumph/triumph-scramblerXE.webp';
import motorImage5 from './../assets/img/products/triumph/triumph-speedTwin.webp';
import motorImage6 from './../assets/img/products/triumph/triumph-speedTripleRS.webp';

import showcaseImg from './../assets/img/showcase/showcase-triumph.png';
import brandImg from './../assets/img/brand/brand-triumph.png';

const Triumph = (props, ref) => {
  const showcaseRef = ref;

  const showcaseTitle = 'triumph';
  const heading = 'Choose every advantage.';
  const description =
    'Known for their retro style and heritage design while still incorporating modern technologies. Their modern line of motorcycles pays homage to past model names and achievements in geographically iconic places relevant to the brand.';

  const DATA = [
    {
      id: 'triumph1',
      make: 'Triumph',
      model: 'Rocket 3 R',
      displacement: '2458cc',
      rate: 5,
      image: motorImage1,
      price: 5495,
    },
    {
      id: 'triumph2',
      make: 'Triumph',
      model: 'Thruxton RS',
      displacement: '1200cc',
      rate: 5,
      image: motorImage2,
      price: 2995,
    },
    {
      id: 'triumph3',
      make: 'Triumph',
      model: 'Bonneville T120',
      displacement: '1200cc',
      rate: 3,
      image: motorImage3,
      price: 2995,
      disabled: true,
    },
    {
      id: 'triumph4',
      make: 'Triumph',
      model: 'Scrambler XE',
      displacement: '1200cc',
      rate: 3,
      image: motorImage4,
      price: 2495,
    },
    {
      id: 'triumph5',
      make: 'Triumph',
      model: 'Speed Twin',
      displacement: '1200cc',
      rate: 3,
      image: motorImage5,
      price: 2495,
    },
    {
      id: 'triumph6',
      make: 'Triumph',
      model: 'Speed Triple RR',
      displacement: '1200cc',
      rate: 4,
      image: motorImage6,
      price: 2495,
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

export default React.forwardRef(Triumph);
