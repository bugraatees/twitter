import Content from "../tab/content";
import Item from "../tab/item";
import Items from "../tab/items";
import PropTypes from "prop-types";
import {TabContext} from "../../components/tab/context";
import { useState, useEffect } from "react";
 
export default function Tab({children, activeTab}) {

	const [active, setActive] = useState(activeTab)

	useEffect(() => {
		setActive(activeTab)
	}, [activeTab])

	const contents = children.filter(c => c.type === Content)

	const items = children.filter(c => c.type === Items)
	const content = contents.find(c => c.props.id === active)

	const data = {
		active,
		setActive
	}

	return (
		<TabContext.Provider value={data}>
			<div></div>
			{items}
			{content}
		</TabContext.Provider>
	)
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content

Tab.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.node
	),
	activeTab: PropTypes.string.isRequired
}
