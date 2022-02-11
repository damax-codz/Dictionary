
function meanings(){ 
    let audio = document.getElementById('myaudio')
    let input = document.getElementById('mytext')
    let answerContainer=document.querySelector('.answer')
    let container=document.querySelector('.contain')
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
.then(response=>response.json())
.then( data=> {    
    document.querySelector('h1').innerHTML=`${data[0].word}`
    document.getElementById('defone').innerHTML=`<b>Definition:</b> ${data[0].meanings[0].definitions[0].definition}`
   
    document.getElementById('phonetics').innerHTML=`<b>Transcription:</b> /${data[0].phonetic}/`
   
    audio.src=`https://${data[0].phonetics[0].audio}`;
    
    answerContainer.style.left='25%'

    container.style.visibility='hidden'
})
}

function check(event){
    let input = document.getElementById('mytext')
    let x = event.charCode
    if (x==13) {
        meanings()
        input.value=''
    }
}
speak = ()=>{
    let audio = document.getElementById('myaudio')
    audio.play()
}
refix = ()=>{
    let answerContainer=document.querySelector('.answer')
    let container=document.querySelector('.contain')
    answerContainer.style.left='100%'
    container.style.visibility='visible'
}