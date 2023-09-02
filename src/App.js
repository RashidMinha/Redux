
import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import en from "./Language/en";
import { ApplicationLoader } from "./layout/Loaders/Spinner";
import AppApplication from "./Pages/Application"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }


  componentDidMount(){

    setTimeout(()=>{
         this.setState({loading :false})
    },[1000])

  }

  render() {
    const { loading } = this.state;

    let Routing = null;
    if (loading) {
      Routing = (
        <>
         <ApplicationLoader />
        </>
      )
    } else {
      Routing = (
        <Routes>
          <Route path="/" element={<AppApplication />} />
        </Routes>
      )
    }
    
    return (
      <>
        <IntlProvider locale="en" messages={en} >
          <Router>
            {Routing}
          </Router>
        </IntlProvider>
      </>
    )
  }
}

export default App;