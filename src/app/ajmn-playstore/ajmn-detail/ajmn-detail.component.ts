import { Component } from '@angular/core';

@Component({
  selector: 'app-ajmn-detail',
  templateUrl: './ajmn-detail.component.html',
  styleUrls: ['./ajmn-detail.component.scss']
})
export class AjmnDetailComponent {
  showEnglishSection = true;

  toggleLanguage() {
    this.showEnglishSection = !this.showEnglishSection;
  }
}
