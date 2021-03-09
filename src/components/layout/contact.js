import emailjs from 'emailjs-com'
import React from 'react'
import{ init } from 'emailjs-com';
init("user_Y3xwXqqmcy4K5iFGWSS83");

export default function contact() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_loru1r7', 'template_1ss8od5', e.target, 'user_Y3xwXqqmcy4K5iFGWSS83')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset()
	}

	return (
		<>
			<section className="section contact-me" id="contact">
				<div className="container">
					<div className="section-heading">
						<h2>Contact Me</h2>
					</div>
					<div className="row">
						<div className="right-content">
							<div className="container">
								<form id="contact" method="post" onSubmit={sendEmail}>
									<div className="row">
										<div className="col-md-6">
										<fieldset>
											<input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
										</fieldset>
										</div>
										<div className="col-md-6">
										<fieldset>
											<input name="email" type="text" className="form-control" id="email" placeholder="Your email..." required />
										</fieldset>
										</div>
										<div className="col-md-12">
										<fieldset>
											<input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required />
										</fieldset>
										</div>
										<div className="col-md-12">
										<fieldset>
											<textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required defaultValue="" />
										</fieldset>
										</div>
										<div className="col-md-12">
										<fieldset>
											<button type="submit" id="form-submit" className="button">
											Send Message
											</button>
										</fieldset>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}