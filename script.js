$(document).ready(function () {
    $('#comicForm1').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel1').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,1);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
    $('#comicForm2').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel2').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,2);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
     $('#comicForm3').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel3').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,3);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
     $('#comicForm4').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel4').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,4);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
      $('#comicForm5').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel5').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,5);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
      $('#comicForm6').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel6').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,6);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
      $('#comicForm7').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel7').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,7);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
      $('#comicForm8').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel8').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,8);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
      $('#comicForm9').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel9').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,9);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
      $('#comicForm10').submit(function (event) {
        event.preventDefault();

        const comicData = {
            panel1: $('#panel10').val(),
            // Add similar lines for panels 2 to 10
        };

        query(comicData).then(function (response) {
            const imageUrl = URL.createObjectURL(response);
            displayComic(imageUrl,comicData.panel1,10);
        }).catch(function (error) {
            console.error('Error:', error);
        });
    });
    function displayComic(imageURL,text,num) {
        $(`#comicStrip${num}`).html(`<div class="photoframe" style="background-image: url('${imageURL}')" href="#"></div>
      <figcaption>${text}</figcaption>`);
    }
});

async function query(data) {
    const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
            headers: { 
                "Accept": "image/png",
                "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                "Content-Type": "application/json" 
            },
            method: "POST",
            body: JSON.stringify({ "inputs": data.panel1 }), // Assuming 'inputs' is expected by the API
        }
    );
    const result = await response.blob();
    return result;
}






