//area of tri
// const base = document.querySelector("#a");
// const height = document.querySelector("#b")

// document.querySelector("#btn").addEventListener("click", ()=>{
//     const sol1 = base.value * height.value;
//     document.querySelector(".s-ans").innerHTML = sol1/2;
// })



// median of odd num
// const base = document.querySelector("#a");
// document.querySelector("#btn").addEventListener("click", ()=>{
//     const bvalue = base.value;
//     const bsplit = bvalue.split(" ")
//     const sort = bsplit.sort((a,b)=> a-b)
//     const len = bsplit.length
//     const olen = bsplit.length-1 ;
//     const d2 = olen/2;
//     // const fn = len - d2;
//     document.querySelector(".s-ans").innerHTML = sort[d2]
// })


// median of even numb
const base = document.querySelector("#a");
document.querySelector("#btn").addEventListener("click", ()=>{
    const bvalue = base.value;
    const bsplit = bvalue.split(", ")
    const mL = parseInt(bsplit.length);

    if(mL % 2 === 0){
        const sort = bsplit.sort((a,b)=> a-b)
        const len = sort.length
        const d2 = len/2;
        const olen = d2-1;
        const st = sort[olen]
        const st2 = sort[olen + 1]
    
        let n1 = st/2
        let n2 = st2/2
        const ad = n1+n2;
        document.querySelector(".s-ans").innerHTML = `The median number is ${ad}`;
    }else{
            const sort = bsplit.sort((a,b)=> a-b)
        const olen = bsplit.length-1 ;
        const d2 = olen/2;
        document.querySelector(".s-ans").innerHTML = `The median number is ${sort[d2]}`;
    }

 
})
