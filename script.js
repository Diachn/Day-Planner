$(function() {
    updateTime();
    setInterval(function() {
        updateTime();
    }, 1000);

    function updateTime() {
        var dateEl = $("#currentDay");
        var now = moment();
        var formattedDate = now.format("dddd, MMMM Do, YYYY H:mm:ss a");
        dateEl.text(formattedDate);
    }

});
var rows = $(".row");
var currentHour = parseInt(moment().format('H:mm:ss a'));

Array.from(rows).forEach(row => {
    var
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {

        if (currentHour === rowHour) {
            setColor(row, "lightgrey");
        } else if ((currentHour < rowHour) && (currentHour < rowHour + 24)) {
            setColor(row, "lightgreen");
        } else if ((currentHour > rowHour) && (currentHour > rowHour - 24)) {
            setColor(row, "pink");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;

}

$(document).ready(function() {

    var plan1 = $("#save6am");
    var plan2 = $("#save7am");
    var plan3 = $("#save8am");
    var plan4 = $("#save9am");
    var plan5 = $("#save10am");
    var plan6 = $("#save11am");
    var plan7 = $("#save12pm");
    var plan8 = $("#save13pm");
    var plan9 = $("#save14pm");
    var plan10 = $("#save15pm");
    var plan11 = $("#save16pm");
    var plan12 = $("#save17pm");
    var plan13 = $("#save18pm");
    var plan14 = $("#save19pm");
    var plan15 = $("#save20pm");
    var plan16 = $("#save21pm");
    var plan17 = $("#save22pm");
    var plan18 = $("#save23pm");
    var plan19 = $("#save24am");

    plan1.val(localStorage.getItem('Entry1'));
    plan2.val(localStorage.getItem('Entry2'));
    plan3.val(localStorage.getItem('Entry3'));
    plan4.val(localStorage.getItem('Entry4'));
    plan5.val(localStorage.getItem('Entry5'));
    plan6.val(localStorage.getItem('Entry6'));
    plan7.val(localStorage.getItem('Entry7'));
    plan8.val(localStorage.getItem('Entry8'));
    plan9.val(localStorage.getItem('Entry9'));
    plan10.val(localStorage.getItem('Entry10'));
    plan11.val(localStorage.getItem('Entry11'));
    plan12.val(localStorage.getItem('Entry12'));
    plan13.val(localStorage.getItem('Entry13'));
    plan14.val(localStorage.getItem('Entry14'));
    plan15.val(localStorage.getItem('Entry15'));
    plan16.val(localStorage.getItem('Entry16'));
    plan17.val(localStorage.getItem('Entry17'));
    plan18.val(localStorage.getItem('Entry18'));
    plan19.val(localStorage.getItem('Entry19'));


    var save1 = $("#btn1");
    var save2 = $("#btn2");
    var save3 = $("#btn3");
    var save4 = $("#btn4");
    var save5 = $("#btn5");
    var save6 = $("#btn6");
    var save7 = $("#btn7");
    var save8 = $("#btn8");
    var save9 = $("#btn9");
    var save10 = $("#btn10");
    var save11 = $("#btn11");
    var save12 = $("#btn12");
    var save13 = $("#btn13");
    var save14 = $("#btn14");
    var save15 = $("#btn15");
    var save16 = $("#btn16");
    var save17 = $("#btn17");
    var save18 = $("#btn18");
    var save19 = $("#btn19");



    save1.on('click', function() {
        event.preventDefault();
        if (plan1.val() !== '') {
            localStorage.setItem('Entry1', plan1.val());
        }
    });

    save2.on('click', function() {
        event.preventDefault();
        if (plan2.val() !== '') {
            localStorage.setItem('Entry2', plan2.val());
        }

    });

    save3.on('click', function() {
        event.preventDefault();
        if (plan3.val() !== '') {
            localStorage.setItem('Entry3', plan3.val());

        }

    });

    save4.on('click', function() {
        event.preventDefault();
        if (plan4.val() !== '') {
            localStorage.setItem('Entry4', plan4.val());

        }
    });

    save5.on('click', function() {
        event.preventDefault();
        if (plan5.val() !== '') {
            localStorage.setItem('Entry5', plan5.val());

        }

    });

    save6.on('click', function() {
        event.preventDefault();
        if (plan6.val() !== '') {
            localStorage.setItem('Entry6', plan6.val());

        }

    });

    save7.on('click', function() {
        event.preventDefault();
        if (plan7.val() !== '') {
            localStorage.setItem('Entry7', plan7.val());

        }

    });

    save8.on('click', function() {
        event.preventDefault();

        if (plan8.val() !== '') {
            localStorage.setItem('Entry8', plan8.val());

        }

    });

    save9.on('click', function() {
        event.preventDefault();

        if (plan9.val() !== '') {
            localStorage.setItem('Entry9', plan9.val());

        }

    });
    save10.on('click', function() {
        event.preventDefault();

        if (plan10.val() !== '') {
            localStorage.setItem('Entry10', plan10.val());

        }

    });

    save11.on('click', function() {
        event.preventDefault();

        if (plan11.val() !== '') {
            localStorage.setItem('Entry11', plan11.val());

        }

    });
    save12.on('click', function() {
        event.preventDefault();

        if (plan12.val() !== '') {
            localStorage.setItem('Entry12', plan12.val());

        }

    });
    save13.on('click', function() {
        event.preventDefault();

        if (plan13.val() !== '') {
            localStorage.setItem('Entry13', plan13.val());

        }

    });
    save14.on('click', function() {
        event.preventDefault();

        if (plan14.val() !== '') {
            localStorage.setItem('Entry14', plan14.val());

        }

    });
    save15.on('click', function() {
        event.preventDefault();

        if (plan15.val() !== '') {
            localStorage.setItem('Entry15', plan15.val());

        }

    });
    save16.on('click', function() {
        event.preventDefault();

        if (plan16.val() !== '') {
            localStorage.setItem('Entry16', plan16.val());

        }

    });
    save17.on('click', function() {
        event.preventDefault();

        if (plan17.val() !== '') {
            localStorage.setItem('Entry17', plan17.val());

        }

    });
    save18.on('click', function() {
        event.preventDefault();

        if (plan18.val() !== '') {
            localStorage.setItem('Entry18', plan18.val());

        }

    });
    save19.on('click', function() {
        event.preventDefault();

        if (plan19.val() !== '') {
            localStorage.setItem('Entry19', plan19.val());

        }

    });
});