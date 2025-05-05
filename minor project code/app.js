const add = document.querySelectorAll('.add');//this is targetting or thiswll target all the item with class add 

add.forEach(e=> {
    e.addEventListener('click',()=>{
        const p=e.previousElementSibling.lastElementChild; //its targeting p element with class hide
        const itemadd = e.firstElementChild; //this is targeting element i with class fa-plus
        const itemrmv = e.lastElementChild; //this is targeting element i with class fa-minus
        
        e.classList.toggle('none');
        itemadd.classList.toggle('show');
        p.classList.toggle('show');
    })
})