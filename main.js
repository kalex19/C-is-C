var button = $('button')
var note = $('.note')
var c = $('.c')
var a = $('.a')
var r = $('.r')
var o = $('.o')
var l = $('.l')
var i = $('.i')
var n = $('.n')
var e = $('.e')
var url = $('.gift')
var array = []

button.on('click', selectWord)

function selectWord(){
  var adj = $('.adjInput').val()  
if(adj == "caring"){
  array.push(1)
  c.append(`<p>${adj}</p>`)
  note.text("Wow! 🌺 You must be her best friend!")
  $('.adjInput').val("");
} else if(adj == "admirable"){
  array.push(2)
  a.append(`<p>${adj}</p>`)
  note.text("Isn't it true though⁉️")
  $('.adjInput').val("");
} else if(adj == "remarkable"){
  array.push(3)
  r.append(`<p>${adj}</p>`)
  note.text("Yep, it's Jess! 👗")
  $('.adjInput').val("");
} else if(adj == "optimistic"){
  array.push(4)
  o.append(`<p>${adj}</p>`)
  note.text("Wow! 🌺 You must be her best friend!")
  $('.adjInput').val("");
} else if(adj == "lovely"){
  array.push(5)
  l.append(`<p>${adj}</p>`)
  note.text("Yep, it's Jess! 👗")
  $('.adjInput').val("");
}else if(adj == "iconic"){
  array.push(6)
  i.append(`<p>${adj}</p>`)
  note.text("Dripping in finesse 😎")
  $('.adjInput').val("");
} else if(adj == "never gives up"){
  array.push(7)
  n.append(`<p>${adj}</p>`)
  note.text("Isn't it true though⁉️")
  $('.adjInput').val("");
} else if(adj == "engineer"){
  array.push(7)
  e.append(`<p>${adj}</p>`)
  note.text("She's rocking this! 👩🏼‍💻")
  $('.adjInput').val("");
}else {
   note.text("That word is not flame enough for Caroline 💃 Do Better!")
  $('.adjInput').val("");
}

if(array.length === 8){
  url.text("https://starbucks.cashstar.com/recipient-experience/redemption/NDE0NTg5ZTA1NWQ0ZTQxMzRiO/4dd441a72a6e43a0b83e03dd5d196c92/?continue=true")
}
}