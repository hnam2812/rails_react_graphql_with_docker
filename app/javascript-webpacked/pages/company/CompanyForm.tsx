import * as React from 'react'
import RemoveFileButton from '../../components/RemoveFileButton'

export type CompanyInput = {
  id?: string
  legalName: string
  contactName: string
  contactPhone: string
  address: string
  vestingSchedule: string
  rights: string
  restrictiveLegends: string
  accelerationProvisions: string
  ceoSignature: string
  certificateOfIncorporation: string
  secretarySignature: string
  removeCeoSignature: boolean
  removeCertificateOfIncorporation: boolean
  removeSecretarySignature: boolean
}

type Props = {
  form: CompanyInput
  errors: Array<string>
  onSubmit: (input: any) => void
  onCancel: () => void
  formFitle: string
  company: any
}

type State = {
  form: CompanyInput
}

class CompanyForm extends React.Component<Props, State> {
  state: State = {
    form: this.props.form
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value
    const name = e.target.name
    if (Object.keys(this.state.form).indexOf(name) >= 0) {
      this.setState({
        form: {
          ...this.state.form,
          [name]: value
        }
      })
    }
  }

  handleInputFileChange = (e: any) => {
    const name = e.target.name
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.setState({
        form: {
          ...this.state.form,
          [name]: reader.result
        }
      })
    };
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    this.props.onSubmit(this.state.form)
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  handleRemoveFileButtonClick = (fieldName: string) => {
    this.setState({
      form: {
        ...this.state.form,
        [fieldName]: true
      }
    })
  }

  render() {
    const company = this.props.company
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <fieldset className="fieldset-t mrt-25">
                <legend>Legal Name*</legend>
                <input
                  autoFocus
                  className="form-control input-t"
                  type="text"
                  value={ this.state.form.legalName }
                  onChange={ this.handleInputChange }
                  name="legalName"
                />
              </fieldset>

              <fieldset className="fieldset-t mrt-25">
                <legend>Contact Name</legend>
                <input autoComplete="false"
                  className="form-control input-t"
                  type="tel"
                  name="contactName"
                  value={ this.state.form.contactName || '' }
                  onChange={ this.handleInputChange }
                  id="contact-name"
                />
              </fieldset>

              <fieldset className="fieldset-t mrt-25">
                <legend>Contact Phone</legend>
                <input
                  autoFocus
                  className="form-control input-t"
                  type="text"
                  value={ this.state.form.contactPhone || '' }
                  onChange={ this.handleInputChange }
                  name="contactPhone"
                />
              </fieldset>

              <fieldset className="fieldset-t mrt-25">
                <legend>Address</legend>
                <textarea
                  rows={4}
                  className="form-control input-t textarea-t"
                  name="address"
                  value={ this.state.form.address || '' }
                  onChange={ this.handleInputChange }
                  id="address"/>
              </fieldset>
            </div>

            <div className="row mrt-25 shareholder-t">
              <div className="col-md-12">
                { this.props.form.certificateOfIncorporation && !this.state.form.removeCertificateOfIncorporation ? (
                  <div>
                    <p className="shareholder-t-title">Certificate Of Incorporation</p>
                    <div className="item-quick-image mrt-25">
                      <div className="left">
                        <img src="/images/image.png" alt=""/>
                      </div>
                      <div className="right">
                        <p className="lead-t">{company.certificateOfIncorporationFilename}</p>
                        <p className="sub-t">
                          {company.certificateOfIncorporationFileExtension} • {company.certificateOfIncorporationFileSize}K
                        </p>
                        <p className="text-right no-margin">
                          <RemoveFileButton handleRemoveFileButtonClick={this.handleRemoveFileButtonClick} fieldName='removeCertificateOfIncorporation' />
                        </p>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="line-bottom"></div>
                  </div>) : (
                    <div>
                      <p className="shareholder-t-title">Certificate Of Incorporation</p>
                      <span className="upload-button-group-t">
                        <span className="btn-t btn-t-lg btn-t-primary btn-t-icon btn-span">
                          <img src="/images/add.png" alt=""/>
                          <span>UPLOAD</span>
                        </span>
                        <input type="file" name="certificateOfIncorporation"
                                onChange={this.handleInputFileChange.bind(this)}
                        />
                      </span>
                      <p>{this.state.form.certificateOfIncorporation ? 'File uploaded' : 'No file uploaded' } </p>
                    </div>
                  )
                }
              </div>
            </div>

            <br/>
            <div className="row mrt-25">
              <div className="col-md-6">
                <h4>Fascimile Signatures</h4>
              </div>
            </div>
            <div className="row shareholder-t">
              { this.props.form.ceoSignature && !this.state.form.removeCeoSignature ? (
                <div className="col-md-6">
                  <p className="shareholder-t-title">CEO Signature</p>
                  <div className="item-quick-image mrt-25">
                    <div className="left">
                      <img src="/images/image.png" alt=""/>
                    </div>
                    <div className="right">
                      <p className="lead-t">{company.ceoSignatureFilename}</p>
                      <p className="sub-t">
                        {company.ceoSignatureFileExtension} • {company.ceoSignatureFileSize}K
                      </p>
                      <p className="text-right no-margin">
                        <RemoveFileButton handleRemoveFileButtonClick={this.handleRemoveFileButtonClick} fieldName='removeCeoSignature' />
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="line-bottom"></div>
                </div>) : (
                  <div className="col-md-6">
                    <p className="shareholder-t-title">CEO Signature</p>
                    <span className="upload-button-group-t">
                      <span className="btn-t btn-t-lg btn-t-primary btn-t-icon btn-span">
                        <img src="/images/add.png" alt=""/>
                        <span>UPLOAD</span>
                      </span>
                      <input type="file" name="ceoSignature"
                              onChange={this.handleInputFileChange.bind(this)} />
                    </span>
                    <p>{this.state.form.ceoSignature ? 'File uploaded' : 'No file uploaded' } </p>
                  </div>
                )
              }

              { this.props.form.secretarySignature && !this.state.form.removeSecretarySignature ? (
                <div className="col-md-6">
                  <p className="shareholder-t-title">CEO Signature</p>
                  <div className="item-quick-image mrt-25">
                    <div className="left">
                      <img src="/images/image.png" alt=""/>
                    </div>
                    <div className="right">
                      <p className="lead-t">{company.secretarySignatureFilename}</p>
                      <p className="sub-t">
                        {company.secretarySignatureFileExtension} • {company.secretarySignatureFileSize}K
                      </p>
                      <p className="text-right no-margin">
                        <RemoveFileButton handleRemoveFileButtonClick={this.handleRemoveFileButtonClick} fieldName='removeSecretarySignature' />
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="line-bottom"></div>
                </div>) : (
                  <div className="col-md-6">
                    <p className="shareholder-t-title">Secretary Signature</p>
                    <span className="upload-button-group-t">
                      <span className="btn-t btn-t-lg btn-t-primary btn-t-icon btn-span">
                        <img src="/images/add.png" alt=""/>
                        <span>UPLOAD</span>
                      </span>
                      <input type="file" name="secretarySignature"
                              onChange={this.handleInputFileChange.bind(this)} />
                    </span>
                    <p>{this.state.form.secretarySignature ? 'File uploaded' : 'No file uploaded' } </p>
                  </div>
                )
              }
            </div>
          </div>

          <div className="col-md-6">
            <fieldset className="fieldset-t mrt-25">
              <legend>Vesting Schedule</legend>
              <textarea
                rows={4}
                className="form-control input-t textarea-t"
                name="vestingSchedule"
                value={ this.state.form.vestingSchedule || '' }
                onChange={ this.handleInputChange }
                id="vesting-schedule"/>
            </fieldset>

            <fieldset className="fieldset-t mrt-25">
              <legend>Rights</legend>
              <textarea
                rows={4}
                className="form-control input-t textarea-t"
                name="rights"
                value={ this.state.form.rights || '' }
                onChange={ this.handleInputChange }
                id="rights"/>
            </fieldset>

            <fieldset className="fieldset-t mrt-25">
              <legend>Restrictive Legends</legend>
              <textarea
                rows={4}
                className="form-control input-t textarea-t"
                name="restrictiveLegends"
                value={ this.state.form.restrictiveLegends || '' }
                onChange={ this.handleInputChange }
                id="restrictive-legends"/>
            </fieldset>

            <fieldset className="fieldset-t mrt-25">
              <legend>Acceleration Provisions</legend>
              <textarea
                rows={4}
                className="form-control input-t textarea-t"
                name="accelerationProvisions"
                value={ this.state.form.accelerationProvisions || '' }
                onChange={ this.handleInputChange }
                id="acceleration-provisions"/>
            </fieldset>
          </div>
        </div>

        <br/>
        <div className="row mrt-25">
          <div className="col-md-6">
            <button type="button" className="btn-t btn-t-md btn-t-cancel pull-right" onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
          <div className="col-md-6">
            <input type="submit" className="btn-t btn-t-md btn-t-info" value="Submit"/>
          </div>
        </div>
      </form>
    )
  }
}

export default CompanyForm
