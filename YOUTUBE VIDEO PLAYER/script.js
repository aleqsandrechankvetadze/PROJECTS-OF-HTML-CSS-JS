let nextBtn = document.getElementById("next")
let backBtn = document.getElementById("back")
let video = document.getElementById("video")
let h1 = document.getElementById("satauri-h1")
let body = document.body

let videos = [
/*Bxnny1*/   src="https://www.youtube.com/embed/SDO2Bkh8d8I?si=p-Z9ZO0Z4p2zFzOG",
/*Akebstar*/ src="https://www.youtube.com/embed/zCyFegFXBfs?si=5fYL4RHVYGN0_WYp", 
/*Bxnny2*/   src="https://www.youtube.com/embed/SKmgLe4FTLc?si=t007CtVb-bn7HcAB",
/*GT63S*/    src="https://www.youtube.com/embed/U4ntHc88-6I?si=h3-LMpjE8WUSbbCs"  
    
]

let count = 0

nextBtn.addEventListener('click',function(){
    
    count+=1
    console.log(count)
    if(count >= videos.length){
        count = 0
    }

    video.src = videos[count]
    

    // if(count == 1){
    //     video.src = videos[1]
    //     h1.textContent = "700$ მონიტორი, ელექტრო გაგრილება, SULAVA და კარგი კაცი DCP #9"
    //     body.style.textAlign = "center"
    //     body.style.fontSize = "15px"
    // }
    // if(count == 2){
    //     video.src = videos[2]
    //     h1.textContent = "BXNNY ROUND 2 (1/2 PVPFLOWSEASON2)"
    //     body.style.textAlign = "center"
    // }

    // if(count == 3){
    //     video.src = videos[3]
    //     h1.textContent = "Mercedes-AMG GT 63 S 4Door REVIEW POV"
    //     body.style.textAlign = "center"
    // }

    // if(count == videos.length){
    //     count = 0
    //     video.src = videos[count]
    //     h1.textContent = "BXNNY ROUND 1 (1/2 PVPFLOWSEASON2)"
    // }

    
})

backBtn.addEventListener('click',function(){
    count -= 1

    if(count < 0){
        count = videos.length - 1
    }
    video.src = videos[count]
    })