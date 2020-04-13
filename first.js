var siteNameInput = document.getElementById("siteNameInp");

var siteUrlInput = document.getElementById("siteUrlInp");

var submitArray ;

if(localStorage.getItem("mySites") == null)
{
    var submitArray =[] ;
}
else
{

    submitArray = JSON.parse(localStorage.getItem("mySites"));
    dispalySubmite();
}




function submitBtn() {

    subOpject =
    {
        sName: siteNameInput.value,
        sUrl: siteUrlInput.value
    };

    submitArray.push(subOpject);
localStorage.setItem("mySites",JSON.stringify(submitArray));
    dispalySubmite();
    clearForm();
};



function dispalySubmite() {

    var cartona = "";

    for (i = 0; i < submitArray.length; i++) {

        cartona += ` <div class="d-flex p-3 my-2  bg-warning w-50 ">
    <H3>`+ submitArray[i].sName + `</H3>

    <a class=" ml-auto" id="visitBtn" href="`+ submitArray[i].sUrl + `" target="_blank"> <button class="btn px-4 btn-success  "  >  Visit</button> </a>

    <button class="btn px-4  btn-dark ml-auto " onclick="updateSite(`+ i + `) " >Update</button>


    <button class="btn px-4  btn-danger ml-auto " onclick="deletSite(`+ i + `) " >Delet</button>
</div> ` ;


        




    };

    document.getElementById("dispalyDiv").innerHTML = cartona;

};


function clearForm() {
    siteNameInput.value = "";
    siteUrlInput.value = "";

};


function deletSite(index) {

  submitArray.splice(index, 1);
  localStorage.setItem("mySites",JSON.stringify(submitArray));
  dispalySubmite();


};





function updateSite(indxx)
{

    siteNameInput.value = submitArray[indxx].sName ;
    siteUrlInput.value = submitArray[indxx].sUrl ;


    document.getElementById("divBtn").innerHTML=`<button class="btn btn-warning my-3" onclick="updateNew(`+indxx+`);">Update</button>`
}




function updateNew(test){
  
    subOpject =
    {
        sName: siteNameInput.value,
        sUrl: siteUrlInput.value
    };

    submitArray.splice(test,1,subOpject);
localStorage.setItem("mySites",JSON.stringify(submitArray));
    dispalySubmite();
    clearForm();


   



    document.getElementById("divBtn").innerHTML=` <button class="btn btn-info my-3" onclick="submitBtn() ">Submit</button>`
     
}