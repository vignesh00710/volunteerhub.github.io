function signUp(eventName) {
    // Define details for each event
    const events = {
        'Beach Cleanup': {
            date: 'October 28, 2024',
            location: 'Sunset Beach',
            description: 'Help clean up the beach and protect marine life.'
        },
        'Community Garden Planting': {
            date: 'November 5, 2024',
            location: 'Central Park',
            description: 'Plant flowers and vegetables to beautify the community garden.'
        }
    };

    // Get event details
    const eventDetails = events[eventName];

    // Redirect to the event details page with query parameters
    const url = `event-details.html?name=${encodeURIComponent(eventName)}&date=${encodeURIComponent(eventDetails.date)}&location=${encodeURIComponent(eventDetails.location)}&description=${encodeURIComponent(eventDetails.description)}`;
    window.location.href = url;
}


function editProfile() {
    window.location.href = 'edit-profile.html';
}


// Function to handle donations
function handleDonation(event) {
    event.preventDefault();
    const amount = document.getElementById('donation-amount').value;
    if (amount) {
        document.getElementById('donation-message').textContent = `Thank you for your generous donation of $${amount}!`;
    }
}

// Function to save user preferences
function savePreferences(event) {
    event.preventDefault();
    const address = document.getElementById('address').value;
    const availability = document.getElementById('availability').value;
    const interests = document.getElementById('interests').value;

    if (address && availability && interests) {
        document.getElementById('preferences-message').textContent = 
            'Your preferences have been saved successfully!';
        
        // Optionally, you could save these preferences to localStorage or a backend here
        console.log('Address:', address);
        console.log('Availability:', availability);
        console.log('Interests:', interests);
    }
}
