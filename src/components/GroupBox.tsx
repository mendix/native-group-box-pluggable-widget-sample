import { Children, Component, ReactNode, createElement, ComponentClass } from "react";
import { Text, View, Platform, TouchableOpacity, TouchableNativeFeedback } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../GroupBox";

export interface GroupBoxProps {
    startCollapsed?: boolean;
    collapsible: boolean;
    collapseIcon?: ReactNode;
    expandIcon?: ReactNode;
    headerCaption?: string;
    style: CustomStyle[];
}

export interface GroupBoxState {
    collapsed: boolean;
}

const defaultStyle: CustomStyle = {
    container: {
        borderColor: "#000000",
        borderRadius: Platform.OS === "ios" ? 4 : 0,
        borderWidth: 1,
        overflow: "hidden"
    },
    header: {
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    headerContent: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold"
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: 15
    }
};

export class GroupBox extends Component<GroupBoxProps, GroupBoxState> {
    private readonly styles = mergeNativeStyles(defaultStyle, this.props.style);
    readonly state: GroupBoxState = {
        collapsed: !!this.props.startCollapsed
    };

    private toggleCollapsed = (): void => {
        this.setState(prevState => ({ collapsed: !prevState.collapsed }));
    };

    private renderIcon = (): ReactNode => {
        const { collapsible, collapseIcon, expandIcon } = this.props;

        if (!collapsible) {
            return null;
        }

        if (this.state.collapsed) {
            return expandIcon ? expandIcon : <Text style={this.styles.headerContent}>+</Text>;
        }

        return collapseIcon ? collapseIcon : <Text style={this.styles.headerContent}>-</Text>;
    };

    private renderHeader = (): ReactNode => {
        const { collapsible, headerCaption } = this.props;

        const view = (
            <View style={this.styles.header}>
                <Text style={this.styles.headerContent}>{headerCaption}</Text>
                {this.renderIcon()}
            </View>
        );

        if (collapsible) {
            const Touchable: ComponentClass<any> = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
            return <Touchable onPress={this.toggleCollapsed}>{view}</Touchable>;
        } else if (headerCaption) {
            return view;
        }

        return null;
    };

    private renderContent = (): ReactNode => {
        if (this.state.collapsed || Children.count(this.props.children) === 0) {
            return null;
        }

        return <View style={this.styles.content}>{this.props.children}</View>;
    };

    render(): ReactNode {
        const renderedHeader = this.renderHeader();
        const renderedContent = this.renderContent();

        if (!renderedHeader && !renderedContent) {
            return null;
        }

        return (
            <View style={this.styles.container}>
                {renderedHeader}
                {renderedContent}
            </View>
        );
    }
}
