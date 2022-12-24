import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.jsx';
import Button from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.styles.jsx";

const defaultFormFields ={
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}



const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [checked, setChecked] = useState(false)

    //destructured the default state thatis now set to the default formfield
    const {displayName, email, password, confirmPassword} = formFields;
    //here i need to update the current user and tthus i used
    //contexxt to pass the props from the top. if i needed the 
    //current ser for anything it would easily be passed here too
    





const resetFormFields = () =>{
    setFormFields(defaultFormFields);
}

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password mismatch");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password);
            //i used the et function i got from thee context to update my current here
        

             await createUserDocumentFromAuth(user, {displayName});
             setChecked(prev => !prev)
             resetFormFields();

        }catch(error){
            console.log(error)
            
            if(error.code === 'auth/email-already-in-use'){
               alert("cannot create user, email already in use")
             }else{
                 console.log('user creation encountered an error Tobias', error)
             }
        }
    }


    const handleChange = (event) =>{
        //destructuring the event. target values from the input field
        const {name, value} = event.target;

        setFormFields({
            //since you only want to update a single input field you ought to be very specific
            ...formFields, [name]:value
        });

       
    }



    return(
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label="Display Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName} 
                />

                
                <FormInput 
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />

               
                <FormInput
                    label="Password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />

                
                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword} 
                />
                <h3>{checked && "user signed up"}</h3>
                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
            
           
        
    )

}

export default SignUpForm;

