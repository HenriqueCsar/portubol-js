//============================================//
    // CREATED BY HENRIQUECSAR
    // Portubol-js
//============================================//


pt = {

    alerta_navegador: function(msg){ 
                if ( typeof( msg ) == 'function' ){
                    alert( msg() )
                } else {
                    alert( msg ) 
                }
        },

    adicionar_evento:      function( obj, type, fn ) { obj.addEventListener(type, fn), false },

    adicionar_evento_doc:  function( type, fn ) { document.addEventListener(type, fn), false },

    selecionar_elemento:   function( obj ) { return document.querySelector(obj) },

    selecionar_elementos:  function( obj ) { return document.querySelectorAll(obj) },
    
    remover_evento:        function( obj , type, fn ) { obj.removeEventListener(type, fn), false },
    
    ao_abrir_a_pagina:     function( fn ) { pt.adicionar_evento(document, 'DOMContentLoaded', fn) },
    
    adicionar_classe:      function( obj , className ) {
        
        if(obj.target){
            
            obj = "#"+obj.target.id
            
            document.querySelector(obj).classList.add(className) 

            if(typeof(className)=='string' && className.split(' ').length==1) { 
        
                document.querySelector(obj).classList.add(className) 
            
            }
            
            else if(typeof(className)=='string' && className.split(' ').length>1) {
            
                var classNames = className.split(' ');
            
                classNames.map((objs)=>{
                    document.querySelector(obj).classList.add(objs); 
                })
            
            }
    
            else if(typeof(className) == 'function'){
            
                var retorno = className;
            
                document.querySelector(obj).classList.add(retorno())
    
            }

        }

        
        if(typeof(className)=='string' && className.split(' ').length==1) { 
        
            document.querySelector(obj).classList.add(className) 
        
        }
        
        else if(typeof(className)=='string' && className.split(' ').length>1) {
        
            var classNames = className.split(' ');
        
            classNames.map((objs)=>{
                document.querySelector(obj).classList.add(objs); 
            })
        
        }

        else if(typeof(className) == 'function'){
        
            var retorno = className;
        
            document.querySelector(obj).classList.add(retorno())

        }
    
    },


    remover_classe:      function( obj , className ) {
        
        console.log(obj.target)
        
        if(obj.id){
            obj = "#"+obj.id

            document.querySelector(obj).classList.remove(className) 

            if(typeof(className)=='string' && className.split(' ').length==1) { 
        
                document.querySelector(obj).classList.remove(className) 
            
            }
            
            else if(typeof(className)=='string' && className.split(' ').length>1) {
            
                var classNames = className.split(' ');
            
                classNames.map((objs)=>{
                    document.querySelector(obj).classList.remove(objs); 
                })
            
            }
    
            else if(typeof(className) == 'function'){
            
                var retorno = className;
            
                document.querySelector(obj).classList.remove(retorno())
    
            }

        }




        if(obj.target){
            
            obj = "#"+obj.target.id
            
            document.querySelector(obj).classList.remove(className) 

            if(typeof(className)=='string' && className.split(' ').length==1) { 
        
                document.querySelector(obj).classList.remove(className) 
            
            }
            
            else if(typeof(className)=='string' && className.split(' ').length>1) {
            
                var classNames = className.split(' ');
            
                classNames.map((objs)=>{
                    document.querySelector(obj).classList.remove(objs); 
                })
            
            }
    
            else if(typeof(className) == 'function'){
            
                var retorno = className;
            
                document.querySelector(obj).classList.remove(retorno())
    
            }

        }

        
        if(typeof(className)=='string' && className.split(' ').length==1) { 
        
            document.querySelector(obj).classList.remove(className) 
        
        }
        
        else if(typeof(className)=='string' && className.split(' ').length>1) {
        
            var classNames = className.split(' ');
        
            classNames.map((objs)=>{
                document.querySelector(obj).classList.remove(objs); 
            })
        
        }

        else if(typeof(className) == 'function'){
        
            var retorno = className;
        
            document.querySelector(obj).classList.remove(retorno())

        }
    
    },




    a_cada: function(obj, fn){
        pt.selecionar_elementos(obj).forEach(e =>{
            fn(e);
        })
    }

}