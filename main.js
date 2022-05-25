const userComment = document.querySelector('#input');
let usersComment = [];

function getUserIcon(str) {
  return str.toUpperCase().split('').slice(0,1).toString();
}

function getUserComment(prop) {
  let icon = getUserIcon(prop)
  let comment = {
    iconDisp: icon,
    name: prop,
    comment: userComment.value,
    like: likeGenerator(),
    reply: replyGenerator()
  }
  usersComment.push(comment);
}

document.querySelector('form').addEventListener('submit', (e) => {
  let name = prompt('Please Enter your name');
  e.preventDefault();
  getUserIcon(name);
  getUserComment(name);
  createComment();
})

function createComment () {
  let xyz = usersComment[usersComment.length -1]
  document.querySelector('#users-comments').innerHTML +=   
  `<li class="comment-li">
    <p class="user-name-bg purple flex">${xyz.iconDisp}</p>
    <div class="comment">
    <h6>${xyz.iconDisp + xyz.name.slice(1)}<span class="comment-year"> ${(new Date()).toLocaleDateString('en-GB')}</span></h6>
    <p>${xyz.comment.toUpperCase().split('').slice(0,1).toString() + xyz.comment.slice(1)}</p>
    <div class="user-thumb">
    <div><i class="bi bi-hand-thumbs-up"></i><span>${xyz.like}</span></div>
    <div><i class="bi bi-hand-thumbs-down"></i></div>
    <span>REPLY</span>
    </div>
    <p class="reply-count"><i class="bi bi-crt bi-caret-down-fill"></i><i class="bi bi-crt bi-caret-up-fill hide"></i> ${xyz.reply} REPLIES</p>
    </div>   
  </li>`;
}
function replyGenerator() {
  return (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1)
}
function likeGenerator () {
  return Math.floor(Math.random() * 10) + 1
}


document.querySelector('.comment-section').addEventListener('click', (e) => {
  if(e.target.classList.contains('bi-crt')){
    document.querySelectorAll('.bi-crt').forEach(crt => crt.classList.remove('hide'));
    e.target.classList.add('hide');
  }
})


