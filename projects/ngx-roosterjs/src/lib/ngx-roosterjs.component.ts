import { Component, OnInit, ElementRef } from '@angular/core';
import { Editor, EditorOptions, EditorPlugin, ContentEdit, Paste, HyperLink, Undo } from 'roosterjs';
import * as RoosterJs from 'roosterjs';

@Component({
  selector: 'ngx-roosterjs',
  templateUrl: './ngx-roosterjs.component.html',
  styleUrls: ['./ngx-roosterjs.component.scss']
})
export class NgxRoosterjsComponent implements OnInit {
  public editor: RoosterJs.Editor;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.createEditor();
  }

  private createEditor() {
    const editorDiv = this.elRef.nativeElement.querySelector('#editorDiv');
    const plugins: EditorPlugin[] = [
      new ContentEdit(),
      new Paste(true /*useDirectPaste*/),
      new HyperLink(href => 'Ctrl+click to open link ' + href),
    ];
    const undo = new Undo(true /*preserveSnapshot*/);
    const options: EditorOptions = {
      plugins,
      undo,
    };

    this.editor = new Editor(editorDiv, options);
  }

  ngOnDestroy(): void {
    this.editor.dispose();
  }
}
