function ProductLine(product) {
    return (
        <li className="list-group-item">
            <div className="product-line">
                <div className="product-line_content">
                    <div className="product-line_content_top">
                        <div className="product-line_content_title">
                            {product.title}
                        </div>
                        <div className="product-line_content_price">
                            {product.price}
                        </div>
                        <div className="product-line_content_code">
                            {product.code}
                        </div>
                        <div className="product-line_content_bottom">
                            {product.description}
                        </div>
                    </div>
                </div>
                <div className="product-line_buttons"></div>
            </div>
        </li>
    );
}

export default ProductLine;
