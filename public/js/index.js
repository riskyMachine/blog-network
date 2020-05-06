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
                        if(!img && el.type === 'image'){
                            img = el.data.file.url
                        }else if(!header && el.type === 'header'){
                            header = el.data.text.replace(/\&nbsp;/g,'')
                        }else{

                        }
                    })
                    if(!img){
                        img = 'http://rohan-blog-network.herokuapp.com/5eb2e2f2063f970017addf19/image'
                    }
                    if(!header){
                        header = 'Untitled'
                    }
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
    a.setAttribute('href',`/${data.id}/genView`)
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
