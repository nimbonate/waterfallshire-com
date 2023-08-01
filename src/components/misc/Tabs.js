import React, { useState } from "react";
import PropTypes from "prop-types";
import { TabContent, TabItem, TabList } from "../../utils/styles/misc";

export function Tabs(props) {
    const [activeTab, setActiveTab] = useState(props.children[0].props.label);

    return (
        <>
            <TabList>
                {props.children.map((child) => {
                    return (
                        <TabItem key={child.props.label} isActiveTab={activeTab === child.props.label} onClick={() => setActiveTab(child.props.label)}>
                            {child.props.label}
                        </TabItem>
                    );
                })}
            </TabList>
            <TabContent>
                {props.children.map((child) => {
                    if (child.props.label !== activeTab){
                        return undefined;
                    } else {
                        return child.props.children;
                    } 
                })}
            </TabContent>
        </>
    );
}

Tabs.propType = {
    children: PropTypes.instanceOf(Array).isRequired,
}