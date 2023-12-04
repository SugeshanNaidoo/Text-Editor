    function makeBold() {
      document.execCommand('bold', false, null);
    }

    function makeItalic() {
      document.execCommand('italic', false, null);
    }

    function changeFont() {
      var font = document.getElementById('fontSelector').value;
      document.execCommand('fontName', false, font);
    }

    function changeColor() {
      var color = document.getElementById('colorSelector').value;
      document.execCommand('foreColor', false, color);
    }

    var editor = document.getElementById('editor');
    var errorMessage = document.getElementById('error-message');

    editor.addEventListener('input', function () {
      var editorHeight = editor.scrollHeight;
      var maxHeight = parseInt(window.getComputedStyle(editor).maxHeight);
      
      if (editorHeight >= maxHeight) {
        editor.setAttribute('contenteditable', 'false');
        errorMessage.textContent = 'Text field is filled up. No more input allowed.';
      } else {
        editor.setAttribute('contenteditable', 'true');
        errorMessage.textContent = '';
      }
    });