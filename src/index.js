'use strict';

const xml2js = require('@adobe/node-xml2js');
const request = require('request-promise-native');

const XMP_API_URL = 'https://api.xmp.adobe.com/';

/**
 * Initializes the extension by adding event listeners and setting up the panel.
 */
function init() {
  const csInterface = new CSInterface();
  const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + '/';

  // Loads the HTML for the panel.
  csInterface.addEventListener('com.adobe.host.notification.OpenExtensionHTML', () => {
    const panelPath = extensionRoot + 'src/panel.html';
    csInterface.updatePanelWithResource(csInterface.getExtensionID(), panelPath);
  });

  // Sends a message to the HTML panel when the user clicks the button.
  csInterface.addEventListener('buttonClicked', () => {
    csInterface.evalScript(`sendMessage('Button clicked!')`);
  });

  // Receives a message from the HTML panel and logs it to the console.
  csInterface.addEventListener('messageReceived', event => {
    console.log(event.data);
  });
}

/**
 * Sends a request to the XMP API to retrieve metadata for the current document.
 * @param {string} filePath - The path to the file.
 * @return {Promise} A promise that resolves with the metadata.
 */
function getMetadata(filePath) {
  return new Promise((resolve, reject) => {
    // Creates the request options.
    const options = {
      url: XMP_API_URL,
      qs: {
        'xmp': filePath,
        'namespace': 'http://ns.adobe.com/xap/1.0/',
        'prefix': 'xmp'
      }
    };

    // Sends the request.
    request.get(options)
      .then(response => {
        // Parses the response as XML.
        xml2js.parseString(response, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      })
      .catch(error => {
        reject(error);
      });
  });
}

init();

