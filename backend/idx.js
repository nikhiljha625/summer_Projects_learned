// DOM manupulation

// Events=>user interaction 

// let onclick = ()=>{
//     let cnt=new Number(document.getElementsByTagName("span")[0].innerHTML);
//     cnt=cnt+1;
//     document.getElementsByTagName("span")[0].innerHTML=cnt;
//     document.getElementsByTagName("body")[0].style.backgroundColor="grey";
// }

// document.getElementsByTagName("button")[0].addEventListener(
//     "click",onclick
// )


// event capturing => top to bottom in dom tree

// event bubbling => bottom to top

/*When set to true, options's capture prevents callback from being invoked
when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present),
callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
 Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

 */

// document.getElementsByTagName("button")[0].addEventListener(
//     "click", ()=>{
//         console.log("button");
//     },false
// )

// document.getElementsByTagName("div")[0].addEventListener(
//     "click", ()=>{
//         console.log("div");
//     },true
// )

// document.getElementsByTagName("body")[0].addEventListener(
//     "click", ()=>{
//         console.log("body");
//     },false
// )

// //  (e)=>{
// //     e.stoppropagation();   // to stop propagation 
// // }

// promise => data type

// let checkuser = (email)=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res({"name":"nikhil"})
//         },2000)
//     })
// }

// let x=checkuser("nikhiljha@gmail.com")
// console.log(typeof(x))
// console.log(x);

// x.then((res)=>{
//     console.log(res);
// }).catch((err)=>{

// })

// finction + lexical environment =>closure 