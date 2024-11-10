
var jpdbBaseURL="http://api.login2explore.com:5577"; 
var jpdbIRL = "/api/irl";
var jpdbIMLSet="/api/iml/set";
var stuDBName = "SCHOOL-DB";
var stuRelationName = "STUDENT-TABLE"; 
var connToken = "90934471|-31949229785662303|90957038";
var pk="Roll_No";
var type="PUT";
var update="UPDATE";

$("#stdroll").focus;

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data); 
    localStorage.setItem("recno", lvData.rec_no);
}
function getStuIdAsJsonObj() {
    var rollno = $('#stdroll').val(); 
    var jsonStr = {
        Roll_No: rollno
    };  
    return JSON.stringify(jsonStr);  
}
function fillData(jsonObj) { 
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record; 
    $("#stdfname").val(record.Full_Name); 
    $("#stdclass").val(record.Class);
    $("#stddob").val(record.Birth_Date);
    $("#stdaddress").val(record.Address);
    $("#stdenroll").val(record.Enrollment_Date);
}
function resetForm() {
    $('#stdroll').val("");
    $("#stdfname").val(" ");
    $("#stdclass").val("");
    $("#stddob").val(" ");
    $("#stdaddress").val("");
    $("#stdenroll").val("");
    $('#stdroll').prop("disabled", false); 
    $('#save').prop('disabled', true); 
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $('#stdroll').focus();
}

﻿
function validateData(){
    var stdroll,stdfname,stdclass,stddob,stdaddress,stdenroll;
    stdroll = $("#stdroll").val();
    stdfname = $("#stdfname").val();
    stdclass = $("#stdclass").val();
    stddob = $("#stddob").val();
    stdaddress = $("#stdaddress").val();
    stdenroll = $( "#stdenroll").val();
    if (stdroll === ''){
        alert("Roll no missing"); 
        $("#stdroll").focus();
        return "";
    }
    if (stdfname === ''){
        alert("Student Name missing");
        $("#stdfname").focus();
        return "";
    }
    if (stdclass === ''){
        alert("Class is missing"); 
        $("#stdclass").focus();
        return "";
    }
    if (stddob === ''){
        alert("Birthdate missing"); 
        $("#stddob").focus(); 
        return "";
    }
    if(stdaddress === ''){
        alert("Address missing");
        $("#stdaddress").focus(); 
        return "";
    }
    if (stdenroll === ''){
        alert("Enrollment missing");
        $("#stdenroll").focus();
        return "";
    }
    
    var jsonStrObj = { 
        Roll_No: stdroll,
        Full_Name: stdfname, 
        Class: stdclass, 
        Birth_Date: stddob,
        Address : stdaddress,
        Enrollment_Date: stdenroll
    };
    return JSON.stringify(jsonStrObj);
}
﻿
﻿

function getStu() {
    var stuIdJsonObj = getStuIdAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, stuDBName, stuRelationName, stuIdJsonObj); 
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status === 400) {
        $("#save").prop("disabled", false); 
        $("#reset").prop("disabled", false);
        $("#stdroll").focus();
    } else if (resJsonObj.status === 200) {
        $("#stdroll").prop("disabled", true); 
        fillData(resJsonObj);
        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false); 
        $("#stdfname").focus();
    }
}

function saveData() {
    var jsonStrobj = validateData();
    if (jsonStrobj === ' '){
        return "";
    }
    var setRequest =  createSETRequest(connToken, jsonStrobj, stuDBName, stuRelationName, type,  pk);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(setRequest, jpdbBaseURL, jpdbIMLSet); 
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm(); 
    $('#stdroll').focus();
}
﻿

function updateData() {
    $("#update").prop("disabled", true);
    jsonChg = validateData();
    var setRequest = createSETRequest(connToken, jsonChg, stuDBName, stuRelationName, update,  pk);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(setRequest, jpdbBaseURL, jpdbIMLSet);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm();
    $("#stdroll").focus();
}