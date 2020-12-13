import { graphql, StaticQuery } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

import Heading from "react-bulma-components/lib/components/heading/heading";
import Content from "react-bulma-components/lib/components/content/content";
import { cn } from "reusable-components/dist/helper";

import Icon from "../../ui/atom/icon";
import Styles from "./index.module.scss";


export default (props) =>
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
		render={ (data) => <Header { ...data } { ...props } /> }
	/>;


class Header extends React.Component {
	static propTypes = {
		file: PropTypes.object.isRequired,
		title: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired
	};

	static defaultProps = {
		title: "Go ’n’ Grow!",
		location: "Potsdam"
	};

	videoRef = React.createRef();

	state = {
		isVideoPlaying: false
	}

	componentDidMount () {
		if (
			this.videoRef.current &&
			!this.videoRef.current.paused
		) {
			this.onPlayVideo();
		}
	}

	onPlayVideo () {
		this.setState({
			...this.state,
			isVideoPlaying: true
		});
	}

	render () {
		const { file } = this.props;

		return (
			<div className={ cn(
				Styles.header,
				this.state.isVideoPlaying && Styles.videoPlaying
			) }>
				<video
					ref={ this.videoRef }
					onPlay={ this.onPlayVideo.bind(this) }
					onLoad={ this.onPlayVideo.bind(this) }
					className={ Styles.video }
					autoPlay
					loop
					playsInline
					muted>

					{ Object.keys(file).map(key =>
						<Source
							key={ key }
							{ ...file[key] }
						/>
					) }

				</video>

				<div className={ Styles.intro }>
					<p className={ Styles.locationContainer }>
						<span className={ Styles.location }>
							<Icon className={ Styles.icon } icon={ "location" } />
							{ this.props.location }
						</span>
					</p>

					<Heading
						className={ Styles.heading }
						textColor={ "white" }
						textSize={ 1 }
						renderAs={ "h1" }
						textAlignment={ "centered" }>

						<SpanGenerator
							string={ this.props.title }
						/>

					</Heading>

					<Content
						renderAs={ "h2" }
						textSize={ 3 }
						className={ Styles.description }
						textAlignment={ "centered" }
						textColor={ "white" }
						italic>

						{ this.props.children ?
							this.props.children:
							<>
								<span>Samen pflanzen. Kiez verschönern.</span> <br/>
								<span>Hungrige Insekten retten.</span> <br/>
								<span>Es ist sooo einfach!</span>
							</>
						}

					</Content>
				</div>
			</div>
		);
	}
}


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