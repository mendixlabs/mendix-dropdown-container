/**
 * This file was generated from DropdownContainer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { ActionValue, DynamicValue } from "mendix";
import { ReactNode } from "react";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export type AppearanceButtonSizeEnum = "lg" | "default" | "sm" | "xs";

export type AppearanceButtonTypeEnum = "default" | "primary" | "success" | "info" | "warning" | "danger" | "link";

export interface DropdownContainerContainerProps extends CommonProps {
    generalButtonText?: DynamicValue<string>;
    generalButtonGlyphicon?: string;
    generalIsDropUp: boolean;
    generalIsRightAligned: boolean;
    generalStartOpen: boolean;
    generalAutoClose: boolean;
    content?: ReactNode;
    appearanceButtonSize: AppearanceButtonSizeEnum;
    appearanceButtonType: AppearanceButtonTypeEnum;
    splitButtonSplitButtonActive: boolean;
    splitButtonSplitButtonClicked?: ActionValue;
}

export interface DropdownContainerPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    generalButtonText?: string;
    generalButtonGlyphicon?: string;
    generalIsDropUp: boolean;
    generalIsRightAligned: boolean;
    generalStartOpen: boolean;
    generalAutoClose: boolean;
    content?: ReactNode;
    appearanceButtonSize: AppearanceButtonSizeEnum;
    appearanceButtonType: AppearanceButtonTypeEnum;
    splitButtonSplitButtonActive: boolean;
    splitButtonSplitButtonClicked?: ActionPreview;
}

export interface VisibilityMap {
    generalButtonText: boolean;
    generalButtonGlyphicon: boolean;
    generalIsDropUp: boolean;
    generalIsRightAligned: boolean;
    generalStartOpen: boolean;
    generalAutoClose: boolean;
    content: boolean;
    appearanceButtonSize: boolean;
    appearanceButtonType: boolean;
    splitButtonSplitButtonActive: boolean;
    splitButtonSplitButtonClicked: boolean;
}
