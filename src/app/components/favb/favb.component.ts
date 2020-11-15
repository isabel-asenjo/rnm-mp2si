import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-favb',
  templateUrl: './favb.component.html',
  styleUrls: ['./favb.component.scss']
})
export class FavbComponent implements OnInit {
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  constructor(private authService: AuthServiceService) { }


  ngOnInit(): void {
  }
  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  isAuthenticated(): boolean{
    if (this.authService.isAuthenticated()) {
      return true;
    }
    return false;
  }

}


