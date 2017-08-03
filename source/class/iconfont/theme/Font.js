/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("iconfont.theme.Font",
{
  extend : qx.theme.indigo.Font,

  fonts :
  {
    "FontAwesome": {
      size: 16,
      lineHeight: 1,
      comparisonString : "\uf1e3\uf1f7\uf11b\uf19d",
      family: ["FontAwesome"],
      sources: [
        {
          family: "FontAwesome",
          source: [
            "iconfont/fonts/fontawesome-webfont.ttf" , 
            "iconfont/fonts/fontawesome-webfont.woff", 
            "iconfont/fonts/fontawesome-webfont.woff2", 
            "iconfont/fonts/fontawesome-webfont.eot"
          ]
        }
      ]
    },
    "FontAwesome32": {
      size: 32,
      lineHeight: 1,
      comparisonString : "\uf1e3\uf1f7\uf11b\uf19d",
      family: ["FontAwesome"],
      sources: [
        {
          family: "FontAwesome",
          source: [
            "iconfont/fonts/fontawesome-webfont.ttf" ,
            "iconfont/fonts/fontawesome-webfont.woff",
            "iconfont/fonts/fontawesome-webfont.woff2",
            "iconfont/fonts/fontawesome-webfont.eot"
          ]
        }
      ]
    }


  }
});
