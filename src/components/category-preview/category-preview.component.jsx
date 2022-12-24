


import './category-preview.styles.jsx';
import ProductCard from '../product-card/product-card.components';
import { CategoryLink, CategoryPreviewContainer, PreviewContainer } from './category-preview.styles.jsx';

const CategoryPreview = ({title, products}) =>{
    return(
        <CategoryPreviewContainer>
            <h2>
                <CategoryLink to={title}>{title.toUpperCase()}</CategoryLink>
            </h2>
            <PreviewContainer>
                {
                    products
                    .filter((_, idx) => idx < 4)
                    .map((product) =>
                    <ProductCard key={product.id} product={product} /> )
                }
          
            </PreviewContainer>
                

        </CategoryPreviewContainer>
            
       
    )
}

export default CategoryPreview