import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserName } from '../selectors/login.selector';
import { AppState } from '../app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private store : Store<AppState>){

  }

  public userDetails$ = this.store.select(selectUserName);
  userName!:string;

  ngOnInit(): void {
      this.userDetails$.subscribe((data)=>{
        if(data?.username){
          this.userName = data.username
        }
      })
  }
}
