import { ReactNode, createElement } from "react";
import { DropDown, getFilteredProps, DropDownProps } from "./components/DropDown";
import { hot } from "react-hot-loader/root";
import { DropdownContainerContainerProps } from "../typings/DropdownContainerProps";

import "./ui/DropdownContainer.scss";

const DropdownContainer = (props: DropdownContainerContainerProps): ReactNode => {
    const filteredProps: DropDownProps = getFilteredProps(props);
    const { generalButtonText, style, splitButtonSplitButtonClicked } = props;

    const handleClick = (): void => {
        if (splitButtonSplitButtonClicked && splitButtonSplitButtonClicked.canExecute) {
            splitButtonSplitButtonClicked.execute();
        }
    };

    if (!generalButtonText) {
        return null;
    }
    const buttonText = generalButtonText.status === "available" ? generalButtonText.value : "";

    return <DropDown {...filteredProps} buttonText={buttonText} splitButtonAction={handleClick} style={style} />;
};

export default hot(DropdownContainer);
