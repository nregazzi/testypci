import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testYPCI';
  extension:string = '';

  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.extension = "l'extension du fichier est " + file.name.split('.').pop();
        
    }
  }
}
