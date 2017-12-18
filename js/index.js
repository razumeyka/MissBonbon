$(function(){
   $('#contact-form button[type=button]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/anastasiya.razumeyko@gmail.com", 
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                feedback: $('#message').val()
            },
            dataType: "json"
        })
         .done( () => $('#thank-dialog').attr('open', 'open') )
         .fail( () => $('#error-dialog').attr('open', 'open') );    
    }
}
