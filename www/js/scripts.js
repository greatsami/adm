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
		messages: {
			user_id: { number: "الرجاء إدخال رقم الهوية بشكل صحيح", minlength: "الرجاء إدخال رقم الهوية بشكل صحيح", maxlength: "الرجاء إدخال رقم الهوية بشكل صحيح" }, 
			user_mobile: { number: "الرجاء إدخال رقم الجوال بشكل صحيح", minlength: "الرجاء إدخال رقم الجوال بشكل صحيح", maxlength: "الرجاء إدخال رقم الجوال بشكل صحيح" }
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
					// alert('submitted!');
					$('html,body').animate({scrollTop: $("#theTop").offset().top},'slow');	
					$('#message').html("<div class=\"successwoicon_msg\"><p>تم إرسال الرسالة، سيتم التواصل معكم قريباً.</p></div>");
					$('#contact-form')[0].reset();
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