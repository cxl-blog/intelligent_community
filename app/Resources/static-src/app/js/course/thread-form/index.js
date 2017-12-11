import AttachmentActions from 'app/js/attachment/widget/attachment-actions';

let $form = $('#thread-form');
let validator = $form.validate({
  rules: {
    'title': {
      required: true,
      trim: true,
    },
    'content': {
      required: true,
    }
  }
})

$('.js-btn-thread-save').click((event) => {
  if (validator.form()) {
    $(event.currentTarget).button('loading');
    $form.submit();
  }
})

let editor = CKEDITOR.replace('thread_content', {
  toolbar: 'Thread',
  filebrowserImageUploadUrl: $('#thread_content').data('imageUploadUrl')
});

editor.on('change', () => {
  $('#thread_content').val(editor.getData());
  validator.form();
});
editor.on('blur', () => {
  $('#thread_content').val(editor.getData());
  validator.form();
});

new AttachmentActions($form);
