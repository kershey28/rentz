import React from 'react';

import Showcase from '../components/products/Showcase';
import Brand from '../components/products/Brand';
import Products from '../components/products/Products';

import classes from './PageProduct.module.css';

import motorImage1 from './../assets/img/products/kawasaki/kawasaki-vulcan.webp';
import motorImage2 from './../assets/img/products/kawasaki/kawasaki-Z1000R.webp';
import motorImage3 from './../assets/img/products/kawasaki/kawasaki-versys.webp';
import motorImage4 from './../assets/img/products/kawasaki/kawasaki-ninjaH2Carbon.webp';
import motorImage5 from './../assets/img/products/kawasaki/kawasaki-ninjaZX.webp';
import motorImage6 from './../assets/img/products/kawasaki/kawasaki-ZH2.webp';

import showcaseImg from './../assets/img/showcase/showcase-kawasaki.png';
import brandImg from './../assets/img/brand/brand-kawasaki.png';

const Kawasaki = (props, ref) => {
  const showcaseRef = ref;

  const showcaseTitle = 'kawasaki';
  const heading = 'Let the good times roll.';
  const description =
    "These technologically advanced beasts are designed to cater to the rider's deepest & darkest desires, whether it maybe on the city streets or on the racing circuit.";

  const DATA = [
    {
      id: 'kawasaki1',
      make: 'Kawasaki',
      model: 'Vulcan Vaquero',
      displacement: '1700cc',
      rate: 5,
      image: motorImage1,
      price: 5995,
    },
    {
      id: 'kawasaki2',
      make: 'Kawasaki',
      model: 'Z1000 R',
      displacement: '1043cc',
      rate: 5,
      image: motorImage2,
      price: 4495,
    },
    {
      id: 'kawasaki3',
      make: 'Kawasaki',
      model: 'Versys SE',
      displacement: '1043cc',
      rate: 4,
      image: motorImage3,
      price: 4495,
    },
    {
      id: 'kawasaki4',
      make: 'Kawasaki',
      model: 'Ninja H2 Carbon',
      displacement: '998cc',
      rate: 4,
      image: motorImage4,
      price: 3995,
      disabled: true,
    },
    {
      id: 'kawasaki5',
      make: 'Kawasaki',
      model: 'Ninja ZX - 10RR',
      displacement: '998cc',
      rate: 3,
      image: motorImage5,
      price: 3095,
    },
    {
      id: 'kawasaki6',
      make: 'Kawasaki',
      model: 'Z H2',
      displacement: '998cc',
      rate: 3,
      image: motorImage6,
      price: 3095,
      disabled: true,
    },
  ];

  //TEST
  console.log('Kawasaki');
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

export default React.forwardRef(Kawasaki);
