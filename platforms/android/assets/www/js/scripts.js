$().ready(function() {
	$("#contact-form").validate({
		errorLabelContainer: $("#contact-form div#errors"), 
		rules: {
			user_name: { required: true, minlength: 2 },
			user_email: { required: true, email: true }, 
			user_id: { required: true, number: true, minlength: 10, maxlength: 10 }, 
			user_mobile: { required: true, number: true, minlength: 10, maxlength: 10 }, 
			subject: { required: true }, 
			content: { required: true }
		},
		submitHandler: function() {
			var ajax_call = 'http://www.adm.gov.sa/mobile_app/sendEmail.php';
			var form_data = $('#contact-form').serializeArray();
			$.ajax({
				type: "POST",
				url: ajax_call,
				data: form_data,
				dataType: "html",
				success: function(response) {
					//called when successful
					alert('submitted!');
				},
				error: function(e) {
					//called when there is an error
					console.log(e.message);
				}
			});
			
		},
		onkeyup: false
	});
});