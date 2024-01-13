const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = { email, whatsapp, country, university, programs: selectedPrograms };

  try {
    const response = await fetch('http://localhost:5001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
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
