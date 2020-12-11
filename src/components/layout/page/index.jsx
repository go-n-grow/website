import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";


const Page = ({ subTitle, children }) => {
	const result = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
					description
					location
					siteUrl
					title
				}
			}
		}
	`);

	const {
		author,
		description,
		location,
		siteUrl,
		title,
	} = result.site.siteMetadata;

	return (
		<>
			<Helmet
				title={ `${ subTitle } | ${ title }` }
				meta={ [
					{
						property: `description`,
						content: description,
					}, {
						property: `author`,
						content: author,
					},

					{
						property: `og:title`,
						content: `${ subTitle } | ${ title }`,
					}, {
						property: `og:location`,
						content: location,
					}, {
						property: `og:description`,
						content: description,
					}, {
						property: `og:type`,
						content: `website`,
					}, {
						property: `og:image`,
						content: `${ siteUrl }/static/images/preview.png`,
					},
				] }>
			</Helmet>

			{ children }
		</>
	);
};

export default Page;