const state = {
        taskList: []
    }
    //document object- DOM
const taskContents = document.querySelector(".task__Content");
const taskModal = document.querySelector(".task__Modal_body");



const htmlTaskContent = ({ id, title, description, type, url }) => `
  <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
    <div class='card shadow-sm task__card'>
      <div class='card-header d-flex gap-2 justify-content-end task__card__header'>
        <button type='button' class='btn btn-outline-info mr-2' name=${id} onclick="editTask.apply(this, arguments)">
          <i class='fas fa-pencil-alt' name=${id}></i>
        </button>
        <button type='button' class='btn btn-outline-danger mr-2' name=${id} onclick="deleteTask.apply(this, arguments)">
          <i class='fas fa-trash-alt' name=${id}></i>
        </button>
      </div>

      <div class = "card__body">
      ${
        url && `<img width='100%' src =${url} alt='card image cap' class ='card-image-top-md-3 rounded-lg'/>
      }
      
      <h4 class = "task__card_title">${title}</h4>
      <p class = "description trim-3-lines text-muted" data-gram = "false">
      ${description}</p>
      
      </div>