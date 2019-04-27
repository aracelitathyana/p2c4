$("#btnregistrar").click(function (e) { 
        e.preventDefault();
        registrar();
});

function registrar(){
	var nom = $("#txtnombres").val();
	var apepat = $("#txtapellidop").val();
	var apemat = $("#txtapellidom").val();
	var email = $("#txtemail").val();
$.ajax({
	type: "POST",
	url: "datos.php",
	data: {
			"txtnombres":nom, 
			"txtapellidop":apepat, 
			"txtapellidom":apemat, 
			"txtemail":email
		},
	success: function(response){
		console.log(response); //Da un mensaje en la consola del navegador
	},
})

}

