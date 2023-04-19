scales = ["1 1 1", "4 4 4", "10 10 10"];
scaleCounter = 0;

menus = ["camera", "object", "origin"];
menuCounter = 0;

const originPosition = {
    x: 0,
    y: 1.2,
    z: -1
};
const cameraPosition = {
    x: 0,
    y: -.6,
    z: -1
};
const objectPosition = {
    x: 0,
    y: 0,
    z: 1
};



window.onload = (event) => {
    const buttonA = document.getElementById("buttonA");
    buttonA.addEventListener("click", scaleObjects);

    const buttonB = document.getElementById("buttonR");
    buttonB.addEventListener("click", menuChange);

    const buttonC = document.getElementById("buttonC");
    buttonC.addEventListener("click", scaleObjectsSmaller);

};

function scaleObjects() {
    const objects = document.getElementById("objects");
    const scale = objects.getAttribute("scale");
    const menu = document.querySelector("#myMenu");
    const menuPos = menu.getAttribute("position");
    const menuScale = menu.getAttribute("scale");


    if (scale.x < 1.6) {
        scale.x += 0.1;
        scale.y += 0.1;
        objects.setAttribute("scale", scale);

        if (menuPos.z < 0 && scale.x > 0.8) {

            menuScale.x += 0.1;
            menuScale.y += 0.1;
            menu.setAttribute("scale", menuScale);

            menuPos.y += 0.1;
            menuPos.z += .5;
        }
    }

    menu.setAttribute("position", menuPos);


    console.log(scale);
    // console.log('mp-b');
    // console.log(menuPos);
    // console.log('ms-b');
    // console.log(menuScale);

}


function scaleObjectsSmaller() {
    const objects = document.getElementById("objects");
    const scale = objects.getAttribute("scale");
    const menu = document.querySelector("#myMenu");
    const menuPos = menu.getAttribute("position");
    const menuScale = menu.getAttribute("scale");


    if (scale.x > .3) {


        if (menuPos.z > -2 && scale.x <= 1.2000000000000002) {
            menuScale.x -= .1;
            menuScale.y -= .1;
            menu.setAttribute("scale", menuScale);

            menuPos.y -= 0.1;
            menuPos.z -= .5;
        }
        scale.x -= .1;
        scale.y -= .1;
        objects.setAttribute("scale", scale);

        menu.setAttribute("position", menuPos);

    }

    console.log(scale);
    // console.log('mp-s');
    // console.log(menuPos);
    // console.log('ms-s');
    // console.log(menuScale);
}

function menuChange() {

    menuCounter += 1;
    let position = menus[menuCounter % menus.length];
    const camera = document.querySelector("#camera");
    const origin = document.querySelector("#origin");
    const object = document.querySelector("#objects");

    let menu = document.querySelector("#myMenu");
    //menu.parentNode.removeChild(menu);
    //document.querySelector('a-scene').flushToDOM(true);
    if (position === "origin") {
        let newPosition = {};
        //object.appendChild(menu);
        newPosition.x = origin.getAttribute("position").x + originPosition.x;
        newPosition.y = origin.getAttribute("position").y + originPosition.y;
        newPosition.z = origin.getAttribute("position").z + originPosition.z;

        menu.setAttribute("position", newPosition);
    } else if (position === "camera") {

        let newPosition = {};
        //object.appendChild(menu);
        newPosition.x = camera.getAttribute("position").x + cameraPosition.x;
        newPosition.y = camera.getAttribute("position").y + cameraPosition.y;
        newPosition.z = camera.getAttribute("position").z + cameraPosition.z;

        menu.setAttribute("position", newPosition);
    } else if (position === "object") {
        let newPosition = {};
        //object.appendChild(menu);
        newPosition.x = object.getAttribute("position").x + objectPosition.x;
        newPosition.y = object.getAttribute("position").y + objectPosition.y;
        newPosition.z = object.getAttribute("position").z + objectPosition.z;

        menu.setAttribute("position", newPosition);
        //menu.setAttribute("position", objectPosition);
    }

    console.log(position + " " + menu.position);
}

AFRAME.registerComponent('rotation-reader', {
    /**
     * We use IIFE (immediately-invoked function expression) to only allocate one
     * vector or euler and not re-create on every tick to save memory.
     */
    tick: (function() {
        var position = new THREE.Vector3();
        var quaternion = new THREE.Quaternion();

        return function() {
            let position = menus[menuCounter % menus.length];

            if (position === "camera") {
                const camera = document.querySelector("#camera");
                let menu = document.querySelector("#myMenu");

                // let newPosition = {};
                // //object.appendChild(menu);
                // newPosition.x = camera.getAttribute("position").x + cameraPosition.x;
                // newPosition.y = camera.getAttribute("position").y + cameraPosition.y;
                // newPosition.z = camera.getAttribute("position").z + cameraPosition.z;

                // menu.setAttribute("position", newPosition);
            }
        };
    })()
});