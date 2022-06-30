form = document.querySelector('.contact_form');
function sendmsg(e) {
  e.preventDefault();

  const name = document.querySelector('.name'),
    label = document.querySelector('.label'),
    mail = document.querySelector('.email'),
    msg = document.querySelector('.msg');


  Email.send({
    SecureToken: "264818b8-2274-49ba-8086-8eb9ba15dcba",
    To: 'support@realcraft.lu',
    From: 'support@realcraft.lu',
    Subject: label.value,
    Body: mail.value + " :|  " + msg.value
  }).then(
    message => alert(message)
  );
}

form.addEventListener('submit', sendmsg)
