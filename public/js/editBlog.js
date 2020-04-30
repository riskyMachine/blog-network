import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Embed from '@editorjs/embed'
import ImageTool from '@editorjs/image'

var _id = document.getElementById('blog-id').innerHTML
var data;

fetch('/' + _id + '/blogJson').then(res => {
    res.json().then( obj => {
        data = obj.blog
        renderEditor(data)
        console.log(obj)
    })
})

function renderEditor(data){
    const editor = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link']
            },
            list:{
                class: List,
                inlineToolbar: true
            },
            embed:{ 
                class: Embed,
                inlineToolbar: false,
                config:{
                    services: {
                        youtube: true,
                        coub: true,
                    }
                }
            },
            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: '/uploadImage', 
                        byUrl: '/fetchbyurl',                
                    }
                }
            }
        },
        data: data
    })
    
    let saveBtn = document.getElementById('save-btn')
    saveBtn.addEventListener('click',function(){
        editor.save().then(data => fetch('/newBlog',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .catch(e => console.log('Error: ', e)))
    })
}