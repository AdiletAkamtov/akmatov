import "./style.css"
import project01 from "/src/img/projects/01.jpg"

function Project() {
	return (
		<div>
			<li className="project">
				<a href="./project-page.html">
					<img src={project01} alt="Project img" className="project__img" />
					<h3 className="project__title">Video service</h3>
				</a>
			</li>
		</div>
	)
}

export default Project
