class Task{
    constructor(id, title, isTask,isOverdue,counter){
        this.id=id,
        this.title=title,
        this.isTask=isTask,
        this.counter=counter
    }
}
const Model = [];
Model.push(new Task(0, 'Campaign Tasks', true, true, 1));
Model.push(new Task(1, 'Leaving', false, false, 14));
Model.push(new Task(2, 'Postal Serveys', false, false, 2));
Model.push(new Task(3, 'SC Task', true, false, 1));
Model.push(new Task(4, 'Stories', false, true, 2));

function find_one() {
    document.getElementById("second-one").innerHTML =Model.length;
    return;

}
function find_two() {
    document.getElementById("second-second").innerHTML =Model.length;
    return;

}
function find_three() {
document.getElementById("second-third").innerHTML =Model.length;
return;
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Hello") {
      x.innerHTML = "Swapped text!";
    } else {
      x.innerHTML = "Hello";
    }
  }

find_one()
find_two()
find_three()


const init = () => {
    const todolistElement = document.querySelector('.' + view.domString.todolist);
    showCounter(false);
    const listHtmlTmp = view.creatHtmlTmp(model);
    view.render(todolistElement, listHtmlTmp);
    addListenerOnToggle();
  };

  return {
    init
  }

(View, Model);

Controller.init();