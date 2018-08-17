import * as React from 'react'

type Props = {
  isShow: boolean
  title: string
  content: string
  onSubmitClick: () => void
  onCancelClick: () => void
}

class ConfirmModal extends React.Component<Props> {
  handleCloseButtonClick = () => {
    this.props.onCancelClick()
  }

  handleSubmitButtonClick = () => {
    this.props.onSubmitClick()
  }

  render() {
    return (
      <div className={this.props.isShow ? 'modal show': 'modal'}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"> <strong>{this.props.title}</strong></h4>
            </div>
            <div className="modal-body">
              <p>{this.props.content}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger"
                onClick={this.handleSubmitButtonClick.bind(this)}
              >Delete</button>
              <button type="button" className="btn btn-secondary"
                onClick={this.handleCloseButtonClick.bind(this)}
              >Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmModal
