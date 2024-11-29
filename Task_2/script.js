$(document).ready(function () {
    // Fetch data from the API
    $('#getData').on('click', function () {
        $.ajax({
            url: 'http://localhost:3000/products', // URL of the JSON server
            method: 'GET',
            success: function (data) {
                // Clear the table body before adding new rows
                $('#productTable tbody').empty();

                // Append rows for each product
                data.forEach(product => {
                    const row = `<tr>
              <td><img src="${product.image}" alt="${product.name}"></td>
              <td>${product.sku}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.rating}</td>
            </tr>`;
                    $('#productTable tbody').append(row);
                });
            },
            error: function () {
                alert('Error fetching data from the API.');
            }
        });
    });

    // Clear the table
    $('#clearTable').on('click', function () {
        $('#productTable tbody').empty();
    });
});
