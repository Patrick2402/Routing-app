import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
    const data = useActionData();
    return (
        <div className="contact">
            <h2>Contact us</h2>
            <Form method="post" action="/contact">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Sumbit</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
      );
}
 
export default Contact;
// reqest przechowywa wszystkie input value z forma
export const contactAction = async ({ request }) =>{
    const data = await request.formData();
    const submission = {
        email:data.get('email'),
        message:data.get('message')
    }

    console.log(submission);
    // send post request
    if(submission.message.length < 10){
        return { error: 'message must be over 10 chars long'};
    }

    //redirect the user
    return redirect('/'); // przekierowuje urzytkownika do /
}