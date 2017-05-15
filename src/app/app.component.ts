import { Component, OnInit } from '@angular/core';

import * as _THREE from 'three';
declare const THREE: typeof _THREE;

declare const require: any;
const altspace = require('exports-loader?altspace!altspace');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _scene: THREE.Scene = new THREE.Scene();

  private _geometry: THREE.BoxGeometry = new THREE.BoxGeometry(200, 200, 200);
  private _mesh: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
  private _cube: THREE.Mesh = new THREE.Mesh(this._geometry, this._mesh);

  private _renderer = altspace.getThreeJSRenderer({version: '0.2.0'});

  private _render() {
    requestAnimationFrame(() => this._render());

    this._cube.rotation.x += 0.01;
    this._cube.rotation.y += 0.01;

    this._renderer.render(this._scene);
  }

  ngOnInit() {
    this._scene.add(this._cube);

    this._render();
  }
}
