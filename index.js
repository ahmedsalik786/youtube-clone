const searchInput=document.getElementById("search-input");
const container=document.getElementById("container");
const apikey="AIzaSyAFMdlAcCvshlKZhciu_i-QykeuE8DyUIY";
/*
 https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=code%20with%20harray&key=AIzaSyAFMdlAcCvshlKZhciu_i-QykeuE8DyUIY
 */

function SearchVideo(){
    let searchValue=searchInput.value;
    fetchVideos(searchValue);
}
async function fetchVideos(searchValue){

    let endpoint=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${searchValue}&key=${apikey}`;

    try{
        let response =await fetch(endpoint)
        let result= await response.json();

        console.log(result);
        showThumbnails(result.items);
    }
    catch(error){
        alert("someThing went wrong");
    }
}
function showThumbnails(items){
    for(let i=0;i<items.length;i++){
        let videoitem=items[i];
        let imageUrl=videoitem.snippet.thumbnails.high.url;
        let videoElement=document.createElement("div");

        const videoChildren=`
        <img src="${imageUrl}"/>
        <p class="title" >${videoitem.snippet.title}<p/>
        <P class="channel-name">T Series</p>
        <P class="view-count">23 lak 5hrs. age</p>
        `;

        videoElement.innerHTML=videoChildren;
        container.append(videoElement);
    }
}