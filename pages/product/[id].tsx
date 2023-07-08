import {withLayout} from '../../layouts/Layout';
import {ProductPageComponent} from '../../page-components';
import {useGetProductByIdQuery} from "../../redux/api/store.api";
import {useRouter} from "next/router";
import {Grid} from 'react-loader-spinner'
import styles from '../../styles/cart.module.css'


const Product = (): JSX.Element => {
    const router = useRouter();
    const {id} = router.query;
    const productId = typeof id === 'string' ? parseInt(id, 10) : 1;
    const {data: product, isLoading} = useGetProductByIdQuery(productId);

    if (!isLoading && product) {
        return <ProductPageComponent product={product}/>
    }
    if(!isLoading && !product) {
        return <h1 className={styles.cartEmpty}>Product not found</h1>
    }
    return (
        <div className={styles.loaderContainer}>
            <Grid
                height="150"
                width="150"
                color="#ff6633"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={isLoading}
            />
        </div>)
};

export default withLayout(Product);

