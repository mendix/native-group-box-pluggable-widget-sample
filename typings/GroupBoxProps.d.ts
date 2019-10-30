/**
 * This file was generated from GroupBox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { DynamicValue, NativeIcon } from "mendix";
import { ReactNode } from "react";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export type CollapsibleEnum = "no" | "yesStartExpanded" | "yesStartCollapsed";

export interface GroupBoxProps<Style> extends CommonProps<Style> {
    content?: ReactNode;
    collapsible: CollapsibleEnum;
    headerCaption?: string;
    expandIcon?: DynamicValue<NativeIcon>;
    collapseIcon?: DynamicValue<NativeIcon>;
}
