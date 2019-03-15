$(document).on("mobileinit", function() {
    $(function(){

        $(document).on('swipeleft', '.ui-page', function(event){
            //La variable sig(siguiente) detecta la pagina que tiene la clase active, y selecciona la siguiente dentro de un array formado por todos los elementos con data-role"page" 
            let sig = $.mobile.activePage.next('[data-role="page"]'); 
            let ant = $(this).prev('[data-role="page"]');
            let left = $("#main").prev('[data-role="page"]');
            if (sig.length > 0) {
                $.mobile.changePage(sig, {transition: "slide", reverse: false}, true, true);
            }
           //Este else sirve para hacer el efecto carrusel
            else{
                $.mobile.changePage(left, {transition: "slide", reverse: true}, true, true);
            }

        });
        
        //La variable ant(anterior) hace lo mismo que sig, pero en vez de detectar el siguiente elemento del array, detecta el anterior
        $(document).on('swiperight', '.ui-page', function(event){     
            ant = $.mobile.activePage.prev('[data-role="page"]'); 
            sig = $(this).next('[data-role="page"]');   
            let right = $("#main").next('[data-role="page"]');                      
            if (ant.length > 0) {
                $.mobile.changePage(ant, {transition: "slide", reverse: true}, true, true);
            }
            //Este else sirve para hacer el efecto carrusel
            else{
                $.mobile.changePage(right, {transition: "slide", reverse: false}, true, true);
            }
        });

    });
})