import Loader from '../Loader/Loader';
import ProductCard from './ProductCard';
import styles from './ProductCard.module.css';
import useProducts from '../../hooks/useProducts';

function Product() {
  const {products, isLoading} = useProducts();
  
  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} renderAdd={true} />
      ))}
    </div>
  );
}

export default Product;
