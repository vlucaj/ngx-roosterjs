import { FormatState, Editor } from 'roosterjs';

export default interface RibbonButton {
    title: string;
    image: any;
    onClick: (editor: Editor, value?: string) => void;
    checked?: (format: FormatState, editor: Editor) => boolean;
    dropDownItems?: { [key: string]: string };
    cssProperty?: string;
    preserveOnClickAway?: boolean;
  }