var studentnamesarray = [];
function submit() {
    var displaystudentarray = [];

    for (var j = 1; j <= 4; j++) {
        var nameofstudent = document.getElementById("nameofStudent" + j).value;
        studentnamesarray.push(nameofstudent);
    }
    var studentnamesarraylength = studentnamesarray.length;


    for (var k = 0; k < studentnamesarraylength; k++) {
        displaystudentarray.push("<h4>" + studentnamesarray[k] + "</h4>");
    }



    document.getElementById("getpara").innerHTML = displaystudentarray;
    var periods = displaystudentarray.join(". ");
    document.getElementById("getpara").innerHTML = periods;
}