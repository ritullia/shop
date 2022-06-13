import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import ProductCreate from './ProductCreate';
import axios from 'axios';

function Back() {
    const [products, setProducts] = useState(null);
    const [lastProductUpdate, setLastProductUpdate] = useState(Date.now());

    const [createProductData, setCreateProductData] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3003/admin/products')
            .then((res) => setProducts(res.data));
    }, [lastProductUpdate]);

    useEffect(() => {
        if (createProductData === null) return;
        axios
            .post('http://localhost:3003/admin/products', createProductData)
            .then((res) => setLastProductUpdate(Date.now()));
    }, [createProductData]);

    return (
        <BackContext.Provider value={{ products, setCreateProductData }}>
            <div className="container">
                <div className="row">
                    <NavBar></NavBar>
                    <div className="col-5">
                        <ProductCreate></ProductCreate>
                    </div>
                    <ProductsList></ProductsList>
                </div>
            </div>
        </BackContext.Provider>
    );
}

export default Back;
