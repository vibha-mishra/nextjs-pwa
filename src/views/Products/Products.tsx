import ProductCard from '../../components/ProductCard/ProductCard';
import './Products.css'
import productsList from "./productsList";
import { ProductCardType } from './ProductsType';

const ProductsPage: React.FC = () => {
  return (
    <div className="container">
        <div className="productsContainer">
          {productsList?.map((product: ProductCardType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </div>
  );
}

export default ProductsPage;