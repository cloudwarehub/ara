import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: window.API_HOST + '/upload'
    });
    var self = this;

    if (!Ember.isEmpty(files)) {

      uploader.on('progress', e => {
        console.log(e);
        self.sendAction('progress', e.percent);
      });
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0]).then(data => {
        self.sendAction('uploaded', data);
      });
    }
  }
});
