const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=20'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8082128da2msh0c0fd1010a7e81bp1e9dcdjsn8b3835558def',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const contentContainer = null || document.getElementById('content');

async function fetchData(urlAPI, options){
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    console.log(data);
    return data;
}


(async () =>{
    try{
        const videos = await fetchData(API, options);
        let view = `
            ${videos.items?.map(video => `
            <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>`).join('')}
        `;

        contentContainer.innerHTML = view;
    }catch(error){
        console.error(error);
    }
})();

