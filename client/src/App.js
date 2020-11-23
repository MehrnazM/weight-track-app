import './App.css';
import React from "react"
import Navigation from "./components/Navigation/Navigation"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App(props){

  
  /*
  callAPI() {

    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({
      apiResponse : res
    }))
    .catch(e => {console.log(e)})
  }

  componentDidMount(){
    this.callAPI()
  }*/
   
  
    return (
      <div>
        <Header />
        <Navigation />
        <Footer />
      </div>
    )
    
}

export default App
