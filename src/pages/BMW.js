import React from 'react';

import Showcase from '../components/products/Showcase';
import Brand from '../components/products/Brand';
import Products from '../components/products/Products';

import classes from './PageProduct.module.css';

import motorImage1 from './../assets/img/products/bmw/bmw-R1250R.webp';
import motorImage2 from './../assets/img/products/bmw/bmw-R1250GS.webp';
import motorImage3 from './../assets/img/products/bmw/bmw-RNineT.webp';
import motorImage4 from './../assets/img/products/bmw/bmw-RNineTScrambler.webp';
import motorImage5 from './../assets/img/products/bmw/bmw-S1000RR.webp';
import motorImage6 from './../assets/img/products/bmw/bmw-S1000XR.webp';

import showcaseImg from './../assets/img/showcase/showcase-bmw.png';
import brandImg from './../assets/img/brand/brand-bmw.png';

const BMW = (props, ref) => {
  const showcaseRef = ref;

  const showcaseTitle = 'BMW';
  const heading = 'Make life a ride.';
  const description =
    'Whether in Europe, Asia, America or Australia: for years, it has won races and titles all around the globe. Definitely, the superlative of superlatives --- the Ultimate Driving Machine.';

  const DATA = [
    {
      id: 'bmw1',
      make: 'BMW',
      model: 'R 1250 R',
      displacement: '1254cc',
      rate: 4,
      image: motorImage1,
      price: 8995,
    },
    {
      id: 'bmw2',
      make: 'BMW',
      model: 'R 1250 GS',
      displacement: '1254cc',
      rate: 3,
      image: motorImage2,
      price: 8995,
    },
    {
      id: 'bmw3',
      make: 'BMW',
      model: 'R NineT',
      displacement: '1170cc',
      rate: 3,
      image: motorImage3,
      price: 8495,
    },
    {
      id: 'bmw4',
      make: 'BMW',
      model: 'R NineT Scrambler',
      displacement: '1170cc',
      rate: 4,
      image: motorImage4,
      price: 8495,
      disabled: true,
    },
    {
      id: 'bmw5',
      make: 'BMW',
      model: 'S 1000 RR',
      displacement: '1000cc',
      rate: 5,
      image: motorImage5,
      price: 7995,
    },
    {
      id: 'bmw6',
      make: 'BMW',
      model: 'S 1000 XR',
      displacement: '999cc',
      rate: 5,
      image: motorImage6,
      price: 7995,
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

export default React.forwardRef(BMW);
