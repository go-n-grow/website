import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import Styles from "./koeln.module.scss";
import "./koeln.scss";


const Slideshow = () => {
	const result = useStaticQuery(graphql`
		query {
			allFile(
				filter: {
					extension: {
						regex: "/(png|jpg|jpeg)/"
					},
					relativePath: {
						regex: "/^assets\\/images\\/growkit\//"
					}
				}
			) {
				edges {
					node {
						relativePath

						childImageSharp {
							fluid {
								aspectRatio
								base64
								originalImg
								originalName
								presentationHeight
								presentationWidth
								sizes
								src
								srcSet
								srcSetWebp
								srcWebp
								tracedSVG
							}
						}
					}
				}
			}
		}
	`);

	return (
		<AwesomeSlider
			className={ Styles.slideshow }>
			{ result.allFile.edges.map(({ node }) =>
				<div
					key={ node.relativePath }
					className={ Styles.slide }>
					<GatsbyImage
						fluid={ node.childImageSharp.fluid }
						className={ Styles.image }
					/>
				</div>,
			) }
		</AwesomeSlider>
	);
};

export default Slideshow;