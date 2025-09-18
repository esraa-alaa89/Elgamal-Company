import { sendEmail } from "../utils/email.js";
import { uploadFileToCloudinary } from "../utils/uploadFile.js";

export function handleContactLogic() {

    const form = document.getElementById("contact-form"); // select form_element   
    const fileInput = document.getElementById("fileField"); // select file_input

    // HANDLE UPLOADING FILE TO SEND
    const fileDiv= document.querySelector('form .uploadFile-div');

    fileDiv.addEventListener('click', ()=> {
        fileInput.click();
    });
    fileInput.addEventListener('change', (e)=>{
        
        const selectedFilePath= e.target.value;
        if (selectedFilePath) {  
            const file= selectedFilePath.split("\\"); // split is a function return [] of elements depending on the seperator
            fileDiv.innerHTML= file[file.length-1];
        }
    })

    // Handle form submission
    document.getElementById("contact-form").addEventListener("submit", async (e) => {
        
        // to prevent reloading_page
        e.preventDefault();

        // Upload file if exists
        let fileUrl = "";
        if (fileInput.files.length > 0) {
            fileUrl = await uploadFileToCloudinary(fileInput.files[0]);
        }


        // Collect form values
        const formValues = {
            name: form.user_name.value,
            email: form.user_email.value,
            message: form.user_message.value,
        };
        
        // Send email
        await sendEmail(formValues,fileUrl);

        // Reset form after submission
        form.reset();
        fileInput.value='';

    });
    

}