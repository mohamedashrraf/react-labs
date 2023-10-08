import React, { Component } from 'react';
export default class Child extends Component {
    state = {} 
    render() { 

        let { name, price, quantity } = this.props.productDetails;
        return (
            <div className="col-md-4">
                <div className="bg-warning p-2">
                    <h3>Child</h3>
                    <h4>Product Name:{name}</h4>
                    <h4>Product Price:{ price }</h4>
                    <h4>Product Quantity:{quantity}</h4>
                    <button className='btn btn-success' onClick={() => this.props.updateQny(this.props.index)}>Increase Quantity</button>
                    <button className='btn btn-danger' onClick={()=>this.props.deleteProduct(this.props.index)}>delete Product</button>

                </div>
            </div>
        );
    }
}
