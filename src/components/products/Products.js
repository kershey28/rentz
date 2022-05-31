import classes from './Products.module.css';

import Product from './Product';

const Products = props => {
  const productsList = props.products.map(product => (
    <Product
      id={product.id}
      key={product.id}
      make={product.make}
      model={product.model}
      displacement={product.displacement}
      rate={product.rate}
      image={product.image}
      price={product.price}
      disabled={product.disabled}
      onShowModal={props.onShowModal}
    />
  ));

  return (
    <div className={`${classes.container} ${props.class}`}>
      <ul className={classes.content}>{productsList}</ul>
    </div>
  );
};

export default Products;
