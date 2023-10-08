import React, { Component, Fragment } from 'react';
import Child from '../Child/Child';
export default class Parent extends Component {
    state = {
        products: [
            {
                id: 1,
                name: "prod1",
                price: 111,
                quantity: 1,
            },
            {
                id: 2,
                name: "prod2",
                price: 111,
                quantity: 1,
            },
            {
                id: 3,
                name: "prod3",
                price: 111,
                quantity: 1,
            },
            {
                id: 4,
                name: "prod4",
                price: 400,
                quantity: 1,
            },
            {
                id: 5,
                name: "prod5",
                price: 500,
                quantity: 1,
            },
        ],
     
    };
    //لازم تتعمل arrow function عشان يشوف اللي جوا state عشان الاررو بتشوف مين السكوب بتاعه وبتاخد ال this منه انما الفانكشن العادية بتكريت لنفسها سكوب جديد لو هي مش جوا ال this وبتبقي ال this undefined
    updateQny = (index) => {
        let products = [...this.state.products];
        products[index].quantity++;
        this.setState({ products });
    }

    addProduct = () => {
        let addedProduct = {
            id: this.state.products.length + 1,
            productName: "new Product",
            price: 10000,
            quantity: 1,
        };
        let products = [...this.state.products];
        products = [...products, addedProduct];
        this.setState({ products });
    }

    deleteProduct = (index) => {
        let products = [...this.state.products];
        products.splice(index, 1);
        this.setState({ products });
    }
    localStorage() {
        localStorage.setItem("products", JSON.stringify(this.state.products));
    }
    render() { 
        return (
            <Fragment>
                <div className="bg-secondary p-4">
                    <h3>Parent</h3>
                    <button className='btn btn-primary' onClick={this.addProduct}>Add Product</button>
                    <div className="row gy-3">
                        {this.state.products.map((product, index) => <Child key={index} productDetails={product} index={index} updateQny={this.updateQny} deleteProduct={this.deleteProduct} localStorage={this.localStorage()}/>)} 
                    </div>
                </div>
            </Fragment>
        );
}
}
//map تعمل for loop
//update state نغير في منتج معين لما ندوس علي زراره
//1- copy state تاخد كوبي في الvertual dom  2- action  3-set state

//vertual dom الرياكت تاخد كوبي من الكود جواها عشان اي تغيير يحصل فيها وتقارنه بالكود الاصلي وتغير اللي اختلف بس من غير ما تغير الكود كله وده بيديها سرعة لازم عشان تشتغل صح كل عنصر ياخد id / key

