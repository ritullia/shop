import { useContext } from 'react';
import BackContext from '../../Contexts/BackContext';
import ProductLine from './ProductLine';
import Loader from './Loader';
import ProductLineEmpty from './ProductLineEmpty';

function ProductsList() {
    const { products } = useContext(BackContext);
    return (
        <div className="col-7">
            <div className="card">
                <div className="card-header">
                    <h1>Produktu sarasas</h1>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {products === null ? (
                            <Loader />
                        ) : products.length ? (
                            products.map((p) => (
                                <ProductLine
                                    key={p.id}
                                    product={p}
                                ></ProductLine>
                            ))
                        ) : (
                            <ProductLineEmpty></ProductLineEmpty>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductsList;
