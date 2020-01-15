import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  public source = {
    isReadOnly: false,
    propertyAnnotations: [
      {
        name: 'username',
        displayName: 'Username',
        editor: 'Text',
        validators: [ { name: 'NonEmpty' } ]
      },
      {
        name: 'password',
        displayName: 'Password',
        editor: 'Password',
        validators: [ { name: 'NonEmpty' } ]
      }
    ]
  };

}
