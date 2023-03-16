/**
 * This file was generated from GroupBox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, ReactNode } from "react";
import { DynamicValue, NativeIcon } from "mendix";

export type CollapsibleEnum = "no" | "yesStartExpanded" | "yesStartCollapsed";

export interface GroupBoxProps<Style> {
    name: string;
    style: Style[];
    content?: ReactNode;
    collapsible: CollapsibleEnum;
    headerCaption: string;
    expandIcon?: DynamicValue<NativeIcon>;
    collapseIcon?: DynamicValue<NativeIcon>;
}

export interface GroupBoxPreviewProps {
    class: string;
    style: string;
    content: { widgetCount: number; renderer: ComponentType };
    collapsible: CollapsibleEnum;
    headerCaption: string;
    expandIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    collapseIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
}
