import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.css'],
  inputs:['activeColor','baseColor','overlayColor']
})
export class ImgUploadComponent {

    activeColor: string = 'green';
    borderColor: string = '';
    baseColor: string = '#ccc';
    overlayColor: string = 'rgba(255,255,255,0.5)';

    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
    imageSrc: string = '';
    iconColor: string ='';

    handleDragEnter() {
        console.log("handleDragEnter")
        this.dragging = true;
    }

    handleDragLeave() {
         console.log("handleDragLeave")
        this.dragging = false;
    }

    handleDrop(e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }

    handleImageLoad() {
        this.imageLoaded = true;
        this.iconColor = this.overlayColor;
    }

    handleInputChange(e) {
        console.log("input change")
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }

    _handleReaderLoaded(e) {
         console.log("_handleReaderLoaded")
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
        console.log("Base64_@@:",this.imageSrc)
    }

    _setActive() {

        this.borderColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.activeColor;
        }
    }

    _setInactive() {
        this.borderColor = this.baseColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.baseColor;
        }
    }

    cancel(){
           this.imageSrc="null"
    }


}
