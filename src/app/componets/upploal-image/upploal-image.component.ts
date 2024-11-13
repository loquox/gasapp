import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/model';

@Component({
  
  selector: 'app-upploal-image',
  templateUrl: './upploal-image.component.html',
  styleUrls: ['./upploal-image.component.scss'],
})
export class UpploalImageComponent  implements OnInit {


  
  // @Input() producto!:Producto;
   newFile!:File;
   newImage!:string;

   @Input() editar!:boolean;

   @Input() entity!:any;

  @Output() newImageEmiter = new EventEmitter<File>();


  constructor() { }

  ngOnInit() { }

  async newImageUpload(event: any){
 
    if(event.target.files && event.target.files[0]){
      this.newFile= event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image) => {
        this.newImage = image.target?.result as string;
            });
      reader.readAsDataURL(event.target.files[0]);
      this.newImageEmiter.emit(this.newFile);
    
  }
       
  }

}
