export default class NailsClass{
    constructor(){
        if (document.querySelector('.main-app-page')){
            this.init()
            this.addEventToAddNewClient()
            this.addEventListenerClickToCard()
            this.addEventListnerToDelete()
            this.addEventToConfirmClient()

        } else{
            this.addEventToCheckbox();
            this.saveClientData()
        }

        this.addEventListenerClickToCat()
        this.addEventListnerClear()
    }

    init(){
        this.sortLocalStorage()
    }

    addEventToAddNewClient(){
        const addBtn = document.querySelector('.add-new-client img');

        addBtn.addEventListener('click', () =>{
            window.location.href = 'addClient.html'
        })
    }

    addEventToCheckbox(){
        const checkBtn = document.querySelector('.client-checkbox');

        checkBtn.addEventListener('click', () => {
            checkBtn.classList.toggle('client-checkbox-checked')
        })
    }

    saveClientData(){
        const saveBtn = document.querySelector('.save-new-client');
        const inputArr = Array.from(document.querySelectorAll('input'));
        inputArr.push(document.querySelector('textarea'));

        saveBtn.addEventListener('click', () => {
            const obj = {
                clientName: document.querySelector('.client-name').value,
                clientPrice: document.querySelector('.client-price').value,
                clientDate: document.querySelector('.client-date').value,
                clientTime: document.querySelector('.client-time').value,
                clientComment: document.querySelector('.client-comment-area').value,
                clientHome: document.querySelector('.client-checkbox').classList.contains('client-checkbox-checked') ? true : false
            }

            if (localStorage.getItem(obj.clientName) == null){
                localStorage.setItem(`${obj.clientName}`,JSON.stringify(obj))
                window.location.href = 'index.html'
            } else {
                alert(`Имя ${obj.clientName} занято!`)
            }
        })
    }

    drawClients(item){
        const appDisplay = document.querySelector('.app-user-display');

        const svg = {
            whitePawImage: `<?xml version="1.0" encoding="iso-8859-1"?>
            <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 512.003 512.003" style="enable-background:new 0 0 512.003 512.003;" xml:space="preserve">
            <g>
                <g>
                    <path d="M503.409,318.923c-6.38-20.595-19.062-34.091-35.711-38.001c-3.081-0.723-6.263-1.091-9.459-1.091
                        c-1.714,0-3.422,0.111-5.125,0.312c1.427-11.872,0.126-25.615-3.748-38.122c-6.732-21.733-19.996-35.946-37.351-40.022
                        c-3.186-0.748-6.479-1.128-9.789-1.128c-21.763,0-40.736,16.251-52.49,34.325c-11.754-18.075-30.728-34.325-52.49-34.325
                        c-3.309,0-6.602,0.38-9.789,1.128c-5.491,1.29-10.572,3.598-15.166,6.836c-0.706-1.714-1.476-3.42-2.3-5.119
                        c9.859-1.258,19.325-5.175,27.206-11.341c9.882-7.731,16.906-18.724,19.779-30.952c2.916-12.414,2.049-28.244-2.319-42.346
                        c-6.38-20.595-19.061-34.091-35.711-38.002c-3.081-0.724-6.264-1.091-9.459-1.091c-1.759,0-3.513,0.113-5.26,0.325
                        c1.635-12.104,0.375-26.287-3.613-39.16c-6.732-21.733-19.996-35.946-37.351-40.022C220.075,0.38,216.781,0,213.473,0
                        c-21.763,0-40.737,16.251-52.49,34.325C149.228,16.251,130.254,0,108.491,0c-3.309,0-6.602,0.38-9.789,1.128
                        C81.348,5.205,68.083,19.419,61.351,41.151c-3.974,12.83-5.239,26.96-3.629,39.037c-1.317-0.12-2.635-0.201-3.958-0.201
                        c-3.197,0-6.379,0.367-9.459,1.091c-16.65,3.911-29.333,17.407-35.711,38.002c-4.368,14.102-5.235,29.932-2.319,42.346
                        c2.872,12.227,9.897,23.219,19.779,30.952c8.171,6.392,18.047,10.357,28.296,11.458c-4.717,8.328-10.711,21.23-10.711,33.055
                        c0,41.502,33.765,75.267,75.267,75.267c5.023,0,10.051-0.502,14.947-1.49c8.92-1.802,18.022-2.715,27.052-2.715
                        c9.065,0,18.249,0.92,27.296,2.735c3.814,0.766,7.71,1.223,11.62,1.391c-0.903,2.189-1.734,4.465-2.472,6.848
                        c-4.368,14.102-5.235,29.932-2.319,42.346c2.872,12.227,9.897,23.22,19.779,30.952c8.171,6.392,18.047,10.357,28.296,11.458
                        c-4.717,8.327-10.711,21.23-10.711,33.055c0,41.502,33.765,75.267,75.267,75.267c5.022,0,10.052-0.502,14.947-1.49
                        c8.92-1.801,18.021-2.715,27.053-2.715c9.065,0,18.249,0.92,27.296,2.735c4.864,0.976,9.861,1.471,14.85,1.471
                        c41.502,0,75.267-33.765,75.267-75.267c0-10.486-2.935-22.058-8.33-33.172c9.861-1.257,19.328-5.175,27.21-11.341
                        c9.882-7.731,16.906-18.724,19.779-30.952C508.644,348.855,507.778,333.025,503.409,318.923z M365.234,266.936
                        c3.608-15.36,21.258-38.45,36.992-38.45c1.17,0,2.331,0.128,3.474,0.396c16.502,3.876,23.168,35.588,19.292,52.09
                        c-3.322,14.142-15.928,23.681-29.853,23.681c-2.323,0-4.685-0.266-7.045-0.82C371.592,299.956,361.357,283.437,365.234,266.936z
                         M293.771,228.881c1.143-0.269,2.303-0.396,3.474-0.396c15.732,0,33.384,23.091,36.992,38.45
                        c3.876,16.502-6.359,33.022-22.86,36.898c-2.361,0.554-4.72,0.82-7.045,0.82c-13.923,0-26.531-9.54-29.853-23.681
                        C270.602,264.471,277.269,232.758,293.771,228.881z M269.486,107.602c1.058-0.001,2.11,0.115,3.144,0.358
                        c14.936,3.508,20.97,32.213,17.463,47.149c-3.007,12.801-14.418,21.435-27.022,21.435c-2.103,0-4.24-0.24-6.377-0.742
                        c-14.936-3.508-24.201-18.461-20.692-33.397C239.268,128.502,255.245,107.602,269.486,107.602z M176.481,66.065
                        c3.608-15.36,21.258-38.45,36.992-38.45c1.17,0,2.331,0.128,3.474,0.396c16.502,3.876,23.168,35.588,19.292,52.09
                        c-3.322,14.142-15.928,23.681-29.853,23.681c-2.323,0-4.685-0.266-7.045-0.82C182.84,99.085,172.605,82.566,176.481,66.065z
                         M105.017,28.011c1.143-0.269,2.303-0.396,3.474-0.396c15.732,0,33.384,23.091,36.992,38.45
                        c3.876,16.502-6.359,33.022-22.86,36.898c-2.361,0.554-4.72,0.82-7.045,0.82c-13.923,0-26.531-9.54-29.853-23.681
                        C81.849,63.6,88.515,31.887,105.017,28.011z M60.179,176.543c-12.604,0.001-24.015-8.634-27.022-21.434
                        c-3.509-14.936,2.525-43.641,17.463-47.149c1.034-0.243,2.084-0.359,3.144-0.359c14.24,0,30.218,20.901,33.483,34.803
                        c3.508,14.936-5.756,29.89-20.692,33.397C64.419,176.303,62.283,176.543,60.179,176.543z M203.05,284.54
                        c-3.224,0-6.374-0.32-9.418-0.931c-10.859-2.178-21.792-3.273-32.727-3.273c-10.865,0-21.733,1.083-32.52,3.261
                        c-3.064,0.619-6.234,0.943-9.481,0.943c-26.318,0-47.652-21.334-47.652-47.652c0-9.032,13.067-34.992,30.735-45.492
                        c7.601-4.517,11.598-11.17,11.337-20.008c0-26.318,21.334-47.652,47.652-47.652s47.652,21.334,47.652,47.652
                        c-0.129,9.192,5.497,14.869,13.647,19.123c17.043,8.894,28.426,31.577,28.426,46.376
                        C250.702,263.205,229.367,284.54,203.05,284.54z M248.932,376.387c-12.604,0.001-24.016-8.633-27.021-21.434
                        c-3.509-14.936,2.525-43.641,17.463-47.149c1.034-0.243,2.084-0.359,3.144-0.359c14.24,0,30.218,20.901,33.483,34.803
                        c3.509,14.936-5.756,29.889-20.692,33.397C253.173,376.147,251.037,376.387,248.932,376.387z M391.802,484.385
                        c-3.224,0-6.374-0.32-9.418-0.931c-10.859-2.179-21.791-3.273-32.726-3.273c-10.865,0-21.733,1.083-32.52,3.261
                        c-3.064,0.619-6.234,0.944-9.481,0.944c-26.318,0-47.652-21.334-47.652-47.652c0-9.032,13.067-34.992,30.735-45.492
                        c7.601-4.517,11.598-11.17,11.337-20.008c0-26.318,21.334-47.652,47.652-47.652s47.652,21.334,47.652,47.652
                        c-0.129,9.192,5.497,14.869,13.647,19.123c17.043,8.894,28.425,31.577,28.425,46.376
                        C439.454,463.051,418.12,484.385,391.802,484.385z M478.845,354.954c-3.007,12.801-14.418,21.435-27.022,21.435
                        c-2.103,0-4.24-0.24-6.377-0.742c-14.936-3.509-24.201-18.461-20.692-33.397c3.265-13.903,19.242-34.803,33.483-34.803
                        c1.059,0,2.111,0.116,3.144,0.359C476.32,311.313,482.354,340.017,478.845,354.954z"/>
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>`
        }

        const images = {
            homeImage: './img/home.svg',
            workImg: './img/work.svg',
            deleteImage: './img/delete-svgrepo-com.svg',
            whitePawImage: './img/pawprint-cat-svgrepo-com.svg',
            blackPawImage: './img/pawprint-cat-svgrepo-com (1).svg' 
        };
        
        if (item.clientHome){
            appDisplay.insertAdjacentHTML('beforeend', `
            <div data-date="${item.clientDate}" data-name="${item.clientName}" class="client-card">
                <div class="client-info">
                    <span>${item.clientDate.slice(5)}</span>
                    <span>${item.clientTime}</span>
                    <span>${item.clientName}</span>
                    <span>${item.clientPrice}</span>
                    <span><img class='client-status' src="${images.homeImage}" alt=""></span>
                    <span class="confirm-button">${svg.whitePawImage}</span>
                </div>
                <div class="client-comment">
                    <p>${item.clientComment}</p>
                    <div class="client-buttons">
                        <span class="delete-button" data-name="${item.clientName}"><img src="${images.deleteImage}" alt=""></span>
                        <span class="confirm-button-black" data-name="${item.clientName}"><img src="${images.blackPawImage}" alt=""></span>
                    </div>
                </div>
            </div>
            `)
        } else{
            appDisplay.insertAdjacentHTML('beforeend', `
            <div data-date="${item.clientDate}" data-name="${item.clientName}" class="client-card">
                <div class="client-info">
                    <span>${item.clientDate.slice(5)}</span>
                    <span>${item.clientTime}</span>
                    <span>${item.clientName}</span>
                    <span>${item.clientPrice}</span>
                    <span><img class='client-status' src="${images.workImg}" alt=""></span>
                    <span class="confirm-button">${svg.whitePawImage}</span>
                </div>
                <div class="client-comment">
                    <p>${item.clientComment}</p>
                    <div class="client-buttons">
                        <span class="delete-button" data-name="${item.clientName}"><img src="${images.deleteImage}" alt=""></span>
                        <span class="confirm-button-black" data-name="${item.clientName}"><img src="${images.blackPawImage}" alt=""></span>
                    </div>
                </div>
            </div>
        `)



        }
    }

    byField(field){
        return (a, b) => a[field] < b[field] ? 1 : -1;
    }

    sortLocalStorage(){
        const storage = Object.values(localStorage);
        const JsonParsedStorage = [];

        storage.forEach(item => {
            JsonParsedStorage.push(JSON.parse(item));
        })

        JsonParsedStorage.sort(this.byField('clientDate'));
        
        JsonParsedStorage.forEach(item => {
            this.drawClients(item);
            this.checkTodayDate(item);
            this.checkConfirmClient(item)
        })
    }

    addEventListenerClickToCat(){
        const cat = document.querySelector('.header-content svg');
        const hiddenBlock = document.querySelector('.header-hidden-block');

        cat.addEventListener('click', () => {
            hiddenBlock.classList.toggle('visible-block');
            hiddenBlock.style['transition'] = 'all 0.5s'
            
            setTimeout(() => {
                if (hiddenBlock.classList.contains('visible-block')){
                    hiddenBlock.style.visibility = 'visible';
                    hiddenBlock.style.opacity = 1;
                }
            }, 100)
            setTimeout(() => {
                if (!hiddenBlock.classList.contains('visible-block')){
                    hiddenBlock.style['transition'] = 'none'    
                    hiddenBlock.style.visibility = 'hidden';
                    hiddenBlock.style.opacity = 0;
                }
            })
        })
    }

    addEventListnerClear(){
        const clearbtn = document.querySelector('#clear');
        const appDisplay = document.querySelector('.app-main')

        clearbtn.addEventListener('click', () => {
            localStorage.clear();
            location.reload();
        })
    }

    addEventListenerClickToClient(){
        const clients = Array.from(document.querySelectorAll(''))
    }

    checkTodayDate(item){
        const today = new Date();
        const clients = Array.from(document.querySelectorAll('.client-card'));

        for(let client = 0; client < clients.length; client++){
            const checkedDay = new Date(clients[client].dataset.date).getDate();
            const checkedMonth = new Date(clients[client].dataset.date).getMonth();

            if (checkedDay == today.getDate() && checkedMonth == today.getMonth()){
                clients[client].style['boxShadow'] = '6px 6px 6px rgba(0, 211, 21, 0.25)';

                clients[client].style['order'] = -1;
            }

        }
    }

    checkConfirmClient(item){

        if (item.confirmed){
            const card = document.querySelector(`[data-name="${item.clientName}"]`);
            card.style['filter'] = 'blur(2px)';
            card.style['order'] = 100
        }
    }

    addEventListenerClickToCard(){
        window.onload = () => {
            const cards = document.querySelectorAll('.confirm-button');
            
            cards.forEach(item => {
                item.addEventListener('click', () => {
                    const hiddenBlock = item.parentElement.parentElement.querySelector('.client-comment');

                    hiddenBlock.classList.toggle('client-card-visible');
                    hiddenBlock.style['transition'] = 'all 0.5s'

                    setTimeout(() => {
                        if (hiddenBlock.classList.contains('client-card-visible')){
                            hiddenBlock.style['visibility'] = 'visible'; 
                            hiddenBlock.style['opacity'] = 1;
                        }
                    }, 300)
                    setTimeout(() => {
                        if(!hiddenBlock.classList.contains('client-card-visible')){
                            hiddenBlock.style['transition'] = 'none'
                            hiddenBlock.style['visibility'] = 'hidden';
                            hiddenBlock.style['opacity'] = 0;
                        }
                    })
                })
            })
        } 
    }

    addEventListnerToDelete(){
        const deleteBtn = Array.from(document.querySelectorAll('.delete-button'))

        deleteBtn.forEach(item => {
            item.addEventListener('click', () => {
                localStorage.removeItem(item.dataset.name);
                location.reload();
            })
        })
    }

    addEventToConfirmClient(){
        const confirmBtn = Array.from(document.querySelectorAll('.confirm-button-black'));

        confirmBtn.forEach(item => {
            item.addEventListener('click', () => {
                const clientBlock = item.parentElement.parentElement.parentElement;
                const itemInStorage = JSON.parse(localStorage.getItem(clientBlock.dataset.name));
                itemInStorage.confirmed = true;
                localStorage.setItem(clientBlock.dataset.name, JSON.stringify(itemInStorage));
                
                const hiddenBlock = clientBlock.querySelector('.client-comment');
                console.log(hiddenBlock)

                hiddenBlock.classList.remove('client-card-visible');
                hiddenBlock.style['transition'] = 'none';
                hiddenBlock.style['visibility'] = 'hidden';
                hiddenBlock.style['opacity'] = 0;

                location.reload()
            })
        })
    }
}

const app = new NailsClass();
