import { Component, OnInit, SimpleChanges, EventEmitter, Output, Input } from '@angular/core';
import RibbonButton from './ribbon-button';
import { FormatState, Editor } from 'roosterjs';

@Component({
  selector: 'lib-ribbon-button',
  templateUrl: './ribbon-button.component.html',
  styleUrls: ['./ribbon-button.component.scss']
})
export class RibbonButtonComponent implements OnInit {
  @Input() button: RibbonButton;
  @Input() key: string;
  @Input() format: FormatState;
  @Input() editor: Editor;
  @Output() buttonClicked: EventEmitter<RibbonButton> = new EventEmitter<RibbonButton>();

  checked: boolean;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.button)
    if (this.button.checked) {
      this.checked = this.button.checked(this.format, this.editor);
    }
  }

  onClick(value?: string) {
    this.button.onClick(this.editor, value);
    this.buttonClicked.emit(this.button);
  }
}
