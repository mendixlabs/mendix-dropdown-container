[![Apache License](https://img.shields.io/badge/license-Apache%202.0-orange.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Build Status](https://travis-ci.org/JelteMX/mendix-dropdown-container.svg?branch=master)](https://travis-ci.org/JelteMX/mendix-dropdown-container)
[![Support](https://img.shields.io/badge/Support-Community%20(no%20active%20support)-orange.svg)](https://docs.mendix.com/developerportal/app-store/app-store-content-support)
[![Studio](https://img.shields.io/badge/Studio%20version-8.2%2B-blue.svg)](https://appstore.home.mendix.com/link/modeler/)
[![GitHub release](https://img.shields.io/github/release/JelteMX/mendix-dropdown-container)](https://github.com/JelteMX/mendix-dropdown-container/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/JelteMX/mendix-dropdown-container)](https://github.com/JelteMX/mendix-dropdown-container/issues)
[![Available](https://img.shields.io/badge/Test%20Project-available-green.svg)](https://github.com/JelteMX/widget-test-projects)

# Dropdown Container

Add Mendix elements to a dropdown container. Heavily based on [DropDownDivConverter](https://appstore.home.mendix.com/link/app/2089/), but an offline-capable pluginwidget that does it right. See it [in action here](https://dropdownpluginwidg-sandbox.mxapps.io)!

![AppStore](/assets/AppStoreIcon.png)

From Mendix 8.2.x and upwards it is possible to to add standard Mendix components to widgets. This Dropdown Container will behave as a dropdown button, but you can model the inside of the container using Mendix Studio Pro.

> NOTE 1: A Pluggable widget (as of now) can only contain other pluggable components like buttons and texts. You cannot add listviews. This is a limitation in the platform, not the widget. See [here](https://github.com/JelteMX/mendix-dropdown-container/issues/3)

> UPDATE 1: It seems that the capabilities for containment area's (that is used in this widget) is improved in [Mendix Studio 8.10](https://docs.mendix.com/releasenotes/studio-pro/8.10#8100). If you have issues, please update to at least 8.10.

> NOTE 2: There seems to be an issue with rendering a Dropdown Container is a table (Platform issue). Advice: Update to [8.11](https://docs.mendix.com/releasenotes/studio-pro/8.11), it seems that some issues were found with the pluggable widgets regarding this, should be fixed in that version.

![Modeler](/assets/modeler.png)

## Features

- Put Mendix elements in a dropdown
- Split button, have an action button next to a dropdown indicator
- Button text is a dynamic text, you can use a text template (and attributes from your context)
- Standard Bootstrap styles (colors, sizes)

## Limitations

- In Mendix 8.2.2 it is not possible to use a snippet inside the dropdown container. **This is currently a limitation in the platform, not the widget.**
- It is not (yet) possible to model the content of the widget in Mendix Studio. This will hopefully be fixed in the future.

## Usage

Place the widget inside or outside a context object, based on if you need this for your buttonn text.

### General

![settings1](/assets/settings1.png)

- Button text is dynamic, meaning you can use attributes from a context object
- You can add a glyphicon to the left

### Appearance

![settings2](/assets/settings2.png)

### Split button

![settings3](/assets/settings3.png)

- If you would like to add an extra action to the dropdown, you can use a Split button.

## Demo project

Test-project can be found here: [https://dropdownpluginwidg-sandbox.mxapps.io](https://dropdownpluginwidg-sandbox.mxapps.io)

## Known issues

- **(Platform issue)** __A Dropdown container cannot be used directly in a table.__ See [#1](https://github.com/JelteMX/mendix-dropdown-container/issues/1) and the top of this README. You are adviced to update to Mendix Studio 8.11, that should fix this issue.

## Issues, suggestions and feature requests

Please report your issues/suggestions [here](https://github.com/JelteMX/mendix-dropdown-container/issues)

## License

Apache 2
