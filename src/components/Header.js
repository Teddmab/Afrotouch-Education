import React, { useState } from 'react';
import '../styles/Header.css';
import logoImage from '../assets/logo.png'

const countriesWithUniversities = {
    Estonia: {
        "Estonian University of Life Sciences": [
            "MSc Environmental Governance and Adaptation to Climate Change",
            "MSc Landscape Architecture",
            "MSc Planning and Analysis in Multifunctional Forestry",
            "DVM Veterinary Medicine"
        ],
        "Tallinn University": [
            "MSc Interaction Design",
            "MA Communication Management",
            "MSc Human-Computer Interaction",
            "MA Anthropology",
            "MA Educational Innovation and Leadership",
            "MA Information Technology Law",
            "MA Digital Administration",
            "MSc Digital Learning Games",
            "MA Documentary Film",
            "MA Human Rights in the Digital Society",
            "MA Well-Being and Health Behaviour",
            "MA Literature, Visual Culture and Film Studies",
            "MA Estonian Studies",
            "MA European Languages and Cultures",
            "MA Folkloristics and Applied Heritage Studies",
            "MA Screen Media and Innovation",
            "MA Semiotics",
            "MA Social Entrepreneurship",
            "BA Audiovisual Media",
            "BA Law",
            "BA Liberal Arts in Humanities",
            "BA Liberal Arts in Social Sciences",
            "BA Politics and Governance",
            "BA Crossmedia"
        ],
        "University of Tartu": [
            "MSc Actuarial and Financial Engineering",
            "MSc Applied Measurement Science",
            "MSc Bioengineering",
            "MSc Clinical Nutrition",
            "MA Disinformation and Societal Resilience",
            "MSc EACH - Excellence in Analytical Chemistry",
            "MA Educational Technology",
            "MA Entrepreneurship in Economic Policymaking",
            "MSc Geoinformatics for Urbanised Society",
            "MA International Law and Human Rights",
            "MA International Relations and Regional Studies",
            "MSc Robotics and Computer Engineering",
            "MA Wellness and Spa Service Design and Management",
            "MSc Clinical Pharmacy",
            "BSc Science and Technology",
            "BSc Commercial Air Transport Pilot",
            "BSc Commercial Aviation Management",
            "BA Business Administration",
            "Bachelor+Master Medicine (Integrated curriculum)"
        ],
        "Estonian Entrepreneurship University of Applied Sciences": [
            "BA Creativity and Business Innovation",
            "BA Game Design and Development",
            "BA Impactful Entrepreneurship",
            "BA International Business Administration",
            "Software Development and Entrepreneurship",
            "Startup Entrepreneurship"
        ],
        "Estonian Aviation Academy": [
            "BSc Commercial Air Transport Pilot",
            "BSc Commercial Aviation Management"
        ],
        "Estonian Academy of Music and Theatre": [
            "MA Classical Music Performance (various specialities)",
            "MA Composition and Music Technology",
            "MA Contemporary Physical Performance Making (CPPM)",
            "MA Jazz and Improvisational Music",
            "BA Classical Music Performance (various specialities)",
            "BA Composition and Music Technology",
            "BA Jazz Music"
        ],
        "Tallinn University Baltic Film, Media and Arts School": [
            "MA Communication Management",
            "MA Documentary Film",
            "MA Screen Media and Innovation",
            "BA Audiovisual Media",
            "BA Crossmedia"
        ],
        "Tallinn University School of Digital Technologies": [
            "MSc Interaction Design",
            "MSc Human-Computer Interaction",
            "MSc Digital Learning Games",
            "MA Human Rights in the Digital Society"
        ],
        "Tallinn University School of Educational Sciences": [
            "MA Educational Innovation and Leadership",
            "MA Well-Being and Health Behaviour"
        ],
        "Tallinn University School of Governance, Law and Society": [
            "MA Human Rights in the Digital Society",
            "MA International Relations",
            "MA Social Entrepreneurship",
            "BA Law",
            "BA Liberal Arts in Social Sciences",
            "BA Politics and Governance"
        ],
        "Tallinn University School of Humanities": [
            "MA Literature, Visual Culture and Film Studies",
            "MA Estonian Studies",
            "BA Liberal Arts in Humanities"
        ],
        "Tallinn University School of Natural Sciences and Health": [
            "MA Well-Being and Health Behaviour"
        ],
        "University of Tartu Faculty of Arts and Humanities": [
            "MA Estonian and Finno-Ugric Languages",
            "MA European Languages and Cultures",
            "MA Folkloristics and Applied Heritage Studies",
            "MA Semiotics"
        ],
        "University of Tartu Faculty of Medicine": [
            "MSc Clinical Nutrition",
            "Bachelor+Master Medicine (Integrated curriculum)"
        ],
        "University of Tartu Faculty of Science and Technology": [
            "MSc Actuarial and Financial Engineering",
            "MSc Applied Measurement Science",
            "MSc Bioengineering",
            "MSc EACH - Excellence in Analytical Chemistry",
            "MSc Geoinformatics for Urbanised Society",
            "MSc Robotics and Computer Engineering",
            "MSc Materials Science and Technology",
            "BSc Science and Technology"
        ],
        "University of Tartu Faculty of Social Sciences": [
            "MA Disinformation and Societal Resilience",
            "MA Educational Technology",
            "MA Entrepreneurship in Economic Policymaking",
            "MA International Law and Human Rights",
            "MA International Relations and Regional Studies",
            "MA Wellness and Spa Service Design and Management",
            "MA Politics and Governance in the Digital Age",
            "MA Quantitative Economics",
            "MSc Software Engineering",
            "MA Information Technology Law",
            "MA Innovation and Technology Management",
            "MA International Law and Human Rights",
            "MA International Relations and Regional Studies",
            "MA Creative Project Management"
        ],
        "Estonian Business School": [
            "MBA International Business Administration",
            "MBA One-year MBA",
            "MBA Two-year MBA",
            "BA Impactful Entrepreneurship",
            "BA International Business Administration"
        ]
    },
    // Lithuania: {
    //     "Vilnius University": [
    //         "BSc in Economics",
    //         "MA in English Philology",
    //         "MSc in Chemistry",
    //         "PhD in Physics"
    //     ],
    //     "Kaunas University of Technology": [
    //         "BSc in Mechanical Engineering",
    //         "MSc in Information Technology",
    //         "BSc in Civil Engineering",
    //         "MSc in Industrial Engineering and Management"
    //     ],
    //     "Vytautas Magnus University": [
    //         "BA in Political Science",
    //         "MA in Sociology",
    //         "BA in Cultural Management",
    //         "MA in Marketing and International Commerce"
    //     ],
    //     "Klaipėda University": [
    //         "BSc in Marine Engineering",
    //         "MA in Education Science",
    //         "BSc in Public Administration",
    //         "MSc in Ecology and Environmental Studies"
    //     ],
    //   // Add more universities and programs as required
    // },
    Latvia: {
        "Faculty of Social Sciences, Riga": [
            "Master Cultural and Social Anthropology",
            "Bachelor Cultural and Social Anthropology"
        ],
        "Faculty of Medicine, Riga": [
            "Master Epidemiology and Medical Statistics"
        ],
        "Faculty of Business, Management and Economics, Riga": [
            "Master European Studies and Economic Diplomacy",
            "Master International Business with specialization in Export Management",
            "Master Project Management",
            "Bachelor Business Administration",
            "Bachelor International Economics and Commercial Diplomacy"
        ],
        "Faculty of Education, Psychology and Art, Riga": [
            "Masters Technological innovations and design for education"
        ],
        "Riga Tehnical University, Riga": [
            "Bachelor Biotechnology and Bioengineering in cooperation with Riga Technical University"
        ],
        "Faculty of Computing, Riga": [
            "Bachelor Computer Science"
        ],
        "University of Lincoln, Lincoln": [
            "Bachelor Computer Science Dual Award Programme with the University of Lincoln UK and University of Latvia"
        ],
        "Faculty of Humanities, Riga": [
            "Bachelor English, European Languages and Business Studies"
        ],
        "Faculty of Physics, Mathematics and Optometry, Riga": [
            "Bachelor Optometry"
        ],
        // ... (more universities)
    },

    // You can add more countries and their universities and programs similarly
};


function Header(){
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [country, setCountry] = useState('');
    const [university, setUniversity] = useState('');
    // const [program, setProgram] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [programs, setPrograms] = useState([]);
    const [selectedPrograms, setSelectedPrograms] = useState([]);

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        setUniversity('');
        // setProgram('');
        setPrograms([]);
    };

    const handleUniversityChange = (e) => {
        const selectedUniversity = e.target.value;
        setUniversity(selectedUniversity);
        if (country && countriesWithUniversities[country][selectedUniversity]) {
            setPrograms(countriesWithUniversities[country][selectedUniversity]);
        } else {
            setPrograms([]);
        }
        // setProgram('');
    };

    const handleProgramChange = (e) => {
        const program = e.target.value;
        setSelectedPrograms((prevSelectedPrograms) => 
        e.target.checked
            ? [...prevSelectedPrograms, program]
            : prevSelectedPrograms.filter((prog) => prog !== program)
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { email, whatsapp, country, university, programs: selectedPrograms };

        // Here you would send formData to the backend
        try {
            const response = await fetch('http://localhost:5001/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            // const responseData = await response.json();
            // alert(responseData.message);

            if (response.ok) {
                // Reset form fields
                setEmail('');
                setWhatsapp('');
                setCountry('');
                setUniversity('');
                setSelectedPrograms([]);
                // Display confirmation message
                alert('Your data has been saved. We will get back to you with more details.');
            } else {
                // Handle errors
                alert('There was an issue with your submission. Please try again.');
            }

        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <header className="header-content">
            <div className="logo-container">
                <img src={logoImage} alt="AfroTouch Education Logo" className="logo" />
            </div>

            <h2 onClick={toggleFormVisibility} className="toggle-form">
                Launch Your Academic Journey!
            </h2>

            {isFormVisible && (
                <div className={`form-container ${isFormVisible ? 'active' : ''}`}>
                    <p> Set Your Sights on Success! Select your country, pick your university, and secure your spot in the program that will define your future.
                        <br /> Start your journey with AfroTouch Education now!
                    </p>
                    
                    <form onSubmit={handleSubmit}>
                        <select
                            value={country}
                            onChange={handleCountryChange}
                            required
                        >
                            <option value="">Select a country</option>
                            {Object.keys(countriesWithUniversities).map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                        
                        {country && (
                            <select
                                value={university}
                                onChange={handleUniversityChange}
                                required
                            >
                                <option value="">Select a university</option>
                                {Object.keys(countriesWithUniversities[country] || {}).map((uni) => (
                                    <option key={uni} value={uni}>
                                        {uni}
                                    </option>
                                ))}
                            </select>
                        )}
                        
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            required
                        />

                        <input
                            type="text"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            placeholder="Your WhatsApp number"
                            required
                        />

                        {university && (
                        <div class="checkbox_container">
                            {programs.map((prog) => (
                            <div key={prog}>
                                <input
                                type="checkbox"
                                id={prog}
                                value={prog}
                                checked={selectedPrograms.includes(prog)}
                                onChange={handleProgramChange}
                                />
                                <label htmlFor={prog}>{prog}</label>
                            </div>
                            ))}
                        </div>
                        )}
                        
                        <button type="submit">Sign up</button>
                    </form>

                    <p className="privacy-message">
                        Your contact information is safe with us. We respect your privacy and will never share your information without your consent.
                    </p>
                </div>
                
            )}

        </header>
    );
}

export default Header;
