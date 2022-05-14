// function changePages(z) {
//     document.getElementById('all').classList.remove('activeTab')
//     document.getElementById('btnRed').classList.remove('activeTab')
//     document.getElementById(z).classList.add("activeTab")
// //     for(var i=0 ; i < 3 ; i++){
// //        document.getElementsByClassName('tabMedicin')[i].style.display = 'none';
// //     }
// //     for(var i = 0 ; i < document.getElementsByClassName(z).length ; i++){
// // document.getElementsByClassName(z)[i].style.display = 'block';
// //     }
// //     console.log(z)
// }
function changeColor(m) {
    document.getElementById('painting').src = './image/Vinci-' + m + '.jpg';
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
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document) 
const tabs = $$('.buton') 
const panes = $$('.tabMedicin') 
console.log(tabs , panes)
tabs.forEach((tab ,index) => {

const pane = panes[index]


    tab.onclick =function (){
        $('.buton.activeTab').classList.remove('activeTab')
        $('.tabMedicin.activeTab').classList.remove('activeTab')
        this.classList.add('activeTab')
       pane.classList.add('activeTab')
    }
});

