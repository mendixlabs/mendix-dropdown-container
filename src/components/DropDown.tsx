import { Component, ReactNode, createElement } from "react";
import { findDOMNode } from "react-dom";
import classNames from "classnames";
import onClickOutside from "react-onclickoutside";
import $ from "cash-dom";

import {
    AppearanceButtonSizeEnum,
    AppearanceButtonTypeEnum,
    DropdownContainerContainerProps,
    DropdownContainerPreviewProps
} from "../../typings/DropdownContainerProps";

export interface DropDownProps {
    buttonText?: string;
    glyphicon?: string;
    isDropUp: boolean;
    isRightAligned: boolean;
    startOpen: boolean;
    autoClose: boolean;
    content?: ReactNode;
    buttonSize: AppearanceButtonSizeEnum;
    buttonType: AppearanceButtonTypeEnum;
    splitButtonActive: boolean;
    isWebModeler: boolean;
    extraClasses: string;
    style?: object;
    splitButtonAction?: () => void;
}

interface DropDownState {
    open: boolean;
}

export class DropDownInternal extends Component<DropDownProps, DropDownState> {
    domNode: HTMLElement | null = null;

    constructor(props: DropDownProps) {
        super(props);

        this.state = {
            open: props.startOpen
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleAction = this.handleAction.bind(this);
    }

    render(): ReactNode {
        const { isDropUp, extraClasses, style } = this.props;
        const { open } = this.state;

        return (
            <div
                className={classNames("dropdown", "btn-group", { open, dropup: isDropUp }, extraClasses)}
                style={style}
            >
                {this.renderSplitButton()}
                {this.renderDropDownButton()}
                {this.renderMenu()}
            </div>
        );
    }

    componentDidUpdate(): void {
        const domNode = findDOMNode(this);

        if (domNode instanceof Element) {
            this.domNode = domNode as HTMLElement;
            this.doRegisterClicks();
        }
    }

    componentDidMount(): void {
        const domNode = findDOMNode(this);

        if (domNode instanceof Element) {
            this.domNode = domNode as HTMLElement;
            this.doRegisterClicks();
        }
    }

    private doRegisterClicks(): void {
        if (!this.props.autoClose) {
            return;
        }

        // We're doing a little bit of dirty dom hacking. If you click a button or listitem, we will automatically close the menu (if autoclose === true)

        const $menu = $(this.domNode)
            .find(".dropdown-menu")
            .first();
        const closeMenu = (): void => this.toggleMenu(false);
        const dropDownDataAttribute = "dropdownMenuClickCapture";

        $menu.find("button, a").each(function() {
            const $el = $(this);

            if (!$el.data(dropDownDataAttribute)) {
                $el.data(dropDownDataAttribute, true);
                const el = $el.get(0) as HTMLElement;
                el.addEventListener("click", closeMenu);
            }
        });

        $menu.find(".mx-listview-clickable .mx-list").each(function() {
            const $el = $(this);

            if (!$el.data(dropDownDataAttribute)) {
                $el.data(dropDownDataAttribute, true);
                const el = $el.get(0) as HTMLElement;
                el.addEventListener("click", closeMenu, true);
            }
        });
    }

    private renderMenu(): ReactNode {
        const { content, isRightAligned } = this.props;

        return (
            <div
                className={classNames("dropdown-menu", { "dropdown-menu-right": isRightAligned })}
                onClick={this.handleMenuClick}
            >
                {content}
            </div>
        );
    }

    private renderSplitButton(): ReactNode {
        const { splitButtonActive, glyphicon, buttonText, buttonType, buttonSize } = this.props;

        if (!splitButtonActive) {
            return null;
        }

        const glyph: ReactNode = glyphicon ? <span className={`glyphicon ${glyphicon}`}></span> : null;
        const text =
            glyph === null && !buttonText ? (
                <span className="glyphicon glyphicon-option-horizontal"></span>
            ) : (
                buttonText
            );

        const buttonClass = ["btn", `btn-${buttonType}`, buttonSize !== "default" ? `btn-${buttonSize}` : null];

        return (
            <button type="button" className={classNames(buttonClass)} onClick={() => this.handleAction()}>
                {glyph}
                {text}
            </button>
        );
    }

    private renderDropDownButton(): ReactNode {
        const { buttonText, glyphicon, splitButtonActive, buttonType, buttonSize } = this.props;

        const glyph: ReactNode =
            !splitButtonActive && glyphicon ? <span className={`glyphicon ${glyphicon}`}></span> : null;
        const text =
            glyph === null && !buttonText ? (
                <span className="glyphicon glyphicon-option-horizontal"></span>
            ) : (
                buttonText
            );

        const buttonClass = [
            "btn",
            "dropdown-toggle",
            "dropdown-button",
            `btn-${buttonType}`,
            buttonSize !== "default" ? `btn-${buttonSize}` : null
        ];

        return (
            <button type="button" className={classNames(buttonClass)} onClick={() => this.toggleMenu()}>
                {glyph}
                {splitButtonActive ? null : text}
                <span className={splitButtonActive ? "caret no-margin" : "caret"}></span>
                {splitButtonActive ? <span className="sr-only">Toggle Dropdown</span> : null}
            </button>
        );
    }

    private toggleMenu(menuState?: boolean): void {
        const { open } = this.state;
        this.setState({ open: typeof menuState !== "undefined" ? menuState : !open });
    }

    private handleClickOutside(): void {
        this.toggleMenu(false);
    }

    private handleMenuClick(): void {
        if (this.props.autoClose) {
            this.toggleMenu(false);
        }
    }

    private handleAction(): void {
        if (this.props.splitButtonAction) {
            this.props.splitButtonAction();
        }
    }
}

export const DropDown = onClickOutside(DropDownInternal);

export const getFilteredProps = (
    props: DropdownContainerContainerProps | DropdownContainerPreviewProps,
    isWebModeler = false
): DropDownProps => {
    const {
        generalButtonGlyphicon,
        generalIsDropUp,
        generalIsRightAligned,
        generalStartOpen,
        generalAutoClose,
        content,
        appearanceButtonSize,
        appearanceButtonType,
        splitButtonSplitButtonActive
    } = props;
    const returnProps: DropDownProps = {
        glyphicon: generalButtonGlyphicon,
        isDropUp: generalIsDropUp,
        isRightAligned: generalIsRightAligned,
        startOpen: generalStartOpen,
        autoClose: generalAutoClose,
        content,
        buttonSize: appearanceButtonSize,
        buttonType: appearanceButtonType,
        splitButtonActive: splitButtonSplitButtonActive,
        extraClasses: props.class,
        isWebModeler
    };
    return returnProps;
};
