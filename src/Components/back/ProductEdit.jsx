import { useState, useContext } from 'react';
import BackContext from '../../Contexts/BackContext';

const empty = {
    title: '',
    price: '',
    code: '',
    description: '',
};

function ProductEdit() {
    const [inputs, setInputs] = useState(empty);

    const { setCreateProductData } = useContext(BackContext);

    const handleInputs = (e, input) => {
        setInputs((i) => ({ ...i, [input]: e.target.value }));
    };

    const edit = () => {
        setCreateProductData({ ...inputs, price: parseFloat(inputs.price) });
        setInputs(empty);
    };

    return (
        <div className="modal" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Redaguoti produktą</h2>
                        <button type="button" className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="fu ">
                                                    Pavadinimas
                                                </label>
                                                <input
                                                    type="email"
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
                                                <label className="fu ">
                                                    Kaina
                                                </label>
                                                <input
                                                    type="email"
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
                                                <label className="fu ">
                                                    Kodas
                                                </label>
                                                <input
                                                    type="email"
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
                                                <label className="fu ">
                                                    Aprasymas
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    value={inputs.description}
                                                    onChange={(e) =>
                                                        handleInputs(
                                                            e,
                                                            'description'
                                                        )
                                                    }
                                                    placeholder="Required example textarea"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button btn-outline-secondary fu up"
                            className="btn btn-secondary"
                        >
                            Uždaryti
                        </button>
                        <button
                            type="button btn-outline-primary fu up"
                            className="btn btn-primary"
                        >
                            Išsaugoti
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductEdit;
