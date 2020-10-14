import {
  toggleBold,
  toggleItalic,
  toggleUnderline,
  toggleBullet,
  toggleNumbering,
  setIndentation,
  Indentation,
  toggleBlockQuote,
  setAlignment,
  removeLink,
  insertImage,
  toggleSuperscript,
  toggleSubscript,
  toggleStrikethrough,
  toggleCodeBlock,
  setDirection,
  Alignment,
  Direction,
  createLink
} from 'roosterjs';
import RibbonButton from './ribbon-button/ribbon-button';
declare var require: any;

// credit: https://github.com/microsoft/roosterjs/blob/master/publish/samplesite/scripts/controls/ribbon/ribbonButtons.ts
export const ribbonButtons: { [key: string]: RibbonButton } = {
  bold: {
    title: 'Bold',
    image: require('../ribbon/images/bold.svg'),
    onClick: toggleBold,
    checked: format => format.isBold
  },
  italic: {
    title: 'Italic',
    image: require('../ribbon/images/italic.svg'),
    onClick: toggleItalic,
    checked: format => format.isItalic
  },
  underline: {
    title: 'Underline',
    image: require('../ribbon/images/underline.svg'),
    onClick: toggleUnderline,
    checked: format => format.isUnderline
  },
  bullet: {
    title: 'Bullet',
    image: require('../ribbon/images/bullets.svg'),
    onClick: toggleBullet,
    checked: format => format.isBullet
  },
  numbering: {
    title: 'Numbering',
    image: require('../ribbon/images/numbering.svg'),
    onClick: toggleNumbering,
    checked: format => format.isNumbering
  },
  outdent: {
    title: 'Decrease indent',
    image: require('../ribbon/images/outdent.svg'),
    onClick: editor => setIndentation(editor, Indentation.Decrease)
  },
  indent: {
    title: 'Increase indent',
    image: require('../ribbon/images/indent.svg'),
    onClick: editor => setIndentation(editor, Indentation.Increase)
  },
  blockQuote: {
    title: 'Quote',
    image: require('../ribbon/images/blockQuote.svg'),
    onClick: editor => toggleBlockQuote(editor),
    checked: format => format.isBlockQuote
  },
  alignLeft: {
    title: 'Align left',
    image: require('../ribbon/images/alignleft.svg'),
    onClick: editor => setAlignment(editor, Alignment.Left)
  },
  alignCenter: {
    title: 'Align center',
    image: require('../ribbon/images/aligncenter.svg'),
    onClick: editor => setAlignment(editor, Alignment.Center)
  },
  alignRight: {
    title: 'Align right',
    image: require('../ribbon/images/alignright.svg'),
    onClick: editor => setAlignment(editor, Alignment.Right)
  },
  insertLink: {
    title: 'Insert hyperlink',
    image: require('../ribbon/images/createlink.svg'),
    onClick: editor => {
      const link = window.prompt('Link:');
      const altText = window.prompt('Alternate text:');
      const displayText = window.prompt('Display text:');
      createLink(editor, link, altText, displayText);
    },
    preserveOnClickAway: false
  },
  unlink: {
    title: 'Remove hyperlink',
    image: require('../ribbon/images/unlink.svg'),
    onClick: removeLink,
    checked: format => format.canUnlink
  },
  insertImage: {
    title: 'Insert inline image',
    image: require('../ribbon/images/inlineimage.svg'),
    onClick: editor => {
      const fileInput = document.createElement('input') as HTMLInputElement;
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.style.display = 'none';
      fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
          insertImage(editor, file);
        }
      });
      document.body.appendChild(fileInput);
      fileInput.click();
      document.body.removeChild(fileInput);
    }
  },
  superscript: {
    title: 'Superscript',
    image: require('../ribbon/images/superscript.svg'),
    onClick: toggleSuperscript,
    checked: format => format.isSuperscript
  },
  subscript: {
    title: 'Subscript',
    image: require('../ribbon/images/subscript.svg'),
    onClick: toggleSubscript,
    checked: format => format.isSubscript
  },
  strikethrough: {
    title: 'Strikethrough',
    image: require('../ribbon/images/strikethrough.svg'),
    onClick: toggleStrikethrough,
    checked: format => format.isStrikeThrough
  },
  code: {
    title: 'Code block',
    image: require('../ribbon/images/code.svg'),
    onClick: editor => toggleCodeBlock(editor)
  },
  ltr: {
    title: 'Left-to-right',
    image: require('../ribbon/images/ltr.svg'),
    onClick: editor => setDirection(editor, Direction.LeftToRight)
  },
  rtl: {
    title: 'Right-to-left',
    image: require('../ribbon/images/rtl.svg'),
    onClick: editor => setDirection(editor, Direction.RightToLeft)
  },
  undo: {
    title: 'Undo',
    image: require('../ribbon/images/undo.svg'),
    onClick: editor => editor.undo()
  },
  redo: {
    title: 'Redo',
    image: require('../ribbon/images/redo.svg'),
    onClick: editor => editor.redo()
  }
};
