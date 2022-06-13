import { useState, useContext, useRef } from 'react';
import BackContext from '../../Contexts/BackContext';

const empty = {
    title: '',
    price: '',
    code: '',
    description: '',
};

function ProductCreate() {
    const [inputs, setInputs] = useState(empty);

    const button = useRef();

    const { setCreateProductData } = useContext(BackContext);

    const handleInputs = (e, input) => {
        setInputs((i) => ({ ...i, [input]: e.target.value }));
    };

    const create = () => {
        setCreateProductData({ ...inputs, price: parseFloat(inputs.price) });
        setInputs(empty);
        button.current.blur();
    };

    return (
        <div className="col-12">
            <div className="card mt-4">
                <div className="card-header">
                    <h2>Naujas produktas</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="fu gray ">
                                        Pavadinimas:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={inputs.title}
                                        onChange={(e) =>
                                            handleInputs(e, 'title')
                                        }
                                    ></input>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label className="fu gray ">Kaina:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={inputs.price}
                                        onChange={(e) =>
                                            handleInputs(e, 'price')
                                        }
                                    ></input>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="form-group">
                                    <label className="fu gray ">Kodas:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={inputs.code}
                                        onChange={(e) =>
                                            handleInputs(e, 'code')
                                        }
                                    ></input>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="fu gray ">
                                        Aprasymas:
                                    </label>
                                    <textarea
                                        className="form-control"
                                        value={inputs.description}
                                        onChange={(e) =>
                                            handleInputs(e, 'description')
                                        }
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="product-line__buttons">
                                    <button
                                        type="button"
                                        ref={button}
                                        className="btn btn-outline-dark mr-2 fu up"
                                        onClick={create}
                                    >
                                        Sukurti
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCreate;
