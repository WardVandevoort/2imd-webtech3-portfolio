

class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    newNote.setAttribute("class", "card");

    let newP = document.createElement("p");
    newP.innerHTML = title;

    let newA = document.createElement("a");
    newA.setAttribute("class", "card-remove");
    newA.innerHTML = "Remove";

    newNote.appendChild(newP);
    newNote.appendChild(newA);
    newA.addEventListener('click', this.remove.bind(newNote));

    
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let data = JSON.parse(data.getItem('data'));
    if(data == null) {
      data = [];
    }
    data.push(this.title);
    data.setItem('data', JSON.stringify(data));
  }
  
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.remove();
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
    

    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click",this.createNote.bind(this));

    this.enterAdd = document.querySelector("#txtAddNote");
      this.enterAdd.addEventListener("keydown", enter => {
        if(enter.keyCode == 13) {
          enter.preventDefault();
          document.querySelector("#btnAddNote").click();
          
        }
      });

      
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    
    let storage = JSON.parse(storage.getItem('data'));
      if(storage.length > 0) {
        storage.forEach(title => {
          let note = new Note(title);
          note.add();
        });
      }
    
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    let text = document.querySelector("#txtAddNote").value;
    let note = new Note(text);
    note.add();
    
    note.saveToStorage();
    this.reset();
  }
  
  reset(){
    // this function should reset the form 
    let txtField = document.querySelector("#txtAddNote");
    txtField.value = "";
    
    
      
    
  }
  
}

let app = new App();