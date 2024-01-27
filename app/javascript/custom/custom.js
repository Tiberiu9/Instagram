// import * as FilePond from "../../assets/builds/application";
// import * as FilePond from "./filepond";
import * as FilePond from "../../../vendor/filepond/filepond";


// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';


// Register the plugin
FilePond.registerPlugin(FilePondPluginImagePreview);

// Get a reference to the file input element
const inputElement = document.querySelector("#post-images");

// Create a FilePond instance
const pond = FilePond.create(inputElement,{
  credits: {},
  storeAsFile: true,
  allowMultiple: true,
  allowReorder: true
});