let textGroup1;
let textGroup2;
let textGroup3;
let textGroup4;
let currentJson;
$(document).ready(function () {
    initRead();

    $('#button1').on('click', function () {
        clearList1();
        readFromTxt1();
        addToList1FromTxt();
        addToPar1();
    });

    $('#button2').on('click', function () {
        clearList2();
        readFromTxt2();
        addToList2FromTxt();
        addToPar2();
    });

    $('#button3').on('click', function () {
        clearList3();
        readFromTxt3();
        addToList3FromTxt();
        addToPar3();
    });

    $('#button4').on('click', function () {
        clearList4();
        readFromTxt4();
        addToList4FromTxt();
        addToPar4();
    });

    $('#buttonJson').on('click', function () {
        let parText = $('#par')[0].innerHTML;
        parText = parText.replace("<br>", "");
        parText = parText.replace("<br/>", "");
        switch (parText) {
            case 'group1.txt':
                readFromJson1();
                $('#firstList ol li:first-of-type').before($('<li></li>'));
                $('#firstList ol li:first-of-type').load('../html/anotherHtml.html #1');
                break;
            case 'group2.txt':
                readFromJson2();
                $('#secondList ol li:first-of-type').before($('<li></li>'));

                $('#secondList ol li:first-of-type').load('../html/anotherHtml.html #2');

                break;
            case 'group3.txt':
                readFromJson3();
                $('#thirdList ol li:first-of-type').before($('<li></li>'));

                $('#thirdList ol li:first-of-type').load('../html/anotherHtml.html #3');

                break;
            case 'group4.txt':
                readFromJson4();
                $('#fourthList ol li:first-of-type').before($('<li></li>'));

                $('#fourthList ol li:first-of-type').load('../html/anotherHtml.html #4');

                break;
            default:
                alert('Press some button');
                return;
        }

        // addToAnotherHtml(parText);
    });

    $(document).ajaxSend(function () {
        // $('body').css("background-color", "gray");
    });

    $(document).ajaxComplete(function () {
        let randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
        $('body').css('background-color', randomColor);
    });

    $(document).ajaxStart(function () {
        $('#start').text("Стартуем");
    });

    $(document).ajaxSuccess(function () {
        $('#success').text("Всё у нас успешно");
    });

    $(document).ajaxError(function () {
        window.location.href = "../html/ErrorPage.html";
    });

    $( document ).ajaxStop(function() {
        $('#stop').text("Все на месте Ajax'ы (спортсмены)");
    });
});

///////////////////////////////////////add txt to list
function addToList1FromTxt() {
    let ol = $('<ol type="1">First text from txt</ol>');

    let line = textGroup1.match(/[a-zA-Z]+/ig);

    for (let i = 0; i < line.length; i++) {
        ol.append($('<li>' + line[i] + '</li>'));
    }

    $('#firstList').append(ol);
}

function addToList2FromTxt() {
    let ol = $('<ol type="1">Second text from txt</ol>');

    let line = textGroup2.match(/[a-zA-Z]+/ig);

    for (let i = 0; i < line.length; i++) {
        ol.append($('<li>' + line[i] + '</li>'));
    }

    $('#secondList').append(ol);
}

function addToList3FromTxt() {
    let ol = $('<ol type="1">Third text from txt</ol>');

    let line = textGroup3.match(/[a-zA-Z]+/ig);

    for (let i = 0; i < line.length; i++) {
        ol.append($('<li>' + line[i] + '</li>'));
    }

    $('#thirdList').append(ol);
}

function addToList4FromTxt() {
    let ol = $('<ol type="1">Fourth text from txt</ol>');

    let line = textGroup4.match(/[a-zA-Z]+/ig);

    for (let i = 0; i < line.length; i++) {
        ol.append($('<li>' + line[i] + '</li>'));
    }

    $('#fourthList').append(ol);
}

/////////////////////////////////////read from txt
function readFromTxt1() {
    $.ajax({
        url: "../resources/txt/group1.txt",
        data: null,
        success: function (data) {
            textGroup1 = data;
        },
        error: function () {
            alert("Cannot read file");
        }
    });
}

function readFromTxt2() {
    $.ajax({
        url: "../resources/txt/group2.txt",
        data: null,
        success: function (data) {
            textGroup2 = data;
        },
        error: function () {
            alert("Cannot read file");
        }
    });
}

function readFromTxt3() {
    $.ajax({
        url: "../resources/txt/group3.txt",
        data: null,
        success: function (data) {
            textGroup3 = data;
        },
        error: function () {
            alert("Cannot read file");
        }
    });
}

function readFromTxt4() {
    $.ajax({
        url: "../resources/txt/group4.txt",
        data: null,
        success: function (data) {
            textGroup4 = data;
        },
        error: function () {
            alert("Cannot read file");
        }
    });
}

///////////////////////////////////clear list
function clearList1() {
    $('#firstList').empty();
}

function clearList2() {
    $('#secondList').empty();
}

function clearList3() {
    $('#thirdList').empty();
}

function clearList4() {
    $('#fourthList').empty();
}

///////////////////////////////////clear list
function initRead() {
    readFromTxt1();
    readFromTxt2();
    readFromTxt3();
    readFromTxt4();

}

//////////////////////////////////add to paragraph
function addToPar1() {
    $('#par').empty();
    $('#par').append("group1.txt<br/>");
}

function addToPar2() {
    $('#par').empty();
    $('#par').append("group2.txt<br/>");
}

function addToPar3() {
    $('#par').empty();
    $('#par').append("group3.txt<br/>");
}

function addToPar4() {
    $('#par').empty();
    $('#par').append("group4.txt<br/>");
}

////////////////////////////////read from json files
function readFromJson1() {
    let items = [];
    $.getJSON('../resources/json/group1.json', function (data) {
        $.each(data, function (key, obj) {
            let item = "";
            switch (key) {
                case 'mas':
                    for (let i = 0; i < obj.length; i++) {
                        item += obj[i] + ", ";
                    }
                    item = item.substring(0, item.length - 2);
                    break;
                case 'number':
                    item = obj;
                    break;
                case 'string':
                    item = obj;
                    break;
                default:
                    alert("Wrong key");
            }
            items.push(item);
        });
        $('#firstList ol').append('<li>' + currentJson + '</li>');
    });
    currentJson = items;
}

function readFromJson2() {
    let items = [];
    $.getJSON('../resources/json/group2.json', function (data) {
        $.each(data, function (key, obj) {
            let item = "";
            switch (key) {
                case 'mas':
                    for (let i = 0; i < obj.length; i++) {
                        item += obj[i] + ", ";
                    }
                    item = item.substring(0, item.length - 2);
                    break;
                case 'number':
                    item = obj;
                    break;
                case 'string':
                    item = obj;
                    break;
                default:
                    alert("Wrong key");
            }
            items.push(item);
        });
        $('#secondList ol').append('<li>' + currentJson + '</li>');
    });
    currentJson = items;
}

function readFromJson3() {
    let items = [];
    $.getJSON('../resources/json/group3.json', function (data) {
        $.each(data, function (key, obj) {
            let item = "";
            switch (key) {
                case 'mas':
                    for (let i = 0; i < obj.length; i++) {
                        item += obj[i] + ", ";
                    }
                    item = item.substring(0, item.length - 2);
                    break;
                case 'number':
                    item = obj;
                    break;
                case 'string':
                    item = obj;
                    break;
                default:
                    alert("Wrong key");
            }
            items.push(item);
        });
        $('#thirdList ol').append('<li>' + currentJson + '</li>');
    });
    currentJson = items;
}

function readFromJson4() {
    let items = [];
    $.getJSON('../resources/json/group4.json', function (data) {
        $.each(data, function (key, obj) {
            let item = "";
            switch (key) {
                case 'mas':
                    for (let i = 0; i < obj.length; i++) {
                        item += obj[i] + ", ";
                    }
                    item = item.substring(0, item.length - 2);
                    break;
                case 'number':
                    item = obj;
                    break;
                case 'string':
                    item = obj;
                    break;
                default:
                    alert("Wrong key");
            }
            items.push(item);
        });
        $('#fourthList ol').append('<li>' + currentJson + '</li>');
    });
    currentJson = items;
}

/////////////////////////////////
