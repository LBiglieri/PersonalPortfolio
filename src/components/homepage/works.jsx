import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./UAI.png"
								alt="Universidad Abierta Interamericana"
								className="work-image"
							/>
							<div className="work-title">Universidad Abierta Interamericana</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./UAI.png"
								alt="Universidad Abierta Interamericana"
								className="work-image"
							/>
							<div className="work-title">Universidad Abierta Interamericana</div>
							<div className="work-subtitle">
								Intern
							</div>
							<div className="work-duration">2018 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./freelance.png"
								alt="Freelance"
								className="work-image"
							/>
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
								IT Professor and Technician
							</div>
							<div className="work-duration">2016 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
