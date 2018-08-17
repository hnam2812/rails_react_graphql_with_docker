import * as React from 'react'

type Props = {
  handleRemoveFileButtonClick: (fieldName: string) => void
  fieldName: string
}

class RemoveFileButton extends React.Component<Props> {
  handleRemoveFileButtonClick = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    this.props.handleRemoveFileButtonClick(this.props.fieldName)
  }

  render() {
    return (
      <a href="#" className="remove-item" onClick={this.handleRemoveFileButtonClick.bind(this)}>REMOVE</a>
    )
  }
}

export default RemoveFileButton
