import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import logo from './logo.svg';
import Navigation from './components/layout/navigation'
import About from './components/layout/about'
import Services from './components/layout/services'
import Work from './components/layout/work'
import Contact from './components/layout/contact'

import './App.css';

class App extends Component {

    componentDidMount() {
        // let styles = [
        //     { src: '/portfolio/assets/css/lightbox.css' },
        //     { src: '/portfolio/assets/css/owl.css' },
        //     { src: '/portfolio/assets/css/templatemo-style.css' },
        //     { src: '/portfolio/assets/css/fontawesome.css' },
        //     { src: '/portfolio/vendor/bootstrap/css/bootstrap.min.css' },
        // ]

        // styles.map(item => {
        //     const style = document.createElement('link')
        //     const head = document.head
        //     style.rel = 'stylesheet'
        //     style.type = 'text/css'
        //     style.href = item.src
        //     head.insertBefore(style, head.childNodes[0]);
        //     //document.head.appendChild();
        // })

        // let scripts = [
        //     { src: '/portfolio/vendor/bootstrap/js/bootstrap.bundle.min.js' },
        //     { src: '/portfolio/assets/js/isotope.min.js' },
        //     { src: '/portfolio/assets/js/owl-carousel.js' },
        //     { src: '/portfolio/assets/js/lightbox.js' },
        //     { src: '/portfolio/assets/js/custom.js' },
        // ]

        // scripts.map(item => {
        //     const script = document.createElement('script')
        //     script.type = 'text/jsx'
        //     script.src = item.src
        //     script.async = SVGComponentTransferFunctionElement
        //     document.body.appendChild(script)
        // });

    }

    render() {
        return (
            <div className="App">
                <div id="page-wrapper">
                    <Helmet >
                        <title>Richard Medina</title>
                        
                    </Helmet>
                    <Navigation />
                    <About />
                    <Services />
                    <Work />
                    <Contact />
                </div>
            </div>
        );
    }
}

export default App;