// import * as FilePond from '../../assets/builds/application';
// import * as FilePond from './filepond';
import * as FilePond from "../../../vendor/filepond/filepond";

// Import the plugin code
import FilePondPluginFileValidateType from "../../../vendor/javascript/filepond-plugin-file-validate-type";

// Import the plugin code
import FilePondPluginImagePreview from "../../../vendor/javascript/filepond-plugin-image-preview";


document.addEventListener("turbo:load", loadFilepond);

// Register the plugin
function loadFilepond() {
  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType
  );

  // Get a reference to the file input element
  const inputElement = document.querySelector("#post-images");

  // Create a FilePond instance
  const pond = FilePond.create(inputElement, {
    credits: {},
    // checkValidity: true,
    storeAsFile: true,
    allowMultiple: true,
    allowReorder: true,
    // acceptedFileTypes: ["image/*"],
    acceptedFileTypes: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp']
  });
}