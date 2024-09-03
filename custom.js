
    //clear function

    document.querySelector("#clear").addEventListener("Click",()=>{
        document.querySelector("#display").value = " ";
    })

// backspace function

const backspace = () =>{
    const num = document.querySelector("#display").value.slice(0,-1);
    document.querySelector("#display").value = num;
}