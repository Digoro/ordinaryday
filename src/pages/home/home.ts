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
  private isSubmit = true;
  private tempDiary;
  diaries = [{
    id: 0,
    date: new Date("2017-11-03"),
    content: "1일차"
  },{
    id: 1,
    date: new Date("2017-11-04"),
    content: "2일차"
  },{
    id: 2,
    date: new Date("2017-11-05"),
    content: "3일차"
  },{
    id: 3,
    date: new Date("2017-11-06"),
    content: "4일차"
  }];

  constructor(public navCtrl: NavController) {
  }

  onSubmit(event) {
    if(this.isSubmit) {
      this.diaries.push({
        id: this.diaries.length,
        date: new Date(),
        content: this.form.value.formModel
      })
    } else {
      this.isSubmit = true;
      this.diaries.map(item => {
        if(item.id == this.tempDiary.id) {
          item.content = this.form.value.formModel;
        }
        return item;
      })
    }
  }

  delete(diary) {
    this.diaries = this.diaries.filter(item => item !== diary);
  }

  update(diary) {
    this.isSubmit = false;
    this.tempDiary = diary;
    this.form.controls['formModel'].setValue(diary.content)
  }
}
