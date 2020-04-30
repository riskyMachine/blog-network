var skipped = 0
var fetchStatus = 1

function fetchBlogs(url){
    fetch(url).then(res => {
        res.json().then( data => {
            fetchStatus = data.msg
            if(fetchStatus !== -1){
                removeChild()
                data.forEach( el => {
                    let block = el.blog.blocks
                    let img , header;
                    let id = el._id
                    block.forEach(el => {
                        if(el.type === 'image'){
                            img = el.data.file.url
                        }else if(el.type === 'header'){
                            header = el.data.text.replace(/\&nbsp;/g,'')
                        }else{
                            if(!img){
                                img = 'http://localhost:3000/5e9e1a5c99ba1c2b80cc72d1/image'
                            }
                            if(!header){
                                header = 'Untitled'
                            }
                        }
                    })
                    createCard({img,header,id})
                })
            }
        })
    })
}
fetchBlogs('/allBlogs?skip=0')

function createCard(data){
    var div1 = document.createElement('div')
    div1.setAttribute('class','card h-100')
    div1.setAttribute('style','width: 18rem; margin-right: 20px;')

    var img = document.createElement('IMG')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src',data.img)
    img.setAttribute('alt','Card image cap')

    var div2 = document.createElement('div')
    div2.setAttribute('class','card-body')
 
    var h = document.createElement('h5')
    h.setAttribute('class','card-title')

    var a = document.createElement('a')
    a.setAttribute('href',`/${data.id}/blog`)
    a.setAttribute('style','text-decoration: none')
    a.setAttribute('target','_blank')

    var textNode = document.createTextNode(data.header)
    a.appendChild(textNode)

    h.appendChild(a)
    div2.appendChild(h)
    div1.appendChild(img)
    div1.appendChild(div2)
    document.getElementById('main-div').appendChild(div1)
}

var _id = document.getElementById('user-id').innerHTML
var avatar = document.getElementById('user-avatar').innerHTML
var url = `/user/${_id}/avatar`
function createProfileImg(url){
    if(avatar){
        document.getElementById('img-form').style.display = 'none'
        var img = document.createElement('IMG')
        img.setAttribute('src',url)
        img.setAttribute('style','border-radius: 10px;')
        document.getElementById('display-avatar').appendChild(img)
    }else{
        document.getElementById('img-form').style.display = 'block'
        document.getElementsByClassName('remove-pic')[0].style.display = 'none'
    }
}
createProfileImg(url)

document.getElementById('next').addEventListener('click',() => {
    skipped= skipped + 6
    let url = '/allBlogs?skip=' + skipped
    fetchBlogs(url)
    if(fetchStatus === -1){
        skipped = skipped - 6
    }
})

document.getElementById('previous').addEventListener('click',() => {
    if(skipped > 0){
        skipped = skipped - 6
        let url = '/allBlogs?skip=' + skipped
        fetchBlogs(url)
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