import Project from "/src/components/Project/Project"
function Projects() {
	return (
		<div>
			<main className="section">
				<div className="container">
					<h2 className="title-1">Projects</h2>
					<ul className="projects">
						<Project />
						<Project />
						<Project />
					</ul>
				</div>
			</main>
		</div>
	)
}

export default Projects
