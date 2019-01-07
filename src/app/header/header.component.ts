import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle = false;
  @Output() toggleEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    this.toggleEvent.emit(this.toggle);
  }

}
