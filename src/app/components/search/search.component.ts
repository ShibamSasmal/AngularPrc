import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { RouterLink} from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
@Output() search = new EventEmitter<string>();
  onSearch(){
    console.log("Search button clicked");
    this.search.emit(this.text)
  }
  text = "";
  // inputChange(event : any){
  //   console.log("Change value called", event.target.value);
  //   // this.text = event.target.value;
  // }

  // onTyping(event: any){
  //   console.log("Typing called", event.target.value);
  // }
}
