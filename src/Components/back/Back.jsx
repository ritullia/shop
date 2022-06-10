import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBar from './NavBar';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Back() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios
            .get('http://localhost:3003/admin/products')
            .then((res) => setProducts(res.data));
    }, []);
    return (
        <BackContext.Provider value={{ products }}>
            <div class="container">
                <div class="row">
                    <NavBar></NavBar>
                    <div className="col-5">
                        <ProductsList></ProductsList>
                    </div>
                </div>
            </div>
        </BackContext.Provider>
    );
}

export default Back;
