// react dependency
import React, { useState } from "react";

// mui styling
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// validate email from helpers/ css
import { validateEmail } from "../../utils/helpers";
import "./css/Contact.css";

// contact form using MUI 
const ContactForm = styled(TextField) ({
    "& label.Mui-focused": {
        color: "#8A8AFF",
    },

    "& .MuiInput-underline:after": {
        borderBottomColor: "#000000",
      },

      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#000000",
        },

        "&:hover fieldset": {
          borderColor: "dark-blue",
        },

        "&.Mui-focused fieldset": {
          borderColor: "dark-blue",
        },
    },
});

// button on contact form
const ColorButton = styled(Button) (({ theme }) => ({
        color: "var(--dark-grey)",
    backgroundColor: "#92a4f775",
    '&:hover': {
        backgroundColor: "#92a4f725",
        color: "blue"
    }
}))

// contact form build
function Contact() {
    const [formState, setFormState] = useState({
        name: " ",
        email: " ",
        message: " ",
        
    });

    // contact form parameters
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState("");

    // email validation
    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage("Your email is incorrect!");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value});
        }
    }

    // handles submitted form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // returns the contact form, in html, with all styling
    return (
        <Container
        component="form"
        sx={{ "& .MuiTextField-root": { m: 3, width: "35ch" }, pb:50 }}
        align="center"
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
        >

        <Typography
        className="title"
        variant="h2"
        align="center"
        sx={{ p:5 }}
        gutterBottom
        >
        Contact Me!
        </Typography>

{/* input name */}
        <div>
            <ContactForm
            className="text-input"
            id="name"
            label="Name"
            multiline
            onBlur={handleChange}
            name="name"
            ></ContactForm>
        </div>

{/* input email */}
        <div>
            <ContactForm
            className="text-input"
            id="email"
            label="Email"
            multiline
            onBlur={handleChange}
            name="email"
            ></ContactForm>
        </div>

{/* input message */}
        <div>
            <ContactForm
            className="text-input"
            id="message"
            label="Message"
            multiline
            minRows={8}
            onBlur={handleChange}
            name="message"
            ></ContactForm>
        </div>
        {errorMessage && (
            <div>
                <p className="error-message">{errorMessage}</p>
            </div>
        )}

{/* submit button  */}
        <ColorButton
        className="submit-btn"
        size="Large"
        variant="contained"
        type="submit"
        >
            Submit{" "}
        </ColorButton>

        </Container>
    );
}

// exports contact
export default Contact;