import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client = {
    id: '',
    nom: '',
    siret: '',
    published: false
  };
  submitted = false;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  saveClient(): void {
    const data = {
      id: this.client.id,
      nom: this.client.nom,
      siret: this.client.siret
    };

    this.clientService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newClient(): void {
    this.submitted = false;
    this.client = {
      id: '',
      nom: '',
      siret: '',
      published: false
    };
  }

}
