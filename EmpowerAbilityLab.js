//Template Function that can be used to run JavaScript on the page
//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner(){

}


function toggleChange() {
    var imageTag = document.getElementById('switchToggle').src;
    imageTag = imageTag.replace(/^.*[\\\/]/, 'images/');
    window.alert(imageTag);
    if (imageTag === "images/toggle_switch_off.jpg") {
        document.getElementById('switchToggle').src = 'images/toggle_switch_on.jpg';
    } else {
        document.getElementById('switchToggle').src = 'images/toggle_switch_off.jpg';
    }
}


knowledgeRunner()