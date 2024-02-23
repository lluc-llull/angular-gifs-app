import {Component, Input, OnInit} from '@angular/core';
import {Gif} from "../../interfaces/gifs.interfaces";

@Component({
  selector: 'app-gifs-card',
  templateUrl: './card.component.html'
})
export class GifsCardComponent implements OnInit{

  @Input()
  public gif!: Gif;

  ngOnInit():void {
    // throw new Error('Mehtod not implemented.');
    if(!this.gif) throw new Error('Gif property is required.');
  }

}
