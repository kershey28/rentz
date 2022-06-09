import React from 'react';

import Showcase from '../components/products/Showcase';
import Brand from '../components/products/Brand';
import Products from '../components/products/Products';

import classes from './PageProduct.module.css';

import motorImage1 from './../assets/img/products/ducati/ducati-diavel.webp';
import motorImage2 from './../assets/img/products/ducati/ducati-streetfighterV2.webp';
import motorImage3 from './../assets/img/products/ducati/ducati-hypermotard.webp';
import motorImage4 from './../assets/img/products/ducati/ducati-desertX.webp';
import motorImage5 from './../assets/img/products/ducati/ducati-monster.webp';
import motorImage6 from './../assets/img/products/ducati/ducati-multistradaV2.webp';

import showcaseImg from './../assets/img/showcase/showcase-ducati.png';
import brandImg from './../assets/img/brand/brand-ducati.png';

const Ducati = (props, ref) => {
  const showcaseRef = ref;

  const showcaseTitle = 'Ducati';
  const heading = 'Style, Sophistication, Performance. Trust.';
  const description =
    "The world's most attractive motorcycles are the result of a deep commitment to racing competitions; they are the purest expression of refined skill, unmistakable design and above all, a great passion for bikes.";

  const DATA = [
    {
      id: 'ducati1',
      make: 'Ducati',
      model: 'Diavel',
      displacement: '1260cc',
      rate: 4,
      image: motorImage1,
      price: 7495,
    },
    {
      id: 'ducati2',
      make: 'Ducati',
      model: 'Streetfighter V2',
      displacement: '955cc',
      rate: 4,
      image: motorImage2,
      price: 6495,
    },
    {
      id: 'ducati3',
      make: 'Ducati',
      model: 'Hypermotard',
      displacement: '950cc',
      rate: 3,
      image: motorImage3,
      price: 6495,
    },
    {
      id: 'ducati4',
      make: 'Ducati',
      model: 'Desert X',
      displacement: '937cc',
      rate: 5,
      image: motorImage4,
      price: 6495,
    },
    {
      id: 'ducati5',
      make: 'Ducati',
      model: 'Monster',
      displacement: '937cc',
      rate: 4,
      image: motorImage5,
      price: 6495,
      disabled: true,
    },
    {
      id: 'ducati6',
      make: 'Ducati',
      model: 'Multistrada V2',
      displacement: '937cc',
      rate: 5,
      image: motorImage6,
      price: 6495,
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

export default React.forwardRef(Ducati);
