import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: Object = {
    placeholderText: 'write your a ordinary day'
  };
  form = new FormGroup({
    formModel: new FormControl('', Validators.required),
  });
  storage;

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.storage = storage
  }

  onSubmit(event) {
    storage.set('name', 'Max');

    storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
    console.info('this.form.value ... ', this.form.value.formModel);
  }
}
