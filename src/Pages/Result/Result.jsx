import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import ProductCard from '../../components/Product/ProductCard';
import styles from './Result.module.css';
import useProducts from '../../hooks/useProducts';

function Result() {
  const { categoryName } = useParams();
  const {products: results, isLoading} = useProducts(`category/${categoryName}`)
  
  return (
    <Layout>
      <div className={styles.resultPage}>
        <h1>Results</h1>
        <p>Category / {categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.productsContainer}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
                renderDesc={false}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Result;
