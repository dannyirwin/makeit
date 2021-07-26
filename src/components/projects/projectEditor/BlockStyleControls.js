import EditorStyleButton from './EditorStyleButton';

const BLOCK_TYPES = [
  //{ label: "H1", style: "header-one" },
  { label: 'H1', style: 'header-two' },
  { label: 'H2', style: 'header-three' },
  //{ label: "H4", style: "header-four" },
  //{ label: "H5", style: "header-five" },
  //{ label: "H6", style: "header-six" },
  { label: '\u275D\u275E', style: 'blockquote' },
  { label: '\u2022\u2022\u2022', style: 'unordered-list-item' },
  { label: '123', style: 'ordered-list-item' }
  //{ label: "Code Block", style: "code-block" }
];

const BlockStyleControls = props => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className='editor-controls'>
      {BLOCK_TYPES.map(type => (
        <EditorStyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default BlockStyleControls;
