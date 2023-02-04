const choices = document.querySelectorAll("label");

choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        for(let x=0; x<choices.length;x++){
            if(choices[x].classList.contains("selected")){
                choices[x].classList.remove("selected");
            }
        }
        choice.classList.add("selected");
        for(let i=0;i< choices.length;i++){
            choices[i].classList.add("selectAll");
        }
        // console.log(choice)
    })
})