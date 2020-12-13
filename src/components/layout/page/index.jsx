import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";


const Page = ({
	subTitle,
	title,
	description,
	location,
	siteUrl,
	children
}) => {
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
		description: defaultDescription,
		location: defaultLocation,
		siteUrl: defaultSiteUrl,
		title: defaultTitle,
	} = result.site.siteMetadata;

	return (
		<>
			<Helmet
				title={ `${ subTitle } | ${ title || defaultTitle }` }
				meta={ [
					{
						property: `description`,
						content: description || defaultDescription,
					}, {
						property: `author`,
						content: author,
					},

					{
						property: `og:title`,
						content: `${ subTitle } | ${ title || defaultTitle }`,
					}, {
						property: `og:location`,
						content: location || defaultLocation,
					}, {
						property: `og:description`,
						content: description || defaultDescription,
					}, {
						property: `og:type`,
						content: `website`,
					}, {
						property: `og:image`,
						content: `${ siteUrl || defaultSiteUrl }/static/images/preview.png`,
					},
				] }>
			</Helmet>

			{ children }
		</>
	);
};

export default Page;