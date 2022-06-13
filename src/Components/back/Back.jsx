import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import ProductCreate from './ProductCreate';
import Message from './Message';
import axios from 'axios';
import ProductEdit from './ProductEdit';

function Back() {
    const [products, setProducts] = useState(null);
    const [lastProductUpdate, setLastProductUpdate] = useState(Date.now());
    const [message, setMessage] = useState({ show: false });

    const [modalProductData, setModalProductData] = useState(null);

    const [createProductData, setCreateProductData] = useState(null);
    const [deleteProductData, setDeleteProductData] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3003/admin/products')
            .then((res) => setProducts(res.data));
    }, [lastProductUpdate]);

    useEffect(() => {
        if (createProductData === null) return;
        axios
            .post('http://localhost:3003/admin/products', createProductData)
            .then((_) => {
                setLastProductUpdate(Date.now());
                showMessage('success', 'Naujas produktas pridetas');
            });
    }, [createProductData]);

    useEffect(() => {
        if (deleteProductData === null) return;
        axios
            .delete(
                'http://localhost:3003/admin/products/' + deleteProductData.id
            )
            .then((_) => {
                setLastProductUpdate(Date.now());
                showMessage('success', 'Produktas sekmingai istrintas');
            });
    }, [deleteProductData]);

    const showMessage = (type, text) => {
        setMessage({
            type,
            text,
            show: true,
        });
        setInterval(() => setMessage({ show: false }), 35000);
    };

    return (
        <BackContext.Provider
            value={{
                products,
                setCreateProductData,
                message,
                setDeleteProductData,
                modalProductData,
                setModalProductData,
            }}
        >
            <div className="container">
                <div className="row">
                    <NavBar></NavBar>
                    <div className="col-5">
                        <ProductCreate></ProductCreate>
                    </div>
                    <ProductsList></ProductsList>
                </div>
            </div>
            <Message></Message>
            <ProductEdit></ProductEdit>
        </BackContext.Provider>
    );
}

export default Back;
