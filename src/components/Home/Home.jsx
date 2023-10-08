import React, { Component, Fragment } from 'react';

export default class Home extends Component{
    state = {
        userName: "Mohamed",
    }

    sayHi(x) {
        console.log("Hi",x);
    }

    //binding
    //sayHi نستدعيها من غير () عشان مينفذهاش غير لما ادوس علي الزرار لو عايزها ترجع براميتير اعمل arrow function
    //return لازم ترجع عنصر واحد div او fragment
    //fragment اعملها ريتيرن بدل الديف عشان مبتاخدش مكان في الصفحة هي عبارة عن حاوية او نحط <>
    render() {
        return ( 
            <Fragment>
                <h2 id='hi'>Hi from Home {this.state.userName}</h2> 
                <button onClick={()=>this.sayHi("mo")}>hello</button>
            </Fragment>
            
        );
    }
}
