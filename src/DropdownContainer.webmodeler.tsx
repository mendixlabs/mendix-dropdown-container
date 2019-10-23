import { Component, ReactNode, createElement, Fragment } from "react";
import { DropDown, DropDownProps, getFilteredProps } from "./components/DropDown";
import { DropdownContainerPreviewProps, VisibilityMap } from "../typings/DropdownContainerProps";

declare function require(name: string): string;

export class preview extends Component<DropdownContainerPreviewProps> {
    render(): ReactNode {
        const { generalButtonText } = this.props;
        const filteredProps: DropDownProps = getFilteredProps(this.props, true);

        return (
            <Fragment>
                <DropDown {...filteredProps} buttonText={generalButtonText} />
                <span className="dropdown-studio-disabled">
                    Note: contents of Dropdown Container can only be edited in Mendix Studio Pro
                </span>
            </Fragment>
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/DropdownContainer.scss");
}

export function getVisibleProperties(
    props: DropdownContainerPreviewProps,
    visibilityMap: VisibilityMap
): VisibilityMap {
    visibilityMap.splitButtonSplitButtonClicked = props.splitButtonSplitButtonActive;

    return visibilityMap;
}
