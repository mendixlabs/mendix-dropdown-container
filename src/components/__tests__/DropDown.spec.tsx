import { createElement } from "react";
import { create } from "react-test-renderer";

import { DropDown, DropDownProps } from "../DropDown";

describe("DropDown", () => {
    it("should render the structure correctly", () => {
        const props: DropDownProps = {
            renderClosed: true,
            isDropUp: true,
            isRightAligned: true,
            extraClasses: "",
            startOpen: true,
            autoClose: true,
            buttonSize: "sm",
            buttonType: "danger",
            splitButtonActive: false,
            isWebModeler: true
        };

        const dropDown = create(<DropDown {...props} />);

        expect(dropDown).toMatchSnapshot();
    });
});
