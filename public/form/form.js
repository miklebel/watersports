$(document).ready(() => {
    // This sets date selector input to minimum value of today //
    var today = new Date().toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', today);
    
    // Code for showing selector menu for items if checkbox is acticve //
    $("#jetSki").on('change', (event) => {
        $(event.currentTarget).next().toggleClass('hideOptions').toggleClass('animated').toggleClass('fadeIn');
        $(event.currentTarget).prev().toggleClass('greenBorder');
    });
    $("#kayak").on('change', (event) => {
        $(event.currentTarget).next().toggleClass('hideOptions').toggleClass('animated').toggleClass('fadeIn');
        $(event.currentTarget).prev().toggleClass('greenBorder');
    });
    $("#sup").on('change', (event) => {
        $(event.currentTarget).next().toggleClass('hideOptions').toggleClass('animated').toggleClass('fadeIn');
        $(event.currentTarget).prev().toggleClass('greenBorder');
    });
    $("#pedalo").on('change', (event) => {
        $(event.currentTarget).next().toggleClass('hideOptions').toggleClass('animated').toggleClass('fadeIn');
        $(event.currentTarget).prev().toggleClass('greenBorder');
    });
    $("#flyboard").on('change', (event) => {
        $(event.currentTarget).next().toggleClass('hideOptions').toggleClass('animated').toggleClass('fadeIn');
        $(event.currentTarget).prev().toggleClass('greenBorder');
    });

    // object with defined inputs from the form //
    


    $("#submit").on('click', () => {
        const formdata = {
            jCheckbox: $("#jetSki").prop('checked'),
            jAmount: $('#jetSkiAmount').val(),
            kCheckbox: $("#kayak").prop('checked'),
            kAmount: $('#kayakAmount').val(),
            sCheckbox: $("#sup").prop('checked'),
            sAmount: $('#supAmount').val(),
            pCheckbox: $("#pedalo").prop('checked'),
            pAmount: $("#pedaloAmount").val(),
            fCheckbox: $("#flyboard").prop('checked'),
            fAmount: $('#flyboardAmount').val(),
            date: $('#date').val(),
            time: $('#time').val(),
            suggestions: $('#suggestions').val(),
            fName: $('#firstName').val(),
            lName: $('#lastName').val(),
            email: $('#email').val()
        };
        
        // checking if everything is filled in form:
    // at least one activity,
    // client first name,
    // client second name,
    // date,
    // email

    const success = () => {
        $('.form').css('display', 'none');
        $('.preloader').fadeOut();
    }
    
    if ((formdata.jCheckbox || formdata.kCheckbox || formdata.sCheckbox || formdata.pCheckbox || formdata.fCheckbox) && formdata.date && formdata.email && formdata.fName && formdata.lName) {
        // if everything filled properly logging object with filled properties
        console.log('formdata', formdata);
        // showing animation until recieving positive status code from ajax request
        $('.preloader').fadeIn();
        // and sending post request, on positive code fading out preloader animation
        $.post("http://cretamariswatersports.herokuapp.com/api", formdata, success());
    } else {
        // if not sending alert to check the form again
        alert('Please check if everything is filled in this form: at least one activity, your first name, your second name, date of booking and your contact email.')
    }
        
    })


    
});