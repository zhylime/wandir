import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  public btnLabel = 'edit';
  public readonly = true;
  public newItemDom;
  public listData = [''];
  constructor() { }

  ngOnInit() {
    this.newItemDom = document.querySelector('.c-list__item');
  }

  toggleBtnLabel(e){
    var target = event.currentTarget;
    this.btnLabel = this.btnLabel === 'edit' ? 'done' : 'edit';
    target.parentNode.parentNode.classList.toggle('edit');
    this.readonly = !this.readonly;
  }

  addNew($index){
    console.log($index);
    // this.listData.push({key: i + 1, value: ''});
    // var div = this.newItemDom.cloneNode(true);
    // document.querySelector('.c-list').append(div);
  }

  removeItem(e){
    var target = event.currentTarget;
    target.parentNode.parentNode.remove();
  }

 


}
