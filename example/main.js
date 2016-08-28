var THREE = require('three');
import ThreeKiso from "../index";
var threeKiso;

require('domready')(()=> {
    var threeKiso = new ThreeKiso();
    threeKiso.camera.position.z = 20;
    threeKiso.camera.position.y = 20;
    threeKiso.camera.position.x = 20;
    threeKiso.camera.lookAt(new THREE.Vector3());
    var mesh = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe : true } ));

    var updateMesh = function(dt){
        mesh.rotation.y += dt ;
    }
    threeKiso.add(mesh, 'cube');
    threeKiso.addUpdateCallback(updateMesh);
    threeKiso.addHelper();
});