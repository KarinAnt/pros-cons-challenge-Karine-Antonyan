import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdatePropCons } from 'src/app/actions/pros-cons.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() texts:string[];
  @Input() title:string;
  public newText:string;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  public deleteItem( index ){
    this.texts.splice(index, 1);
    this.updateList(this.texts);
  }

  public changeText(elem, i){
    if(elem.target.outerText && elem.target.outerText.trim()){
      this.texts[i] = elem.target.outerText;
      this.updateList(this.texts);
    }
  }

  public addNew(){
    if(this.newText && this.newText.trim()){
      this.texts.push(this.newText);
      this.updateList(this.texts);
      this.newText = '';
    }
  }

  public updateList(texts){
    var updateText = {};
    updateText[this.title] = texts;
    this.store.dispatch(new UpdatePropCons( { prosOrCons:updateText, title:this.title}));
  }

}
