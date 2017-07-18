document.addEventListener('turbolinks:load', function(element) {
  Array.from(document.querySelectorAll('.settings-card-content')).forEach(function(element){

    var toggler = element.querySelector('.settings-card-content__edit-button--open');
    var settingsViewForm = element.querySelector('.settings-view--hidden')
    var settingsView = element.querySelector('.settings-view')
    var updateButton = element.querySelector('.settings-view__button')

    toggler.addEventListener('click', function() {
      switchViews();
    });

    function switchViews() {
      settingsView.classList.toggle('settings-view--hidden');
      settingsView.classList.toggle('settings-view');

      settingsViewForm.classList.toggle('settings-view--hidden');
      settingsViewForm.classList.toggle('settings-view');

      toggler.classList.toggle('settings-card-content__edit-button--open');
      toggler.classList.toggle('settings-card-content__edit-button--close');
    }

    $(settingsViewForm).on('ajax:success', function(event, data, settings) {
      document.querySelector('.learning_goal').innerHTML = data.learning_goal
      document.querySelector('.username').innerHTML = data.username
      document.querySelector('.email').innerHTML = data.email
      switchViews();
    });
  });
});
