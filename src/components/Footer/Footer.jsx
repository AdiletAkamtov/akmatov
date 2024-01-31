import github from "/src/img/icons/gitHub.svg"
import inst from "/src/img/icons/instagram.svg"
import linkedin from "/src/img/icons/linkedIn.svg"
import twitter from "/src/img/icons/twitter.svg"
import vk from "/src/img/icons/vk.svg"

function Footer() {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<div className="footer__wrapper">
						<ul className="social">
							<li className="social__item">
								<a href="#!">
									<img src={vk} alt="Link" />
								</a>
							</li>
							<li className="social__item">
								<a href="#!">
									<img src={inst} alt="Link" />
								</a>
							</li>
							<li className="social__item">
								<a href="#!">
									<img src={twitter} alt="Link" />
								</a>
							</li>
							<li className="social__item">
								<a href="#!">
									<img src={github} alt="Link" />
								</a>
							</li>
							<li className="social__item">
								<a href="#!">
									<img src={linkedin} alt="Link" />
								</a>
							</li>
						</ul>
						<div className="copyright">
							<p>© 2022 frontend-dev.com</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
