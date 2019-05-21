import React from 'react';

const modalContainer = {
  borderSizing: 'border-box',
  position: 'fixed',
  zIndex: '2000',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  overflowY: 'auto',
  background: 'rgba(0, 0, 0, 0.75)',
};

const table = {
  display: 'table',
  height: '100%',
  width: '100%',
};

const cell = {
  display: 'table-cell',
  verticalAlign: 'middle',
  padding: '64px',
};

const contentContainer = {
  backgroundColor: '#fff',
  maxWidth: '568px',
  width: '100%',
  position: 'relative',
  margin: 'auto',
};

const contentSection = {
  display: 'block',
};

const divPadding = {
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  padding: '32px',
};

const exitDiv = {
  marginBottom: '24px',
};

const exitButton = {
  padding: '20px',
  margin: '-20px',
  cursor: 'pointer',
  backgroundColor: '#0000',
  color: 'buttontext',
  display: 'block',
  border: 'none',
};

const svgStyle = {
  height: '16px',
  width: '16px',
  display: 'block',
  fill: 'rgb(118, 118, 188)',
};

const headerStyle = {
  fontWeight: '600',
};

const headerDiv = {
  paddingBottom: '24px',
  paddingTop: '0',
  borderBottom: '0',
};

const title = {
  margin: '0',
  padding: '0',
};

const titleDiv = {
  marginTop: '16px',
};

const optionContainer = {
  marginTop: '-16px',
};

const fieldset = {
  margin: '0',
  padding: '0',
  borderWidth: '0',
};

const optionsMargin = {
  marginTop: '16px',
  marginBottom: '16px',
};

const optionDivMargin = {
  marginBottom: '8px',
  marginRight: '0',
};

const optionLabel = {
  cursor: 'pointer',
  display: 'block',
  background: '#0000',
  borderWidth: '0',
  padding: '0',
};

const optionBorder = {
  paddingBottom: '24px',
  paddingTop: '16px',
  borderBottom: '1px solid #ebebeb',
};

const optionTable = {
  diplay: 'table',
  width: '100%',
  borderSpacing: '0',
};

const optionCell = {
  display: 'table-cell',
  width: '100%',
  verticalAlign: 'top',
};

const optionText = {
  fontSize: '16px',
  lineHeight: '22px',
  letterSpacing: 'normal',
  color: '#484848',
  fontWeight: 'normal',
};

const radioCell = {
  display: 'table-cell',
  verticalAlign: 'top',
};

const radioMargin = {
  marginLeft: '12px',
};

const radioDiv = {
  display: 'inline-block',
  postion: 'relative',
};

const radioInput = {
  height: '100%',
  opacity: '0',
  position: 'absolute',
  width: '100%',
  margin: '0',
};

const radioBorder = {
  backgroundColor: '#fff',
  color: '#008489',
  display: 'inline-block',
  maginTop: '2px',
  verticalAlign: 'top',
  borderColor: '#ebebeb',
  borderWidth: '1px',
  borderStyle: 'solid',
  bordeRadius: '50%',
};

const buttonContainer = {
  marginTop: '32px',
  marginBottom: '16px',
};

const buttonDiv = {
  WebkitBoxPack: 'justify',
  WebkitBoxAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const buttonStyle = {
  color: '#fff',
  display: 'inline-block',
  position: 'relative',
  textAlign: 'center',
  width: 'auto',
  cursor: 'pointer',
  minWidth: '71.1935px',
  margin: '0',
  textDecoration: 'none',
  borderRadius: '4px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '#0000',
  background: '#008489',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '10px 22px',
  fontWeight: '800',
};

const buttonSpan = {

};

const ReportModal = (props) => {
  const { closeModal } = props;

  return (
    <div style={modalContainer}>
      <div style={table}>
        <div id="modal" style={cell}>
          <div style={contentContainer}>
            <section style={contentSection}>
              <div style={divPadding}>
                <div style={exitDiv}>
                  <button type="button" style={exitButton} onClick={closeModal}>
                    <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={svgStyle}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" /></svg>
                  </button>
                </div>
                <header style={headerStyle}>
                  <div style={headerDiv}>
                    <h1 style={title}>Why are you reporting this listing?</h1>
                    <div style={titleDiv} >This won&#39;t be shared with the host.</div>
                  </div>
                </header>
                <section>
                  <div style={optionContainer}>
                    <fieldset style={fieldset}>
                      <div style={optionsMargin}>
                        <div style={optionDivMargin}>
                          <label style={optionLabel} htmlFor="">
                            <div style={optionBorder}>
                              <div style={optionTable}>
                                <div style={optionCell}>
                                  <div style={optionTable}>
                                    <div style={optionCell}>
                                      <div style={optionText}>It&#39;s inaccurate or incorrect</div>
                                    </div>
                                  </div>
                                </div>
                                <div style={radioCell}>
                                  <div style={radioMargin}>
                                    <div style={radioDiv}>
                                      <input type="radio" stlye={radioInput} />
                                      <div style={radioBorder} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                          <label style={optionLabel} htmlFor="">
                            <div style={optionBorder}>
                              <div style={optionTable}>
                                <div style={optionCell}>
                                  <div style={optionTable}>
                                    <div style={optionCell}>
                                      <div style={optionText}>It&#39;s not a real place to stay</div>
                                    </div>
                                  </div>
                                </div>
                                <div style={radioCell}>
                                  <div style={radioMargin}>
                                    <div style={radioDiv}>
                                      <input type="radio" stlye={radioInput} />
                                      <div style={radioBorder} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                          <label style={optionLabel} htmlFor="">
                            <div style={optionBorder}>
                              <div style={optionTable}>
                                <div style={optionCell}>
                                  <div style={optionTable}>
                                    <div style={optionCell}>
                                      <div style={optionText}>It&#39;s a scam</div>
                                    </div>
                                  </div>
                                </div>
                                <div style={radioCell}>
                                  <div style={radioMargin}>
                                    <div style={radioDiv}>
                                      <input type="radio" stlye={radioInput} />
                                      <div style={radioBorder} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                          <label style={optionLabel} htmlFor="">
                            <div style={optionBorder}>
                              <div style={optionTable}>
                                <div style={optionCell}>
                                  <div style={optionTable}>
                                    <div style={optionCell}>
                                      <div style={optionText}>It&#39;s offensive</div>
                                    </div>
                                  </div>
                                </div>
                                <div style={radioCell}>
                                  <div style={radioMargin}>
                                    <div style={radioDiv}>
                                      <input type="radio" stlye={radioInput} />
                                      <div style={radioBorder} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                          <label style={optionLabel} htmlFor="">
                            <div style={optionBorder}>
                              <div style={optionTable}>
                                <div style={optionCell}>
                                  <div style={optionTable}>
                                    <div style={optionCell}>
                                      <div style={optionText}>It&#39;s something else</div>
                                    </div>
                                  </div>
                                </div>
                                <div style={radioCell}>
                                  <div style={radioMargin}>
                                    <div style={radioDiv}>
                                      <input type="radio" stlye={radioInput} />
                                      <div style={radioBorder} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <div style={buttonContainer}>
                      <div style={buttonDiv}>
                        <div />
                        <button type="button" style={buttonStyle} onClick={closeModal}>
                          <span style={buttonSpan}>Finish</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
