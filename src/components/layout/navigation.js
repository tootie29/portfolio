import React from 'react'
import { Link } from 'react-scroll'
import me from './../../img/me.jpeg'

export default function navigation() {
	return (
		<>
			<div className="responsive-nav">
				<i className="fa fa-bars" id="menu-toggle" />
				<div id="menu" className="menu">
					<i className="fa fa-times" id="menu-close" />
					<div className="container">
						<div className="image">
							<img src={me} alt="" />
						</div>
						<div className="author-content">
							<h4>Richard Medina</h4>
							<span>Web Developer</span>
						</div>
						<nav className="main-nav" role="navigation">
							<ul className="main-menu">
								<li>
									<Link to="about" spy={true} smooth={true}>About</Link>
								</li>
								<li>
									<Link to="services" spy={true} smooth={true}>What I’m good at</Link>
								</li>
								<li>
									<Link to="porfolio" spy={true} smooth={true}>My Work</Link>
								</li>
								<li>
									<Link to="contact" spy={true} smooth={true}>Contact Me</Link>
								</li>
							</ul>
						</nav>
						<div className="social-network">
							<ul className="soial-icons">
								<li>
								<a href="https://www.facebook.com/redtoxzero/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a>
								</li>
								<li>
								<a href="https://www.linkedin.com/in/richard-medina-a96326b8/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
								</li>
								<li><a href="whatsapp://send?phone=631966631903" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a></li>
								<li><a href="mailto:chardmedina@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></li>
							</ul>
						</div>
						<div className="copyright-text">
							<p>Copyright 2021 Richard Medina</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}