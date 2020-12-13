import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import Styles from "./koeln.module.scss";

import "./koeln.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

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
				}, 
				sort: {
					order: ASC, 
					fields: name
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
		<AutoplaySlider
			play={ true }
			interval={ 5000 }
			infinite={ true }
			mobileTouch={ true }
			buttons={ true }
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
		</AutoplaySlider>
	);
};

export default Slideshow;