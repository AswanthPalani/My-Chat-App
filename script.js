function sndmsg()
{
    value1=document.getElementById("p1").value;
    value2=document.getElementById("p2").value;
    element=document.createElement("p");
    if(value1!="")
    {
        text1=document.createTextNode(value1);
        element.appendChild(text1);
        msg1=document.getElementsById("mydiv");
        msg1.appendChild(element);
        document.getElementById("p1").value="";
    }
    else if(value2!="")
    {
        text2=document.createTextNode(value2);
        element.appendChild(text2);
        msg2=document.getElementsById("mydiv");
        msg2.appendChild(element);
        document.getElementById("p2").value="";
    }
}