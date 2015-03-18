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
			alert('submitted!');
		},
		onkeyup: false
	});
});