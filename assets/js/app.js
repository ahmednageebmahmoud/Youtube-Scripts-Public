const ngApp = angular.module("ngApp", []);

ngApp.controller("myCtrl", [
  "$scope",
  function (s) {
    s.supportedLanguages=SupportedLanguages;
    s.supportedLanguagesSize=SupportedLanguages.length;
    s.config = {
      isAllowAddLanguages: true,
      isAllowTranslateTitle: true,
      isAllowAddSubtitle:false
    };

    s.buildScript = () => {
      let cllScript = `
        var youTubeScriptCallElemtn=document.createElement("script")
        youTubeScriptCallElemtn.innerHTML=\`var youtubeScriptTranslationObj = new YoutubeScriptTranslation();
        youtubeScriptTranslationObj.isAllowAddLanguages = ${s.config.isAllowAddLanguages};
        youtubeScriptTranslationObj.isAllowTranslateTitle = ${s.config.isAllowTranslateTitle};
        youtubeScriptTranslationObj.isAllowAddSubtitle = ${s.config.isAllowAddSubtitle};
        youtubeScriptTranslationObj.addLanguages()\`
        document.body.appendChild(cllScript);
      `;

      s.script = `
        var youtubeScript = document.createElement('script');
        youtubeScript.src="${window.location.href}/assets/js/youtubeScript.js";
        document.body.appendChild(youtubeScript);
        ${cllScript}
`;
    };

    s.buildScript();
  },
]);
