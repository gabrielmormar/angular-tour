import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.formBuilder.array([
        this.formBuilder.control('')
      ])
  });

    // new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   address: new FormGroup({
    //       street: new FormControl(''),
    //       city: new FormControl(''),
    //       state: new FormControl(''),
    //       zip: new FormControl('')
    //   })
  // });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAliases() {
    this.aliases.push(this.formBuilder.control(''));
  }

}
