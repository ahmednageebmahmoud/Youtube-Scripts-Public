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
        var script = document.createElement('script');
        script.src="${window.location.href}assets/js/youtubeScript.js";
        script.id="ahmedsezeryoutubescript";
        script.setAttribute("skipNotSupportedLanguages",${s.config.addAllSubtitleLanguagesSupportedByYoutubeAndTubebuddyOnly})
        script.setAttribute("isAllowTranslateTitle",${s.config.translateTitleAndDescriptionAutomaticallyByTubebuddyExtension})
        script.setAttribute("isAllowAddSubtitle",${s.config.automaticallyTranslateSubtitleFiles})
        document.body.appendChild(script);
`;

 
    };

    s.buildScript();
  },
]);

