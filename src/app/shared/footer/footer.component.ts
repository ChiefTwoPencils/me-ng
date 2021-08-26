import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  private readonly _copyYear: number;

  constructor() {
    const date = new Date();
    this._copyYear = date.getFullYear();
  }

  ngOnInit(): void {
  }

  get copyYear() {
    return this._copyYear;
  }

}
