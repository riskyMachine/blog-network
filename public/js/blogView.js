const container = document.getElementById('blog')
function createP(text){
    text = text.replace(/\&nbsp;/g,'')
    var p = document.createElement('p');
    var textNode = document.createTextNode(text)
    p.appendChild(textNode)
    container.appendChild(p)
}

function createH (text, level){
    text = text.replace(/\&nbsp;/g,'')
    var h = document.createElement('H' + level)
    h.setAttribute('style','text-align: center')
    var textNode = document.createTextNode(text)
    h.appendChild(textNode)
    container.appendChild(h)
}

function createList (style,itemsArray){
    var listStyle = style ==='ordered' ? 'OL': 'UL';
    var list = document.createElement(listStyle)
    itemsArray.forEach(el => {
        var li = document.createElement('LI')
        var textNode = document.createTextNode(el)
        li.appendChild(textNode)
        list.appendChild(li)
        container.appendChild(list)        
    })
}

function createEmbed (embedUrl,caption) {
    var ifrm = document.createElement('iframe')
    var divFrame = document.createElement('div')
    var capEl = document.createElement('p')
    var textNode = document.createTextNode(caption)
    capEl.setAttribute('style','font-weight:600')
    capEl.appendChild(textNode)
    divFrame.setAttribute('style','text-align: center')
    // ifrm.setAttribute("title", caption)
    ifrm.setAttribute("style", "border-radius: 15px")
    ifrm.setAttribute("src", embedUrl)
    ifrm.style.width = "600px";
    ifrm.style.height = "400px";
    container.appendChild(divFrame)
    divFrame.appendChild(ifrm)
    divFrame.appendChild(capEl)
}

function createImage(url,caption){
    var figure = document.createElement('FIGURE')
    figure.setAttribute('style','text-align: center')
    var figCaption = document.createElement('FIGCAPTION')
    figCaption.setAttribute('style', 'font-weight: 600')
    var textNode = document.createTextNode(caption)
    var image = document.createElement('IMG')
    image.setAttribute('style','width: 600px; height: 400px;')
    image.setAttribute("style", "border-radius: 15px")
    image.setAttribute('src',url)
    image.classList.add('image')
    figure.appendChild(image)
    figure.appendChild(figCaption)
    figCaption.appendChild(textNode)
    container.appendChild(figure)
}

function createdAt(time){
    var created = new Date(time)
    // var timeStr = created.toDateString() +' '+created.toLocaleTimeString()
    var timeEl= document.createElement('p')
    var textNode = document.createTextNode(created)
    timeEl.setAttribute('style','color: grey;')
    timeEl.appendChild(textNode)
    container.appendChild(timeEl)
}

function viewBlog (jsonObj) {
    var blocks = jsonObj.blog.blocks
    createdAt(jsonObj.blog.time)
    blocks.forEach( el => {
        switch(el.type){
            case "header":
                createH(el.data.text, el.data.level)
                break;
            case "embed":
                createEmbed(el.data.embed,el.data.caption)
                break;
            case "image":
                createImage(el.data.file.url,el.data.caption)
                break;
            case "paragraph":
                createP(el.data.text);
                break;
            case "list":
                createList(el.data.style,el.data.items)
                break;
            default:
                break;
        }
    })
}
var _id = document.getElementById('blog-id').innerHTML
console.log(_id)
fetch('/' + _id + '/blogJson').then(res => {
    res.json().then( obj => {
        document.getElementById('loading').style.display = 'none'
        viewBlog(obj)
        console.log(obj)
    })
}) 