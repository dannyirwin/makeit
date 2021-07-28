import { useState, useRef } from 'react';
import {
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  convertToRaw,
  ContentState,
  convertFromHTML
} from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import draftToHtml from 'draftjs-to-html';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

export default function TextEditor({ showTools, HTMLContent, setContent }) {
  const initialContent = () => {
    if (HTMLContent) {
      const blocksFromHTML = convertFromHTML(HTMLContent);
      const content = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      return EditorState.createWithContent(content);
    } else {
      return EditorState.createEmpty();
    }
  };
  const [editorState, setEditorState] = useState(initialContent());
  const ref = useRef();
  const focus = () => ref.current.focus();

  const _onChange = editorState => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContent);
    setEditorState(editorState);
    setContent(htmlContent);
  };

  const _handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      _onChange(newState);
      return true;
    }
    return false;
  };

  const _mapKeyToEditorCommand = e => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        _onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  };

  const _toggleBlockType = blockType => {
    _onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const _toggleInlineStyle = inlineStyle => {
    _onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const _getBlockStyle = block => {
    switch (block.getType()) {
      case 'blockquote':
        return 'editor-blockquote';
      default:
        return null;
    }
  };
  // let className = 'Editor';

  // // Hides the placeholder text when a style button is clicked
  // let contentState = editorState.getCurrentContent();
  // if (!contentState.hasText()) {
  //   if (contentState.getBlockMap().first().getType() !== 'unstyled') {
  //     className += ' editor-hidePlaceholder';
  //   }
  // }

  return (
    <div className={'TextEditor'} onClick={focus}>
      {showTools ? (
        <div className='editor-buttons-container'>
          <InlineStyleControls
            editorState={editorState}
            onToggle={_toggleInlineStyle}
          />
          <BlockStyleControls
            editorState={editorState}
            onToggle={_toggleBlockType}
          />
        </div>
      ) : null}
      <Editor
        className='editor-input'
        blockStyleFn={_getBlockStyle}
        editorState={editorState}
        handleKeyCommand={_handleKeyCommand}
        keyBindingFn={_mapKeyToEditorCommand}
        onChange={_onChange}
        ref={ref}
        spellCheck={true}
      />
    </div>
  );
}
