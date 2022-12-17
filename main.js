const form=document.getElementById('formId');
const Name=document.getElementById("nameId");
const ProfileImage=document.getElementById("imginput");
const Phone=document.getElementById("phoneNumberId");
const Gender=document.getElementById("genderId");
const Email=document.getElementById("emailId");
const Password=document.getElementById("passId");
const confPass=document.getElementById("confpassId");

function previewFile(){
    var preview = document.querySelector('img'); 
    var file    = document.querySelector('input[type=file]').files[0]; 
    var reader  = new FileReader();
 
    reader.onloadend = function () {
        preview.src = reader.result;
    }
 
    if (file) {
        reader.readAsDataURL(file); 
    } else {
        preview.src = "";
    }
   }
 
    previewFile();  



var row =null;


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    Validate();
    var dataEntered=retrieveData();
    var readData =readingDataFromLocatStroage(dataEntered);
    if(row===null){

        insert(readData);
    }
    else{

        update();
    }

});

function Validate(){
    const namevalue = Name.value.trim();
    if(namevalue===""){
        Swal.fire('Please Enter Right Name')

    }
    const emailvalue = Email.value.trim();
    if(emailvalue===""){
        Swal.fire('Please Enter email ')

    }
    const phonevalue=Phone.value;
    if(phonevalue.length <10){
        Swal.fire('Please Enter Right Number ')
    }
    const passwordvalue=Password.value;
    const confpasswordvalue=confPass.value;
    if(passwordvalue!==confpasswordvalue){
        Swal.fire('password not mach ')
    }
    
    
}


//localstroage

function retrieveData(){
    var arr=[Name.value,ProfileImage.value,Phone.value,Email.value,Gender.value,Password.value];
    return arr;
}
function readingDataFromLocatStroage(dataEntered){
    var a= localStorage.setItem("name",dataEntered[0]);
    var b= localStorage.setItem("photo",dataEntered[1]);
    var c= localStorage.setItem("phone",dataEntered[2]);
    var d= localStorage.setItem("email",dataEntered[3]);
    var e= localStorage.setItem("gender",dataEntered[4]);
    var f= localStorage.setItem("pass",dataEntered[5]);

    var a1= localStorage.getItem("name",a);
    var b1= localStorage.getItem("photo",b);
    var c1= localStorage.getItem("phone",c);
    var d1= localStorage.getItem("email",d);
    var e1= localStorage.getItem("gender",e);
    var f1= localStorage.getItem("pass",f);
    var arr=[a1,b1,c1,d1,e1,f1];
    return arr;
   
}


function insert(readData){
    row =table.insertRow();
    row.insertCell(0).innerHTML=readData[0];
    row.insertCell(1).innerHTML=readData[1];
    row.insertCell(2).innerHTML=readData[2];
    row.insertCell(3).innerHTML=readData[3];
    row.insertCell(4).innerHTML=readData[4];
    row.insertCell(5).innerHTML=readData[5];
    row.insertCell(6).innerHTML=`<button onclick=edit(this)>Edit</button><button onclick=remove(this)>Delete</button>`;


}

function edit(td){
    row=td.parentElement.parentElement;
    Name.value=row.cells[0].innerHTML;
    ProfileImage.value=row.cells[1].innerHTML;
    Phone.value=row.cells[2].innerHTML;
    Email.value=row.cells[3].innerHTML;
    Gender.value=row.cells[4].innerHTML;
    Password.value=row.cells[5].innerHTML;
}


function update(){
    row=null;
    row.cells[0].innerHTML=Name.value;
    row.cells[0].innerHTML=ProfileImage.value;
    row.cells[0].innerHTML=Phone.value;
    row.cells[0].innerHTML=Email.value;
    row.cells[0].innerHTML= Gender.value;
    row.cells[0].innerHTML=Password.value;
    
}
 function remove(td){
    row=td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex)
 }