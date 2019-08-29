(function () {
    'use strict';
    var draggedEl,
        onDragStart,
        onDrag,
        onDragEnd,
        grabPointY,
        grabPointX,
        createNote,
        addNoteBtnEl,
        init,
        testLocalStorage,
        saveNote,
        deleteNote,
        loadNotes,
        getNoteObject,
        onAddNoteBtnClick;

    onDragStart = function (ev){
        var boundingClientRect;
        if(ev.target.className.indexOf('bar')===-1){
            return;
        }
        draggedEl = this;
        //console.log(`dragged el = ${draggedEl.className}`)
        boundingClientRect = draggedEl.getBoundingClientRect();
        //console.log(boundingClientRect);
        //console.log(ev.clientX);
        grabPointY = boundingClientRect.top - ev.clientY;
        grabPointX = boundingClientRect.left - ev.clientX;
        //console.log(grabPointX);
        //console.log(draggedEl);

    }

    onDrag = function(ev){
        if(!draggedEl){
            return;
        }

        var posX = ev.clientX + grabPointX;
        var posY = ev.clientY + grabPointY;

        if(posX<0){
            posX =0;
        }

        if(posY<0){
            posY=0;
        }

        //console.log(posY,posX);

        draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
  
        //console.log(draggedEl.style.transform);
    };

    onDragEnd = function(){
      draggedEl = null;
      grabPointX = null;
      grabPointY =null;  
    };

    getNoteObject = function(el){
        var textarea = el.querySelector('textarea');
        return{
            content: textarea.value,
            id: el.id,
            transformCSSValue: el.style.transform,
            textarea:{
                width: textarea.style.width,
                height: textarea.style.height
            }
        }
    }

    createNote = function(options){
        var stickerEl = document.createElement('div'),
            barEl = document.createElement('div'),
            textareaEl = document.createElement('textarea'),
            saveBtnEl = document.createElement('button'),
            deleteBtnEl = document.createElement('button'),
            onmouseleave,
            onSave,
            onDelete,
            BOUNDARIES = 400,
            loadNotes,
            noteConfig = options || {
                content: '',
                id: 'sticker_' + new Date().getTime(),
                transformCSSValue: 'translateX(' + Math.random() * BOUNDARIES +"px) "+ "translateY(" + Math.random() * BOUNDARIES +"px)"
            };
        
        onDelete = function(){
            var obj = {};
            deleteNote(
                getNoteObject(stickerEl)
            );
            document.body.removeChild(stickerEl);
        }

        onSave = function(){
            //console.log(getNoteObject(stickerEl));
            saveNote(
                getNoteObject(stickerEl)
                );
        };

        if(noteConfig.textarea){
            textareaEl.style.width = noteConfig.textarea.width;
            textareaEl.style.height = noteConfig.textarea.height;
            textareaEl.style.resize = 'none';
        }


        stickerEl.id = noteConfig.id;
        textareaEl.value = noteConfig.content;

        saveBtnEl.addEventListener('click', onSave);
        deleteBtnEl.addEventListener('click', onDelete);

        saveBtnEl.classList.add('saveButton');
        deleteBtnEl.classList.add('deleteButton');

        
        stickerEl.style.transform = noteConfig.transformCSSValue;
        

        barEl.classList.add('bar');
        stickerEl.classList.add('sticker');

        barEl.appendChild(saveBtnEl);
        barEl.appendChild(deleteBtnEl);
        

        stickerEl.appendChild(barEl);
        stickerEl.appendChild(textareaEl);

        stickerEl.addEventListener("mousedown", onDragStart,false);
        document.body.appendChild(stickerEl);
    }

    testLocalStorage = function(){
        var foo = 'foo';
        try{
            localStorage.setItem(foo,foo);
            localStorage.removeItem(foo);
            return true;
        }
        catch(e){
            return false;
        }
    }

    onAddNoteBtnClick = function(){
        createNote();
    };


    init = function(){

        if(!testLocalStorage()){
            var message = "We are sorry but you cannot use local storage";
            saveNote = function(){
                console.warn(message);
            }
            
            deleteNote = function(){
                console.warn(message);
            }
        }
        else{
            saveNote = function(note){
                localStorage.setItem(note.id, JSON.stringify(note));
            }

            deleteNote = function(note){
                localStorage.removeItem(note.id);
            }

            loadNotes = function (){
                for (var i=0;i<localStorage.length; i++)
                {
                    var getNoteObject = JSON.parse(
                    //console.log(
                        localStorage.getItem(
                            localStorage.key(i))
                        );
                        createNote(getNoteObject);
                }
            };

            loadNotes();
        }

        createNote();
        addNoteBtnEl = document.querySelector('.addNoteBtn');
        addNoteBtnEl.addEventListener('click',onAddNoteBtnClick,false);
        document.addEventListener('mousemove',onDrag,false);
        document.querySelector('.sticker').addEventListener('mousedown',onDragStart,false);
        document.addEventListener('mouseup',onDragEnd,false);
    }


    init();
    
    

})();