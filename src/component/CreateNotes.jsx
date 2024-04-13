import React from 'react'

const CreateNotes = ({inputText, setInputText,saveHandler}) => {

    const char = 200;
    const charLimit = char -inputText.length;

  return (
    <div className='note'>
        <textarea
            cols={10}
            rows={5}
            placeholder='Type...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            maxLength={200}
        >

        </textarea>
        <div className='note_footer'>
            <span className='label'>{charLimit} left </span>
            <button className='note_save' onClick={saveHandler}>save</button>
        </div>

    </div>
  )
}

export default CreateNotes