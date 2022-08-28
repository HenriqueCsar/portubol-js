//============================================//
    // CREATED BY HENRIQUECSAR
    // Portubol-js
//============================================//


pt = {

    adicionar_evento:  function( obj , type, fn ){ obj.addEventListener(type, fn), false },
    
    remover_evento:    function( obj , type, fn ){ obj.removeEventListener(type, fn), false },
    
    ao_abrir_a_pagina: function( fn ){ pt.adicionar_evento(document, 'DOMContentLoaded', fn) },
    
    adicionar_classe:  function( obj , className ) { 
        if(typeof(className)=='string' && className.split(' ').length==1) { 
            document.querySelector(obj).classList.add(className) 
        }
        
        if(typeof(className)=='string' && className.split(' ').length>1) {
            var classNames = className.split(' ');
            classNames.map((objs)=>{
                document.querySelector(obj).classList.add(objs); 
            })
        }
    
    },

}