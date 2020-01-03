import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        {/* Products */}
                        <ProductsContainer />
                        {/*  Message */}
                        <MessageContainer />
                        {/* Cart */}
                        <CartContainer />
                    </div>
                </main>
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;