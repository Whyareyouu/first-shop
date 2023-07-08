import {withLayout} from '../../layouts/Layout';
import {ProductPageComponent} from '../../page-components';
import {useGetProductByIdQuery} from "../../redux/api/store.api";
import {useRouter} from "next/router";
import styles from "../../styles/cart.module.css";

const Product = (): JSX.Element => {
    const router = useRouter();
    const {id} = router.query;
    const productId = typeof id === 'string' ? parseInt(id, 10) : 1;
    const {data: product, isLoading} = useGetProductByIdQuery(productId);
    return (!isLoading && product ? <ProductPageComponent product={product}/> :
        <h1 className={styles.cartEmpty}>Product not found</h1>);
};

export default withLayout(Product);

