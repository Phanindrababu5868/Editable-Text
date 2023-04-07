import {Component} from 'react'
import {
  BgContainer,
  CardContainer,
  Heading,
  EditableInputContainer,
  InputField,
  ParagraphText,
  Button,
} from './styledComponents'

class EditableText extends Component {
  state = {
    editableText: '',
    isButtonClicked: false,
  }

  onChangeSearchInput = event => {
    this.setState({editableText: event.target.value})
  }

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {editableText, isButtonClicked} = this.state
    const EditSaveButton = isButtonClicked ? 'Edit' : 'Save'
    return (
      <BgContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <EditableInputContainer>
            {isButtonClicked ? (
              <ParagraphText>{editableText}</ParagraphText>
            ) : (
              <InputField
                placeholder="Enter your Text"
                type="text"
                value={editableText}
                onChange={this.onChangeSearchInput}
              />
            )}
            <Button onClick={this.onButtonClick}>{EditSaveButton}</Button>
          </EditableInputContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default EditableText
