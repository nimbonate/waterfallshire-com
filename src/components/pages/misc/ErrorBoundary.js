import React from 'react';
import { AiOutlineReload } from 'react-icons/ai';

import { Button } from '../../../utils/styles/forms';
import { Centered, Hr, Wrapper } from '../../../utils/styles/misc';
import { ALink, Body, H2, Label } from '../../../utils/styles/text';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null, 
            errorInfo: null, 
            detailsShown: false
        };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        console.error("Uh oh! Error: " + error)
        console.error(JSON.stringify(errorInfo))
    }

    showDetails(){
        this.setState({
            detailsShown: true
        })
    }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
          <div style={{ height: "100vh" }}>
            <Wrapper>
                <H2><span onClick={() => this.showDetails()}>Something</span> went wrong</H2>
                <Body>Sorry about this! Please email <ALink href={`mailto:help@minute.tech`}>help@minute.tech</ALink> if the error persists.</Body>
                <Hr/>
                {this.state.detailsShown && (
                    <>
                    <Label>More info:</Label>
                    <Body>{this.state.error && this.state.error.toString()}</Body>
                    </>
                )}
               
                <Hr/>
                <Centered margin="25px 0">
                    <Button type="button" onClick={() => window.location.reload()}><AiOutlineReload /> Reload page</Button>
                </Centered>
            </Wrapper>
          </div>
        
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
export default ErrorBoundary;