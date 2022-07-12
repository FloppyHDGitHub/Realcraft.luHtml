form = document.querySelector('.contact_form');
function sendmsg(e) {
  e.preventDefault();

  //set a constante/vabriable 'variable = document.querySelector('class from which the variable should get its value')'

  const name = document.querySelector('.name'),
    label = document.querySelector('.label'),
    mail = document.querySelector('.email'),
    title = document.querySelector('.title'),
    company = document.querySelector('.company'),
    msg = document.querySelector('.msg');


  // encrypt the value from the variable/constante and use it 'variable.value'

  Email.send({
    SecureToken: "264818b8-2274-49ba-8086-8eb9ba15dcba",
    To: 'support@realcraft.lu',
    From: 'support@realcraft.lu',
    Subject: label.value,
    Body: "Email  -->  " + mail.value + "   Company  -->  " + company.value + "   Name  -->  " + title.value + " " + name.value + "  :|  " + msg.value
  }).then(
    message => alert(message)
  );
}

form.addEventListener('submit', sendmsg)
