import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.styl']
})
export class CreatepostComponent implements OnInit {

  // selectedFile: ImageSnippet;

  constructor(){}

  ngOnInit() {
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    // reader.addEventListener('load', (event: any) => {

    //   this.selectedFile = new ImageSnippet(event.target.result, file);

    //   this.imageService.uploadImage(this.selectedFile.file).subscribe(
    //     (res) => {
        
    //     },
    //     (err) => {
        
    //     })
    // });

    reader.readAsDataURL(file);
  }

}
