let checkbox  = document.getElementById('my-textbox');
let checkbox.addEventListener('keypress', checkbox, false);

const warningBox = document.getElementById("warning_msg");

function checkbox(evt)
{

// warningBox.class id = "warning";

function displayWarning(msg)
{
    warningBox.innerHTML = msg;

    if (document.body.contains(warningBox))
    {
        window.donotclick();
    }
    else
    {
        // insert warningBox after myTextbox
        checkbox.parentNode.insertBefore(checkbox.nextSibling)
    }

    checkbox= window.checkbox(function ()

