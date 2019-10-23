import { Component, ReactNode, createElement } from "react";
import { DropDown, getFilteredProps, DropDownProps } from "./components/DropDown";
import { hot } from "react-hot-loader/root";
import { DropdownContainerContainerProps } from "../typings/DropdownContainerProps";

import "./ui/DropdownContainer.scss";

class DropdownContainer extends Component<DropdownContainerContainerProps> {
    constructor(props: DropdownContainerContainerProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render(): ReactNode {
        const filteredProps: DropDownProps = getFilteredProps(this.props);
        const { generalButtonText, style } = this.props;

        if (!generalButtonText) {
            return null;
        }
        const buttonText = generalButtonText.status === "available" ? generalButtonText.value : "";

        return (
            <DropDown {...filteredProps} buttonText={buttonText} splitButtonAction={this.handleClick} style={style} />
        );
    }

    private handleClick(): void {
        if (this.props.splitButtonSplitButtonClicked && this.props.splitButtonSplitButtonClicked.canExecute) {
            this.props.splitButtonSplitButtonClicked.execute();
        }
    }
}

export default hot(DropdownContainer);
