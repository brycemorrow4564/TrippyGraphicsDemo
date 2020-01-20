class CameraModel {

    static defaultCameraState = {
      near: .01, 
      far: 400, 
      fov: 40
    }; 

    static defaultCameraAnimationState = {
      cameraStepPerFrame: .02, 
      rotate: false, 
      glide: true, 
      forward: true, 
      rotateStep: Math.PI / 180
    }

    static cameraNumericProperties = [
      { 
        field: 'near', 
        min: 1, 
        max: 100, 
        step: 1 
      }, 
      { 
        field: 'far', 
        min: 100, 
        max: 1000, 
        step: 10
      }, 
      { 
        field: 'fov', 
        min: 30, 
        max: 90, 
        step: 3
      }, 
    ]

    static animationBooleanProperties = [
      'rotate', 
      'glide', 
      'forward'
    ]

    static animationNumericProperties = [
      { 
        field: 'cameraStepPerFrame', 
        min: .01, 
        max: 1, 
        step: .01 
      }, 
      { 
        field: 'rotateStep', 
        min: Math.PI / 180, 
        max: Math.PI / 2, 
        step: Math.PI / 180 
      }, 
    ]

    constructor(camera) {
  
      // A Three.js camera object 
      this.camera = camera; 
  
      // Camera object settings 
      this.cameraAnimationState = {};
      this.cameraState = {}; 
  
      this.setDefaultCameraState(); 
      this.setDefaultCameraAnimationState(); 
      this.initCamera(); 
      this.applyCameraState(); 
    }

    initCamera() {
      this.camera.aspect = window.innerWidth / window.innerHeight; 
      this.camera.position.set(0, 0, -12);
      this.camera.lookAt(0, 0, 0);     
      this.camera.updateProjectionMatrix(); 
    }
  
    setDefaultCameraAnimationState() {
      Object.assign(this.cameraAnimationState, CameraModel.defaultCameraAnimationState);
    }
      
    setDefaultCameraState() {
      Object.assign(this.cameraState, CameraModel.defaultCameraState);
    };

    applyCameraState() {
      // update camera properties with current state 
      for (let k of Object.keys(this.cameraState)) {
        this.camera[k] = this.cameraState[k]; 
      }
      // update the camera matrix 
      this.camera.updateProjectionMatrix(); 
    }
  
    stepCamera() {
      let { cameraStepPerFrame, forward } = this.cameraAnimationState; 
      let newZ = this.camera.position.z + (cameraStepPerFrame * (forward ? 1 : -1)); 
      this.camera.position.set(0, 0, newZ); 
    }
  
    rotateCamera() {
      let { rotateStep } = this.cameraAnimationState; 
      let { x, y, z } = this.camera.rotation; 
      this.camera.rotation.set(x, y, z + rotateStep); 
    }

    applyCameraAnimationConfig(config) {
      // Updating cameraAnimationState 
      Object.assign(this.cameraAnimationState, config); 
    }

    applyCameraConfig(config) {
      // Updating cameraState 
      Object.assign(this.cameraState, config); 
      this.applyCameraState(); 
    }

    update() {
      /*
      Updates threejs camera based on model settings 
      */ 
  
      // Animate camera 
      const { glide, rotate } = this.cameraAnimationState; 
      if (glide)            this.stepCamera(); 
      if (rotate)           this.rotateCamera(); 
      if (glide || rotate)  this.camera.updateProjectionMatrix();
  
    }
  
}

export default CameraModel; 