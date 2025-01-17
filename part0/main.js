var form = document.getElementById('notes_form')

form.onsubmit = function(e) {
  e.preventDefault()

  var note = {
    content: e.target.elements[0].value,
    date: new Date(),
  }

  notes.push(note)
  e.target.elements[0].value = ''
  redrawNotes()
  sendToServer(note)
}

var sendToServer = function(note) {
    var xhttpForPost = new XMLHttpRequest()
    // ...
  
    xhttpForPost.open('POST', '/new_note_spa', true)
    xhttpForPost.setRequestHeader('Content-type', 'application/json')
    xhttpForPost.send(JSON.stringify(note))
  }