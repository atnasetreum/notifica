document.write('<script type="text/javascript" src="src/js/pnotify/src/pnotify.js"><\/script>');

document.write('<link rel="stylesheet" href="src/js/pnotify/src/pnotify.css"\/>');

$.extend({
        notifica: function(obj){// notifica

            var titulo = 'Atención';
            var msj    = 'Mensaje default';
            var tiempo  = 1.5;
            var tipo   = '';
            var icono  = 'fa fa-info fa-2x';

            if(typeof obj !== undefined && typeof obj === 'object'){

                if(obj.titulo !== undefined){
                    titulo = obj.titulo;
                }
                if(obj.msj !== undefined){
                    msj = obj.msj;
                }
                if(obj.tiempo !== undefined){
                    tiempo = obj.tiempo;
                }

                if(obj.tipo !== undefined){
                    switch(obj.tipo){
                        case 'ok':
                            tipo  = 'success';
                            icono = 'fa fa-check-square-o fa-2x';
                        break;
                        case 'info':
                            tipo  = 'info';
                            icono = 'fa fa-info fa-2x';
                        break;
                        case 'error':
                            tipo  = 'error';
                            icono = 'fa fa-exclamation-triangle fa-2x';
                        break;
                    }
                }
            }

            var notice = new PNotify({
                title: '<h4>'+titulo+'</h4>',
                text : msj,
                icon : icono,
                buttons: {
                    closer : false,
                    sticker: false
                },
                animate: {
                    animate  : true,
                    in_class : 'slideInDown',
                    out_class: 'slideOutUp'
                },
                delay   : (Number(tiempo) * 1000),
                type    : tipo,
                addclass: "stack-bar-top"

            });

            notice.get().click(function() {
                notice.remove();
            });

            /*setTimeout(function () {
              alert((Number(tiempo) * 1000));
              PNotify.removeAll();
            }, (Number(tiempo) * 1000));*/
        }// notifica
    });


jQuery(document).ready(function($) {
    PNotify.prototype.options.styling = "bootstrap3";
    PNotify.prototype.options.styling = "fontawesome";
});