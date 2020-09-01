import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Heading from "react-bulma-components/lib/components/heading/heading";
import Content from "react-bulma-components/lib/components/content/content";
import { cn } from "reusable-components/helper";

import Styles from "./index.module.scss";


export default () =>
	<StaticQuery
		query={ graphql`
			query {
				file(relativePath: {eq: "assets/video/teaser/MASTER.mp4"}) {
					videoVP9 {
						path
						ext
					}
					
					videoH264 {
						path
						ext
					}
					
					videoH265 {
						path
						ext					
					}
				}
			}` }
		render={ Header }
	/>;

const Header = ({ file }) => {
	const [isVideoPlaying, setPlayState] = useState(false);

	return (
		<div className={ cn(
			Styles.header,
			isVideoPlaying && Styles.videoPlaying
		) }>
			<video
				onPlay={ () => setPlayState(true) }
				className={ Styles.video }
				autoPlay
				loop
				muted>

				{ Object.keys(file).map(key =>
					<Source
						key={ key }
						{ ...file[key] }
					/>
				) }

			</video>

			<div className={ Styles.intro }>
				<Heading
					className={ Styles.heading }
					textColor={ "white" }
					textSize={ 1 }
					renderAs={ "h1" }
					textAlignment={ "centered" }>

					<SpanGenerator
						string={ "Go ’n’ Grow!" }
					/>

				</Heading>

				<Content
					renderAs={ "h2" }
					textSize={ 3 }
					className={ Styles.description }
					textAlignment={ "centered" }
					textColor={ "white" }
					italic>

					<span>Samen pflanzen. Kiez verschönern.</span> <br/>
					<span>Hungrige Insekten retten.</span> <br/>
					<span>Es ist sooo einfach!</span>

				</Content>
			</div>
		</div>
	);
};

const Source = ({ path, ext }) => {
	return (
		<source
			src={ path }
			type={ `video/${ ext.replace(".", "") }` }
		/>
	);
}

const SpanGenerator = ({ string }) =>
	string.split("").map((letter, index) => (
		<span key={ `${ index }-${ letter }` }>{ letter }</span>
	)
);