import React from 'react';

import Showcase from '../components/products/Showcase';
import Brand from '../components/products/Brand';
import Products from '../components/products/Products';

import classes from './PageProduct.module.css';

import motorImage1 from './../assets/img/products/suzuki/suzuki-hayabusa.webp';
import motorImage2 from './../assets/img/products/suzuki/suzuki-R1000R.webp';
import motorImage3 from './../assets/img/products/suzuki/suzuki-katana.webp';
import motorImage4 from './../assets/img/products/suzuki/suzuki-GSXS750.webp';
import motorImage5 from './../assets/img/products/suzuki/suzuki-SV650.webp';
import motorImage6 from './../assets/img/products/suzuki/suzuki-VStrom650XT.webp';

import showcaseImg from './../assets/img/showcase/showcase-suzuki.png';
import brandImg from './../assets/img/brand/brand-suzuki.png';

const Suzuki = (props, ref) => {
  const showcaseRef = ref;

  const showcaseTitle = 'Suzuki';
  const heading = 'Way of Life.';
  const description =
    'Has evolved while staying true to its concept --- the pinnacle of high performance motorcycles. Its sensational power, speed, smooth ride and overwhelming presence continue to fascinate owners and onlookers alike.';

  const DATA = [
    {
      id: 'suzuki1',
      make: 'Suzuki',
      model: 'Hayabusa',
      displacement: '1340cc',
      rate: 5,
      image: motorImage1,
      price: 5995,
    },
    {
      id: 'suzuki2',
      make: 'Suzuki',
      model: 'GSX - R1000R',
      displacement: '999cc',
      rate: 4,
      image: motorImage2,
      price: 4495,
    },
    {
      id: 'suzuki3',
      make: 'Suzuki',
      model: 'Katana',
      displacement: '999cc',
      rate: 4,
      image: motorImage3,
      price: 4495,
      disabled: true,
    },
    {
      id: 'suzuki4',
      make: 'Suzuki',
      model: 'GSX - S750',
      displacement: '750cc',
      rate: 3,
      image: motorImage4,
      price: 3995,
    },
    {
      id: 'suzuki5',
      make: 'Suzuki',
      model: 'SV650X',
      displacement: '645cc',
      rate: 3,
      image: motorImage5,
      price: 3095,
    },
    {
      id: 'suzuki6',
      make: 'Suzuki',
      model: 'VStrom XT',
      displacement: '645cc',
      rate: 3,
      image: motorImage6,
      price: 3095,
    },
  ];

  //TEST
  console.log('Suzuki');
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

export default React.forwardRef(Suzuki);
