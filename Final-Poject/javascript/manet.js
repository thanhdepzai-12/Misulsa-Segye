const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document) 
const tabs = $$('.button') 
const panes = $$('.tab-painting') 
console.log(tabs , panes)
tabs.forEach((tab ,index) => {

const pane = panes[index]


    tab.onclick =function (){
        $('.button.activeTab').classList.remove('activeTab')
        $('.tab-painting.activeTab').classList.remove('activeTab')
        this.classList.add('activeTab')
       pane.classList.add('activeTab')
    }
});