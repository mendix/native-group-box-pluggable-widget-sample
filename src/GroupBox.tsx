import { Component, ReactNode, createElement } from "react";
import { ViewStyle, TextStyle } from "react-native";

import { DynamicValue, NativeIcon, ValueStatus } from "mendix";
import { Icon } from "mendix/components/native/Icon";

import { GroupBox as WrappedGroupBox, GroupBoxProps as WrappedGroupBoxProps } from "./components/GroupBox";
import { GroupBoxProps } from "../typings/GroupBoxProps";
import { Style, flattenStyles } from "./utils/common";

export interface CustomStyle extends Style {
    container: ViewStyle;
    header: ViewStyle;
    headerContent: TextStyle;
    content: ViewStyle;
}

const defaultStyle: CustomStyle = {
    container: {},
    header: {},
    headerContent: {
        color: "#FFF",
        fontSize: 16
    },
    content: {}
};

const defaultCollapseIconGlyph = "glyphicon-minus";
const defaultExpandIconGlyph = "glyphicon-plus";

export class GroupBox extends Component<GroupBoxProps<CustomStyle>> {
    private readonly styles = flattenStyles(defaultStyle, this.props.style);

    render(): ReactNode {
        const { collapsible, collapseIcon, expandIcon, content, headerCaption, style } = this.props;

        const isCollapsible = collapsible !== "no";

        const props: WrappedGroupBoxProps = {
            collapsible: isCollapsible,
            headerCaption,
            collapseIcon: this.renderIcon(collapseIcon, defaultCollapseIconGlyph),
            expandIcon: this.renderIcon(expandIcon, defaultExpandIconGlyph),
            style
        };

        if (collapsible) {
            props.startCollapsed = collapsible === "yesStartCollapsed";
        }

        return <WrappedGroupBox {...props}>{content}</WrappedGroupBox>;
    }

    private renderIcon = (toBeRenderedIcon: DynamicValue<NativeIcon> | undefined, glyph: string) => {
        const nativeIcon: NativeIcon =
            toBeRenderedIcon && toBeRenderedIcon.status === ValueStatus.Available
                ? toBeRenderedIcon.value
                : { type: "glyph", iconClass: glyph };

        return (
            <Icon color={this.styles.headerContent.color} icon={nativeIcon} size={this.styles.headerContent.fontSize} />
        );
    };
}
