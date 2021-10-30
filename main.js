$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#example tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Buscar '+title+'" />' );
    } );
 
    // DataTable
    var table = $('#example').DataTable({
        initComplete: function () {
            // Apply the search
            this.api().columns().every( function () {
                var that = this;
 
                $( 'input', this.footer() ).on( 'keyup change clear', function () {
                    if ( that.search() !== this.value ) {
                        that
                            .search( this.value )
                            .draw();
                    }
                } );
            } );
        },

        "ajax":"listado.json",
        "columns": [
        {"data":"Id"},
        {"data":"Marca"},
        {"data":"Elemento"},
        {"data":"Modelo"},
        ],
        "bSort" : false ,
        "oLanguage": {
        "sSearch": "Buscar: ",
        "sLengthMenu": "Motrar _MENU_ filas",
        "sInfo": "Un total de  _TOTAL_ registros para mostrar (_START_ a _END_)",
        "oPaginate": {
            "sNext": "Siguiente",
            "sPrevious": "Anterior",
            "sInfoEmpty": "No hay productos para mostrar",
            },

        },
    });
 
} );


// Glide
const config ={
    type: 'carousel',
    perView:4,
    gap: 20,
    breakpoints: {
        1024: {
          perView: 3
        },
        600: {
          perView: 2
        }
      }
}

var sliders = document.querySelectorAll('.glide');

for (var i = 0; i < sliders.length; i++) {
  var glide = new Glide(sliders[i], config);
  
  glide.mount();
}