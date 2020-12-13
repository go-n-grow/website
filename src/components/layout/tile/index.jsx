import React from "react";
import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";
import Content from "react-bulma-components/lib/components/content/content";
import Heading from "react-bulma-components/lib/components/heading/heading";

import Asset from "../../ui/atom/asset";
import Styles from "./index.module.scss";


const Tile = ({ title, graphic, hasCustomContent = false, children }) =>
	<Columns
		className={ Styles.tile }
		centered
		marginless>

		{ hasCustomContent ?

			children:

			<>
				<Column narrow>
					<Asset
						className={ Styles.icon }
						graphic={ graphic }
					/>
				</Column>

				<Column
					className={ Styles.content }
					size={ 8 }>

					<Heading
						dangerouslySetInnerHTML={ { __html: title } }
					/>

					<Content>
						{ children }
					</Content>

				</Column>
			</>

		}
	</Columns>;

export default Tile;