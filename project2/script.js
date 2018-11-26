new Vue({
    el:'#notebook',
    data:()=>{
        return{
            content:localStorage.getItem('content')||" nothing save before",
            notes:[],
        }
    },
    
    computed:{
        notePreview(){
            return marked(this.content);
        }
    },
    watch:{
        content:{
            handler:'saveNote'
        }
    },
    methods:{
        saveNote(val){
            console.log("saving note:",val);
            localStorage.setItem('content',val);
           
        },
        getNote(){
            return localStorage.getItem('content');
        },
        addNote(){
            const time = Date.now();
            const note = {
                id:String(time),
                title:'New Note ' +(this.notes.length+1),
                content: '**Hi!** This notebook is using[markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
                created:time,
                favorite:false,
                
            };
            this.notes.push(note);
        }
        
    }
})