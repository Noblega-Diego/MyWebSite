import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three";
import { SimplexNoise } from "./../first-cube/perlin";


class Blob extends THREE.Mesh{
  public noise!:any;
  constructor(color:THREE.ColorRepresentation, public velocity = 0.1, public size = 1) {
      super(new THREE.SphereGeometry(1, 140, 140), new THREE.MeshBasicMaterial({ color }))
      this.noise = new SimplexNoise();
  }
}

@Component({
  selector: 'app-first-cube',
  templateUrl: './firstCube.component.html',
  styleUrls: ['./firstCube.component.css']
})
export class FirstCubeComponent implements OnInit, AfterViewInit{

  @ViewChild('canvas')
  private canvasRef!: ElementRef

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private plane!: THREE.Mesh;
  private raycaster = new THREE.Raycaster();

  //private sphere1: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private spheres: Blob[] = []
  private mouse = new THREE.Vector2()

  @Input() public cameraZ: number = 400;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;

  @Input('farClipping') public farClippingPlane: number = 1000;

  @Input() public rotationSpeedX: number = 0.05;

  @Input() public rotationSpeedY: number = 0.01;
  noise!: SimplexNoise;
  
  private get canvas(): HTMLCanvasElement{
    return this.canvasRef.nativeElement
  }
  private getAspectRatio() {
    return window.innerWidth / window.innerHeight;
  }

  private get heightCanvas() {
    return window.innerHeight;
  }

  private get widthCanvas() {
    return window.innerWidth;
  }
  constructor() { }
  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }

  ngOnInit() {
    this.noise = new SimplexNoise()
    this.plane = new THREE.Mesh(new THREE.PlaneGeometry(20,20), new THREE.MeshBasicMaterial({color:0x000, transparent:true, opacity:0}))
  }


  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e:MouseEvent) {
    this.mouse.x = ((e.clientX / window.innerWidth) * 2 - 1);
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    e.preventDefault()
  }

  @HostListener('window:resize',['$event'])
  onResizewindows(e:any) {
    console.log(e);
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
  
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    const light = new THREE.PointLight( 0xFFFFFF, 1, 50 );
    light.position.set( 10, 10, 20 );
    const light2 = new THREE.PointLight( 0xFFFFFF, 1, 100 );
    light2.position.set( 0, 0, 1 );
    //this.spheres.push(new THREE.Mesh(this.geometry.clone(), new THREE.MeshBasicMaterial({ color: 0xF50D61 })));
    //this.spheres.push(new THREE.Mesh(this.geometry.clone(), new THREE.MeshBasicMaterial({ color: 0x3166ED })));
    this.spheres.push(new Blob(0x3166ED, 0.05,1.5))
    this.spheres.push(new Blob(0x191C25, 0.08,1.9))
    this.spheres.push(new Blob(0xF50D61, 0.08,2))
    this.spheres.push(new Blob(0xFBFF29, 0.08,1.2))

    this.spheres[0].position.x = 1.5
    this.spheres[0].position.y = 3.5
    this.spheres[1].position.x = 4.2
    this.spheres[1].position.y = 2.5
    this.spheres[2].position.x = 6
    this.spheres[2].position.y = 0.5
    this.spheres[3].position.x = 6
    this.spheres[3].position.y = 2.8
    this.spheres[0].position.z = 3
    this.spheres[2].position.z = -1
    this.spheres[3].position.z = 2

    this.scene.add( ...this.spheres);
    this.scene.add(this.plane)
    //this.spheres[0].position.x += 1
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
  }

  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha:true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.widthCanvas, this.heightCanvas);
    this.renderer.setClearColor( 0xFFFFFF, 0 )

    let component: FirstCubeComponent = this;
    (function render() {
      //component.move(...component.spheres)
      component.animateBlobs(...component.spheres)
      component.renderer.render(component.scene, component.camera);
      requestAnimationFrame(render);
    }());
  }

  private move(...elements:Blob[]) {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersect = this.raycaster.intersectObjects([this.plane]);
    if (intersect.length) {
      const { point } = intersect[0];
      elements.forEach((a)=>{
        const intersectBlob = this.raycaster.intersectObjects([a]);
        if(intersectBlob.length === 0)
          a.translateOnAxis(new THREE.Vector3().subVectors(point, a.position).normalize(), a.velocity);
      })
    }
  }

  private animateBlobs(...animate: Blob[]){
      animate.forEach((a)=>{
        this.blobSphere(a);
      })
  }
  private blobSphere (sphere:Blob){
    var time = performance.now() * 0.0001;
    var k = 0.5;
    const position = sphere.geometry.attributes.position;
    let vector: THREE.Vector3 = new THREE.Vector3()
    for (var i = 0; i < position.count; i++) {
        vector.fromBufferAttribute(position, i)
        vector.normalize().multiplyScalar(sphere.size + 0.4 * sphere.noise.noise3d(vector.x * k + time, vector.y * k, vector.z * k));
        position.setXYZ(i, vector.x, vector.y, vector.z)
    }
    sphere.geometry.computeVertexNormals();
    sphere.geometry.attributes.position.needsUpdate = true;
  }

}
