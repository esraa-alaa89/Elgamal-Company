export async function sendEmail(formValues, fileUrl) {
  emailjs.init("fyPZywDuTg2hi9n2T"); // Public Key

  const popupMessage= document.querySelector('.form-confirmation');
  const popupIcon= document.querySelector('.confirmation-container i');
  const popupText= document.querySelector('.confirmation-container h4');
  const paragrapgNote= document.createElement('p');
  paragrapgNote.textContent= 'Please try again';

  try {
    await emailjs.send("service_8gzv0o7", "template_4uo9qpp", {
      user_name: formValues.name, 
      user_email: formValues.email,
      user_message: formValues.message,
      file_link: fileUrl,
    });
    popupText.innerHTML= 'Your data has been sent successfully!';
    popupIcon.classList.add('fa-check');
  } 
  catch (error) {
    console.error("Error sending message:", error);
    popupText.innerHTML= 'Trouble has been occured!';
    popupText.after(paragrapgNote);
    popupIcon.classList.add('fa-xmark');
  }
  popupMessage.style.opacity= 1;
}