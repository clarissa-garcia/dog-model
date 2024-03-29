import React, { Component } from "react";
import { ButtonImageContainer } from "./images/ButtonImageContainer";
import ImagePanel from "./ImagePanel";
import TextPanel from "./TextPanel";
import NavigationBar from "./NavigationBar";

class ButtonImagePage extends Component {
  state = {
    // The following section is beginnig values for section mode
    mostRecentButton: 0,
    mostRecentContainer: ButtonImageContainer[0],
    panelDisplay: null,
  };

  /**
   * Name: onHover
   * Use: When a g path is hovered in an svg, it's id corresponding to the dog bodypart (101,102...)
   *      is passed to the function through the event variable.
   *      The function loops through all the svg objects in the json to find the correct one with all the
   *      text information for the text panel and sets it as a state variable.
   * **/
  onHover = (e, touchScreen) => {
    const mostRecentContainerText = this.state.mostRecentContainer.textField;
    const found = mostRecentContainerText[0].array.find((element) => {
      return element.id === e.target.id;
    });
    let newState = Object.assign({}, this.state);
    newState.panelDisplay = found;
    this.setState(newState);
  };

  /**
   * Name: onLeave
   * Use: When a g path is hovered away from, the panel display variable is set to null.
   *      The text panel will later see the variable as null and instead display fallback
   *      text for that particular image.
   * **/
  onLeave = () => {
    let newState = Object.assign({}, this.state);
    newState.panelDisplay = null;
    this.setState(newState);
  };

  /**
   * Name: containerLookup
   * Use: Simple function that uses a selected button's current index value to find
   *      a button image container. This is used to label the buttons with their
   *      corresponding names.
   * **/
  containerLookup = (buttonIndexId) => {
    return ButtonImageContainer[buttonIndexId];
  };

  setSectionModeButtonClickState = (selectedButtonIndex) => {
    let recentButton = selectedButtonIndex;
    let newContainer = this.containerLookup(selectedButtonIndex);
    this.setState({
      mostRecentButton: recentButton,
      mostRecentContainer: newContainer,
    });
  };

  triggerReset(selectedButtonIndex) {
    this.setSectionModeButtonClickState(selectedButtonIndex);
  }

  onSectionMode = () => {
    let newState = Object.assign({}, this.state);
    newState.mostRecentButton = 0;
    newState.mostRecentContainer = ButtonImageContainer[0];
    newState.panelDisplay = null;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <NavigationBar handler={this.triggerReset.bind(this)} />

        <ImagePanel
          mostRecentContainer={this.state.mostRecentContainer}
          buttonSelectedState={this.state.buttonSelectedState}
          onEnter={this.onHover}
          onLeave={this.onLeave}
        ></ImagePanel>

        <TextPanel
          mostRecentContainer={this.state.mostRecentContainer}
          panelDisplayInfo={this.state.panelDisplay}
        ></TextPanel>
      </div>
    );
  }
}

export default ButtonImagePage;
