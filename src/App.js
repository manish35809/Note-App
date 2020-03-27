import React, { Component } from "react"
import Heading from "./Heading"
import db from "./firebase"
import "./bootstrap.min.css"
import "./layout.css"

export default class App extends Component {
  constructor(props) {
    super(props)
    db.collection("todos").onSnapshot(snap => {
      let changes = snap.docChanges()
      let ul = document.getElementById("ulist")
      ul.innerHTML = ""
      changes.forEach(element => {
        this.passTodos(db)
      })
    })
  }

  passTodos(database) {
    database
      .collection("todos")
      .get()
      .then(highData => {
        let ul = document.getElementById("ulist")
        ul.innerHTML = ""
        highData.docs.forEach(doc => {
          this.addTodo(database, doc.id, doc.data().title)
        })
      })
  }

  addTodo(database, id, title) {
    let ul = document.getElementById("ulist")
    let li = document.createElement("li")
    let span = document.createElement("span")

    li.setAttribute("data-id", id)

    li.className = "list-group-item"
    span.className = "text-danger bg-white float-right cursor_hand"

    span.innerHTML = "[X]"
    li.textContent = title

    li.appendChild(span)
    ul.appendChild(li)

    span.addEventListener("click", span => {
      let parentLi = span.target.parentElement.getAttribute("data-id")

      database
        .collection("todos")
        .doc(parentLi)
        .delete()
    })
  }

  addNewTodo() {
    let newTodo = document.getElementById("newTodo")

    db.collection("todos")
      .add({
        title: newTodo.value,
      })
      .then(() => {
        newTodo.value = ""
      })
  }

  render() {
    return (
      <section>
        <Heading />
        <div className="container">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter ToDo Here"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              id="newTodo"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-white btn-success"
                type="button"
                onClick={this.addNewTodo}
              >
                Add ToDo
              </button>
            </div>
          </div>
          <ul className="list-group mt-5 pb-3" id="ulist"></ul>
        </div>
      </section>
    )
  }
}
