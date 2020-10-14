import { Component, OnInit, Input } from '@angular/core';
import { RibbonPlugin } from '../plugins/ribbon.plugin';
import { FormatState, Editor, getFormatState } from 'roosterjs';
import { ribbonButtons } from './ribbon-buttons';
import RibbonButton from './ribbon-button/ribbon-button';

@Component({
  selector: 'lib-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {
  @Input() plugin: RibbonPlugin;
  public format: FormatState;
  public editor: Editor;
  public buttons: { [key: string]: RibbonButton };
  public objectKeys = Object.keys;
  constructor() {}

  ngOnInit() {
    this.editor = this.plugin.getEditor();
    this.buttons = ribbonButtons;
    this.plugin.onChange.subscribe(format => {
      this.format = format;
    });
  }

  onButtonClick(button: RibbonButton) {
    this.format = this.editor && getFormatState(this.editor);
  }
}
