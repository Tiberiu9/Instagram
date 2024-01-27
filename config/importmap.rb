# Pin npm packages by running ./bin/importmap

pin "application"
pin 'filepond', preload: true
pin_all_from "app/javascript/custom", under: "custom", preload: true
pin "filepond-plugin-image-preview", preload: true
