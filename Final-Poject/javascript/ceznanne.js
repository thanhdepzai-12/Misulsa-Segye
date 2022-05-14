const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document) 
const tabs = $$('.btn') 
const panes = $$('.mainTab-one') 
console.log(tabs , panes)
tabs.forEach((tab ,index) => {

const pane = panes[index]


    tab.onclick =function (){
        $('.btn.activeTab').classList.remove('activeTab')
        $('.mainTab-one.activeTab').classList.remove('activeTab')
        this.classList.add('activeTab')
       pane.classList.add('activeTab')
    }
});

function changeColor(m) {
    document.getElementById('photo').src = './image/Cezanne-' + m + '.jpg';
    document.getElementById('red').classList.remove('button-tab')
    document.getElementById('black').classList.remove('button-tab')
    document.getElementById('white').classList.remove('button-tab')
    document.getElementById('green').classList.remove('button-tab')
    document.getElementById('grey').classList.remove('button-tab')
    document.getElementById('brown').classList.remove('button-tab')
    document.getElementById('purple').classList.remove('button-tab')
    document.getElementById('orange').classList.remove('button-tab')
    document.getElementById(m).classList.add('button-tab')
}
