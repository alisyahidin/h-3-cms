module.exports = {
  settings: {
    "parser": {
      "enabled": true,
      "multipart": true,
      "formidable": {
        "maxFileSize": 1048576000
      }
    },
    cache: {
      enabled: true,
      models: [
        'awards-page',
        'footer',
        'landing-page',
        'logo',
        'our-works-page',
      ],
    },
  }
}