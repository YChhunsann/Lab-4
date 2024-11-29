$(document).ready(function () {
    // Add button click event
    $('#addButton').on('click', function () {
        // Clear previous error messages
        $('.error').text('');

        // Get form values
        const firstName = $('#firstName').val().trim();
        const lastName = $('#lastName').val().trim();
        const email = $('#email').val().trim();

        // Validation
        let isValid = true;
        if (firstName === '') {
            $('#firstNameError').text('First Name is required.');
            isValid = false;
        }
        if (lastName === '') {
            $('#lastNameError').text('Last Name is required.');
            isValid = false;
        }
        if (email === '') {
            $('#emailError').text('Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            $('#emailError').text('Enter a valid email address.');
            isValid = false;
        }

        // Add row to table if valid
        if (isValid) {
            const newRow = `<tr>
                                <td>${firstName}</td>
                                <td>${lastName}</td>
                                <td>${email}</td>
                            </tr>`;
            $('#infoTable tbody').append(newRow);

            // Clear form fields
            $('#firstName, #lastName, #email').val('');
        }
    });

    // Clear button click event
    $('#clearButton').on('click', function () {
        // Clear form fields and table rows
        $('#firstName, #lastName, #email').val('');
        $('#infoTable tbody').empty();
        $('.error').text('');
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
