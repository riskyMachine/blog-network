var skipped = 0
var fetchStatus = 1

function getImage(url){
    fetch(url)
    .then(res => res.json()
    .then(data => {
        fetchStatus = data.msg
        if(fetchStatus !== -1){
            removeChild()
            data.forEach(e =>{
            createImage(`/${e._id}/image`)
            })
        }
    }))
}
getImage('/galleryJson?skip=0')

function createImage(src){
    let div1 = document.createElement('div')
    let img = document.createElement('IMG')
    img.setAttribute('style','height: 350px; width: 300px; margin-right: 20px;')
    img.setAttribute('src',src)
    img.setAttribute('class','rounded float-left img-thumbnail')
    div1.appendChild(img)
    document.getElementById('main-div').appendChild(div1)
}

document.getElementById('next').addEventListener('click',() => {
    skipped= skipped + 9
    let url = '/galleryJson?skip=' + skipped
    getImage(url)
    //doesn't runs for first time since fetch takes more time to set fetchStatus === -1
    if(fetchStatus === -1){ 
        skipped = skipped - 9
    }
})

document.getElementById('previous').addEventListener('click',() => {
    if(skipped > 0){
        skipped = skipped - 9
        let url = '/galleryJson?skip=' + skipped
        getImage(url)
    }
    fetchStatus = 1
})

function removeChild(){
    var el = document.getElementById('main-div')
    var child = el.lastElementChild;  
    while (child) {
        el.removeChild(child); 
        child = el.lastElementChild; 
    }
}