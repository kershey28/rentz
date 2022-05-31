import ButtonCTA from '../buttons/ButtonCTA';
import { scrollIntoPosition } from '../../helpers/helpers';

import classes from './SlideHero.module.css';

import React from 'react';
import { useRef, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import showcaseImage1Reg from './../../assets/img/hero/hero-ducati.png';
import showcaseImage2Reg from './../../assets/img/hero/hero-suzuki.png';
import showcaseImage3Reg from './../../assets/img/hero/hero-bmw.png';
import showcaseImage4Reg from './../../assets/img/hero/hero-kawasaki.png';
import showcaseImage5Reg from './../../assets/img/hero/hero-harley.png';
import showcaseImage6Reg from './../../assets/img/hero/hero-triumph.png';
import showcaseImage1Small from './../../assets/img/products/ducati/ducati-multistradaV2.webp';
import showcaseImage2Small from './../../assets/img/products/suzuki/suzuki-hayabusa.webp';
import showcaseImage3Small from './../../assets/img/products/bmw/bmw-S1000RR.webp';
import showcaseImage4Small from './../../assets/img/products/kawasaki/kawasaki-vulcan.webp';
import showcaseImage5Small from './../../assets/img/products/harley/harley-breakout.webp';
import showcaseImage6Small from './../../assets/img/products/triumph/triumph-thruxtonRS.webp';
import brandImage1 from './../../assets/img/brand/brand-ducati.png';
import brandImage2 from './../../assets/img/brand/brand-suzuki.png';
import brandImage3 from './../../assets/img/brand/brand-bmw.png';
import brandImage4 from './../../assets/img/brand/brand-kawasaki.png';
import brandImage5 from './../../assets/img/brand/brand-harley.png';
import brandImage6 from './../../assets/img/brand/brand-triumph.png';

// Switcher
const phoneMediaQuery = window.matchMedia('(max-width: 600px)');
const showcaseImage1 = phoneMediaQuery.matches
  ? showcaseImage1Small
  : showcaseImage1Reg;
const showcaseImage2 = phoneMediaQuery.matches
  ? showcaseImage2Small
  : showcaseImage2Reg;
const showcaseImage3 = phoneMediaQuery.matches
  ? showcaseImage3Small
  : showcaseImage3Reg;
const showcaseImage4 = phoneMediaQuery.matches
  ? showcaseImage4Small
  : showcaseImage4Reg;
const showcaseImage5 = phoneMediaQuery.matches
  ? showcaseImage5Small
  : showcaseImage5Reg;
const showcaseImage6 = phoneMediaQuery.matches
  ? showcaseImage6Small
  : showcaseImage6Reg;

// DATA
const slides = [
  {
    title: 'Multistrada',
    subtitle: 'V2',
    description: 'Your everyday wonder',
    product: 'Ducati',
    image: showcaseImage1,
    brandImage: brandImage1,
    link: '/ducati',
  },
  {
    title: 'Hayabusa',
    subtitle: '',
    description: 'The ultimate sport',
    product: 'Suzuki',
    image: showcaseImage2,
    brandImage: brandImage2,
    link: '/suzuki',
  },
  {
    title: 'S 1000 RR',
    subtitle: '',
    description: 'The superlative of superlatives',
    product: 'BMW',
    image: showcaseImage3,
    brandImage: brandImage3,
    link: '/bmw',
  },
  {
    title: 'Vulcan',
    subtitle: 'Vaquero',
    description: 'The dark knight',
    product: 'Kawasaki',
    image: showcaseImage4,
    brandImage: brandImage4,
    link: '/kawasaki',
  },
  {
    title: 'Breakout',
    subtitle: '',
    description: 'The classic escape',
    product: 'H - D',
    image: showcaseImage5,
    brandImage: brandImage5,
    link: '/harley',
  },
  {
    title: 'Thruxton',
    subtitle: 'RS',
    description: 'The shadow racer',
    product: 'Triumph',
    image: showcaseImage6,
    brandImage: brandImage6,
    link: '/triumph',
  },
];

// Functions
const useTilt = active => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = e => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
};

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

// Main Slide
const Slide = props => {
  const active = props.offset === 0 ? true : null;
  const ref = useTilt(active);
  const navigate = useNavigate();

  const navigateHandler = () => {
    const link = props.slide.link;
    navigate(link);
    scrollIntoPosition('top');
  };

  return (
    <div
      ref={ref}
      className={classes.slide}
      data-active={active}
      style={{
        '--offset': props.offset,
        '--dir': props.offset === 0 ? 0 : props.offset > 0 ? 1 : -1,
      }}
    >
      <div
        className={classes.slideBackground}
        style={{
          backgroundImage: `url('${props.slide.brandImage}')`,
        }}
      />
      <div
        className={classes.slideContent}
        style={{
          backgroundImage: `url('${props.slide.image}')`,
        }}
      >
        <div className={classes.slideContentInner}>
          <div className={classes.slideContentInnerBox}>
            <h2 className={classes.slideTitle}>{props.slide.title}</h2>
            <h3 className={classes.slideSubtitle}>{props.slide.subtitle}</h3>
            <p className={classes.slideDescription}>
              {props.slide.description}
            </p>
          </div>
          <ButtonCTA
            text={props.slide.product}
            class={classes.buttonCTA}
            onClick={navigateHandler}
            onTouch={navigateHandler}
          />
        </div>
      </div>
    </div>
  );
};

// Slide Container
const SlideHero = props => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  const timer = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => dispatch({ type: 'NEXT' }), 5000 + i * 5000);
    }
  };

  const wheelHandler = e => {
    if (e.nativeEvent.wheelDelta > 0) dispatch({ type: 'NEXT' });

    if (e.nativeEvent.wheelDelta < 0) dispatch({ type: 'PREV' });
  };

  const touchHandler = () => {
    dispatch({ type: 'NEXT' });
  };

  useEffect(() => {
    timer();
  }, []);

  return (
    <div
      className={classes.container}
      onTouchEnd={touchHandler}
      onWheel={wheelHandler}
    >
      <div className={classes.subcontainer}>
        <div className={classes.slides}>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);

            return <Slide slide={slide} offset={offset} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SlideHero;
