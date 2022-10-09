const ngApp = angular.module("ngApp", []);

ngApp.controller("myCtrl", [
  "$scope",
  function (s) {
    s.config = {
      addAllSubtitleLanguagesSupportedByYoutubeAndTubebuddyOnly: true,
      translateTitleAndDescriptionAutomaticallyByTubebuddyExtension: true,
      automaticallyTranslateSubtitleFiles: true,
    };

    s.buildScript = () => {
      s.script = `
      document.body.insertAdjacentHTML("beforeend",\`
        <script id="ahmedsezeryoutubescript" src="${window.location.href}assets/js/youtubeScript.js"
        skipNotSupportedLanguages="${!s.config.addAllSubtitleLanguagesSupportedByYoutubeAndTubebuddyOnly}"
        isAllowAddSubtitle="${s.config.translateTitleAndDescriptionAutomaticallyByTubebuddyExtension}"
        isAllowTranslateTitle="${s.config.automaticallyTranslateSubtitleFiles}"
        ></script>\`)

`;

 
    };

    s.buildScript();
  },
]);
