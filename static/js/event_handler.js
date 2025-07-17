document.addEventListener('DOMContentLoaded', domReady);

function domReady() {
    new Dics({
        container: document.querySelectorAll('.b-dics')[0],
        hideTexts: false,
        textPosition: "bottom"
    });
    new Dics({
        container: document.querySelectorAll('.b-dics')[1],
        hideTexts: false,
        textPosition: "bottom"
    });
    new Dics({
        container: document.querySelectorAll('.b-dics')[2],
        hideTexts: false,
        textPosition: "bottom"
    });
}

function objectSceneEvent(idx,selector_id,navld) {
    let dics = document.querySelectorAll('.b-dics')[selector_id];
    let sections = dics.getElementsByClassName('b-dics__section');
    console.log(document.querySelectorAll('.b-dics'));
    let imagesLength = 6;

    updateImages(sections, idx, imagesLength, 'object');
    updateTabStates(navld, idx);
}

function updateImages(sections, idx, imagesLength, sliderType) {
    for (let i = 0; i < imagesLength; i++) {
        let imageContainer = sections[i].getElementsByClassName('b-dics__image-container')[0];
        if (imageContainer) {
            let image = imageContainer.getElementsByClassName('b-dics__image')[0];
            if (image) {
                let imageFolder = getImageFolder(idx, sliderType);
                let imageFileName = getImageFileName(i, sliderType);
                image.src = `resources/image/${imageFolder}/${imageFileName}`;
            }
        }
    }
}

function objectDepthSceneEvent(idx,selector_id,navld) {
    let dics = document.querySelectorAll('.b-dics')[selector_id];
    let sections = dics.getElementsByClassName('b-dics__section');
    console.log(document.querySelectorAll('.b-dics'));
    let imagesLength = 6;

    updateDepthImages(sections, idx, imagesLength, 'object');
    updateTabStates(navld, idx);
}

function updateDepthImages(sections, idx, imagesLength, sliderType) {
    for (let i = 0; i < imagesLength; i++) {
        let imageContainer = sections[i].getElementsByClassName('b-dics__image-container')[0];
        if (imageContainer) {
            let image = imageContainer.getElementsByClassName('b-dics__image')[0];
            if (image) {
                let imageFolder = getDepthImageFolder(idx, sliderType);
                let imageFileName = getImageFileName(i, sliderType);
                image.src = `resources/image/${imageFolder}/${imageFileName}`;
            }
        }
    }
}

function updateTabStates(navId, activeIdx) {
    let navItems = document.getElementById(navId).getElementsByClassName('nav-item');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].children[0].className = (activeIdx === i) ? "nav-link active" : "nav-link";
    }
}

function getImageFolder(idx, sliderType) {
    let folders = [
        'bicycle',
        'bonsai',
        'counter',
        'flowers',
        'garden',
        'kitchen',
        'room',
        'stump',
        'treehill',
        'train',
        'truck',
        'drjohnson',
        'playroom',
        
        // 'bicycle_depth',
        // 'bonsai_depth',
        // 'counter_depth',
        // 'flowers_depth',
        // 'garden_depth',
        // 'kitchen_depth',
        // 'room_depth',
        // 'stump_depth',
        // 'treehill_depth',
        // 'train_depth',
        // 'truck_depth',
        // 'drjohnson_depth',
        // 'playroom_depth',
    ];
    return folders[idx];
}

function getDepthImageFolder(idx, sliderType) {
    let folders = [
        'bicycle_depth',
        'bonsai_depth',
        'counter_depth',
        'flowers_depth',
        'garden_depth',
        'kitchen_depth',
        'room_depth',
        'stump_depth',
        'treehill_depth',
        'train_depth',
        'truck_depth',
        'drjohnson_depth',
        'playroom_depth',
    ];
    return folders[idx];
}

function getImageFileName(imageIndex, sliderType) {
    let filenames = ['3dgs.png', 'blursplit.png', 'absgs.png', 'pixelgs.png', 'reactgs.png', 'gt.png'];
    return filenames[imageIndex];
}