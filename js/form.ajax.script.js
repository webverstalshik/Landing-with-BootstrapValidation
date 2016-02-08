
php_path= "../form-script.php"; //путь к исполняющему файлу формирования письма

$("#defaultForm").submit(function(event){
// действие при нажатии подтверждения
event.preventDefault();
submitForm();
});

function submitForm(){
// Переменные с данными из формы
var name = $("#name").val();
var phone = $("#phone").val();
var describe = $("#describe").val();

var formValidation = $('#defaultForm').data('bootstrapValidator');

//Выполнять только если прошел валидацию
    if (formValidation.isValid()) { 
    var form_data=$(this).serialize();

$.ajax({
type: "POST",
url: php_path,
data: "name="+ name + "&phone="+ phone + "&describe=" + describe,
success : function(text){
if(text == "success"){
formSuccess();
} else {
formError();
}}});
} else {  
  //если не прошел валидацию, то пройти ее
 formValidation.validate();
}    
}


//отображение текста успеха и очистка формы
function formSuccess(){
	$("#msgSuccess").removeClass("hidden");
	setTimeout(function() {
		$("#orderModal").modal('hide');
		$('#defaultForm').bootstrapValidator('resetForm', true);
		$("#msgSuccess").addClass("hidden");
		$("input#describe").val('');
	}, 3000);
	
}

//отображение текста неудачи и очистка формы
function formError(){
	$("#msgError").removeClass("hidden");
	setTimeout(function() {
		$("#orderModal").modal('hide');
		$('#defaultForm').bootstrapValidator('resetForm', true);
		$("#msgError").addClass("hidden");
		$("input#describe").val('');
	}, 3000);
	
}
