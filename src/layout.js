import React, { Component } from "react"
import App from './App'
import Footer from './footer'
import './layout.css'
import './bootstrap.min.css'

export default class layout extends Component {
  
  verifyPass(e){

    e.preventDefault()
    
    let nowPass = document.getElementById('pass')
    let new_tab = document.getElementById('app')
    let verBtn = document.getElementById('verify_btn')

    if(nowPass.value === process.env.PASS){
      new_tab.style = "display: block"
      nowPass.style = "display: none"
      verBtn.style = "display: none"
    } else {
      new_tab.style = "display: none"
    }

  }
  
  render() {
    return (
      <section>
        <div className="container">
          <form action="" className="mt-3">
            <input type="password" name="password" id="pass" className="form-control" placeholder="Enter Password"/>
            <button type="submit" id="verify_btn" className="btn btn-warning btn-block mt-2 p-1" onClick={this.verifyPass}>Verify</button>
          </form>
        </div>
        <div className="container app_box" id="app">
          <App />
        </div>
        <Footer />
      </section>
    )
  }
}
