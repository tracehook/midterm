import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
    // Add state variables for username, email, firstname, and lastname
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const navigate = useNavigate();

    // Add a function to send the form data to an email (MIGHT WORK)
    const sendToEmail = (e) => {
        e.preventDefault();

        const templateParams = { // Template for data to send to email
            to_name: 'Coder!',  
            from_name: `Murray State CSC`,
            message: `Username: ${username}\nEmail: ${email}\nFirst Name: ${firstname}\nLast Name: ${lastname}`,
        };

        emailjs.send('service_ltte29k', 'template_l3masrc', templateParams, 'wtHN6dIyzkrQRGVsO')
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Registration successful! Check your email for confirmation.');
        navigate('/');  // Redirect after success
    }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send email. Please try again later.');
    });

    };

    
    return (
        <div className="container">
            <div className="content">
                <header>Register for MSU Hackathon</header>
                <main> {/* add fields for input for username, email, first name, last name */}
                    <form onSubmit={sendToEmail}> 
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        {/* Add a button to submit the form */}
                        <button type="submit">Register</button>
                    </form>
                </main>
                <footer>
                    &copy; 2024 CSC 425 Midterm.
                </footer>
            </div>
        </div>
    );
}

export default Register;
