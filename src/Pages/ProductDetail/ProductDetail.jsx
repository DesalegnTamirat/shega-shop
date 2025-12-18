import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import ProductCard from '../../components/Product/ProductCard';
import useProducts from '../../hooks/useProducts';

function ProductDetail() {
  const { productId } = useParams();
  const {products: product, isLoading} = useProducts(productId);

  if (!product && isLoading) return <Loader />;

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          key={product.id}
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
