window.onload = function(){
// creating game-board
    for(let i =0; i<9; i++){
        document.querySelector('.container').innerHTML += '<div class = "tile"></div>'
    }
 
// clicking + adding X or O
    const announcer = document.querySelector('.announcer');
    const playerDisplay = document.querySelector('.display-player');
    let currentPlayer = 'x';
    let hod = 0;
    document.querySelector('.container').onclick = function(event){
        console.log(event);
        if(event.target.className === 'tile'){
            if(hod%2===0){
                event.target.innerHTML = 'X';
                
            } else{
                event.target.innerHTML = 'O'
               
            }
            hod++;
// checking current player
            const changePlayer = () => {
                playerDisplay.classList.remove(`player${currentPlayer}`);
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
                playerDisplay.innerText = currentPlayer;
                playerDisplay.classList.add(`player${currentPlayer}`);
            } 
            if (event.target.innerHTML === 'O') {
                changePlayer();
            } else if(event.target.innerHTML === 'X'){
                changePlayer();
            }
            result();

        }
// checking result of game
        function result(){
            let box = document.querySelectorAll('.tile');
            let combo = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]
            for(let i=0; i<combo.length; i++){
                if(box[combo[i][0]].innerHTML === 'X' && box[combo[i][1]].innerHTML === 'X'
                 && box[combo[i][2]].innerHTML === 'X') {
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                announcer.classList.remove('hide')
                
            } else if(box[combo[i][0]].innerHTML === 'O' && box[combo[i][1]].innerHTML === 'O'
                 && box[combo[i][2]].innerHTML === 'O') {
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                announcer.classList.remove('hide');
            } 
        }
        }

    }
// button reset
    const reset = document.getElementById('reset');
    reset.addEventListener('click', function(){
        window.location.reload()
    })

// drag and dropp
    const location = document.querySelectorAll('.avatar-container'),
    avatar = document.querySelectorAll('.avatar-icon')

    const dragDrop = function () {
    let element_of_avatar;
    function dragOver (event) {
        event.preventDefault();
    }
    function dragDrop () {
        this.append(element_of_avatar);
        element_of_avatar.draggable = false;
        this.removeEventListener('drop', dragDrop)
        this.removeEventListener('dragover', dragOver)
    }
    location.forEach(element => {
        element.addEventListener('dragover', dragOver);
        element.addEventListener('drop', dragDrop);
    });
    avatar.forEach(element => {
        element.addEventListener('dragstart', (event) => {
            element_of_avatar = event.target;
            setTimeout(() => {
                event.target.classList.add('hide');
            }, 0);
        });
        element.addEventListener('dragend', (event) => {
            event.target.classList.remove('hide');
        });
        element.addEventListener('dragenter', (event) => {
            event.preventDefault();
        })
    });    
}
dragDrop();

}
