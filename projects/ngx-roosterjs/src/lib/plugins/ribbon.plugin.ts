import { BehaviorSubject } from 'rxjs';
import {
  EditorPlugin,
  PluginEvent,
  Editor,
  PluginEventType,
  FormatState,
  getFormatState,
} from 'roosterjs';

export class RibbonPlugin implements EditorPlugin {
  private editor: Editor;
  private formatStateSubject = new BehaviorSubject<FormatState>({});

  public onChange = this.formatStateSubject.asObservable();

  getName(): string { return 'RibbonPlugin'; }

  initialize(editor: Editor): void {
    this.editor = editor;
    this.updateFormatState();
  }

  getEditor() {
    return this.editor;
  }

  dispose(): void {
    this.editor.dispose();
    this.formatStateSubject.complete();
  }

  onPluginEvent(event: PluginEvent): void {
    if (
      (event.eventType === PluginEventType.KeyUp ||
        event.eventType === PluginEventType.MouseUp ||
        event.eventType === PluginEventType.MouseDown ||
        event.eventType === PluginEventType.ContentChanged)
    ) {
      this.updateFormatState();
    }
  }

  private updateFormatState(): void {
    const formatState = this.editor && getFormatState(this.editor);
    this.formatStateSubject.next(formatState);
  }
}
