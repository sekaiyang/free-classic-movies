/* 免费经典电影 — 多语言（默认英文，访客选择保存在 localStorage） */
var LANGS = {
  en: "English",
  zh: "中文",
  sv: "Svenska",
  es: "Español",
  fr: "Français",
  de: "Deutsch"
};

var STRINGS = {
en: {
  "nav.home": "Home", "nav.about": "About", "nav.contact": "Contact", "nav.privacy": "Privacy Policy",
  "ad": "Ad space",
  "index.title": "Free Classic Movies | 免费经典电影 — Watch public-domain classic films free",
  "index.desc": "35 classic public-domain films free to watch online: Chaplin, horror, film noir, Chinese classics, all from the Internet Archive (archive.org).",
  "intro.h1": "Free classic movies in the public domain — watch for free",
  "intro.p": "35 classic films, all from the Internet Archive (archive.org) and in the public domain — free to watch. Videos stream directly from the Internet Archive, not through this site's servers.",
  "search.ph": "Search titles…",
  "search.aria": "Search films",
  "count": "{n} films",
  "note": "Tip: click a poster to watch online. Some early films are silent or early sound films; picture quality follows the original restored version.",
  "empty": "No films match. Try a different keyword.",
  "watch.pd": "This film is in the public domain. Source: Internet Archive (archive.org). ",
  "watch.ia": "View this film on Internet Archive →",
  "watch.close": "Close",
  "watch.pdlabel": "Public Domain",
  "footer.pd": "All films on this site are public domain works from the Internet Archive (archive.org), free to watch. Poster images are also from the Internet Archive.",
  "cat.all": "All", "cat.Adventure": "Adventure", "cat.Animation": "Animation", "cat.Comedy": "Comedy",
  "cat.Drama": "Drama", "cat.Horror": "Horror", "cat.Mystery": "Mystery", "cat.Noir": "Film Noir",
  "cat.Sci-Fi": "Sci-Fi", "cat.Chinese": "Chinese Films",
  "about.title": "About | Free Classic Movies",
  "about.desc": "About Free Classic Movies: a non-commercial personal site for free public-domain classic films.",
  "about.h1": "About this site",
  "about.p1": "Free Classic Movies is a non-commercial personal website that collects classic films in the public domain for everyone to watch for free.",
  "about.p2": "The site currently features 35 films, including Charlie Chaplin comedies from the silent era, early horror films, film noir, and Chinese classics from 1929 to 1962 — such as The Goddess and Love and Duty starring Ruan Lingyu, Jackie Chan's first film Big and Little Wong Tin Bar, and Children of Troubled Times, whose theme song became the March of the Volunteers.",
  "about.p3": "All films come from the Internet Archive (archive.org) and are in the public domain; videos stream directly from the Internet Archive, not through this site's servers. Poster images are also from the Internet Archive.",
  "about.p4": "This site is maintained by one person in their spare time, and the film list is updated from time to time. If you find a film that won't play, or have a public-domain film to recommend, please let us know via the <a href=\"contact.html\">contact page</a>.",
  "contact.title": "Contact | Free Classic Movies",
  "contact.desc": "Contact Free Classic Movies: report a film that won't play, recommend a film, or send suggestions.",
  "contact.h1": "Contact us",
  "contact.p1": "If you find a film that won't play, have a public-domain film to recommend, or have any suggestions for this site, we'd love to hear from you.",
  "contact.h2a": "Contact via GitHub",
  "contact.p2": "The easiest way is to open an Issue (a question or suggestion) in this site's GitHub repository:",
  "contact.p3": "When you submit, please briefly say which film it is and what problem you ran into — we'll look into it as soon as we see it.",
  "contact.h2b": "Other notes",
  "contact.p4": "This site is maintained by one person in their spare time, so replies may not be instant — thank you for your understanding. This site offers no paid services and collects no personal information.",
  "privacy.title": "Privacy Policy | Free Classic Movies",
  "privacy.desc": "Privacy Policy of Free Classic Movies: this site collects no personal information; third-party advertising and cookies may be used in the future.",
  "privacy.h1": "Privacy Policy",
  "privacy.updated": "Last updated: 11 November 2026.",
  "privacy.h2a": "Information we collect",
  "privacy.p1": "This is a purely static website. There are no accounts and no login, and we do not collect or store personal information such as your name, email address or home address. You don't need to provide any personal information to watch films.",
  "privacy.h2b": "Third-party services",
  "privacy.p2": "The films and poster images on this site are hosted by the Internet Archive (archive.org). When you play a film, your browser connects directly to the Internet Archive's servers, and the Internet Archive's privacy policy applies. The site's pages are hosted on GitHub Pages; when you visit, GitHub may record ordinary server logs (such as IP address and browser type) to keep the service running.",
  "privacy.h2c": "Advertising and cookies (future plans)",
  "privacy.p3": "This site currently shows no ads and uses no advertising code or tracking cookies. In the future, the site may use a third-party advertising service (such as Google AdSense) to help keep it running. Third-party advertising providers may use cookies or similar technologies to serve ads, count impressions, and show personalised ads based on your browsing. If that happens, you will be able to clear or block cookies in your browser settings and opt out of personalised ads through the advertising provider's own pages. This policy will be updated before any advertising service is added.",
  "privacy.h2d": "Children",
  "privacy.p4": "The content of this site is public-domain classic films for a general audience; we do not collect any information from children.",
  "privacy.h2e": "Changes to this policy",
  "privacy.p5": "If this privacy policy changes, it will be updated on this page with a new date. Continuing to use this site means you accept the updated policy.",
  "privacy.p6": "If you have any questions, please contact us via the <a href=\"contact.html\">contact page</a>."
},
zh: {
  "nav.home": "首页", "nav.about": "关于", "nav.contact": "联系", "nav.privacy": "隐私政策",
  "ad": "广告位",
  "index.title": "免费经典电影 | Free Classic Movies — 公有领域老电影免费看",
  "index.desc": "35 部公有领域经典电影免费在线观看：卓别林、恐怖片、黑色电影、中文老片，全部来自 Internet Archive（archive.org）。",
  "intro.h1": "公有领域经典电影，免费观看",
  "intro.p": "35 部经典老电影，全部来自 Internet Archive（archive.org），属于公有领域，可免费观看。视频直接从 Internet Archive 播放，不经过本站服务器。",
  "search.ph": "搜索片名…（中文或英文）",
  "search.aria": "搜索影片",
  "count": "共 {n} 部影片",
  "note": "提示：点击海报即可在线播放。部分老片为默片或早期有声片，画质以原始修复版本为准。",
  "empty": "没有找到符合条件的影片，换个关键词试试。",
  "watch.pd": "本片属于公有领域，来源：Internet Archive（archive.org）。",
  "watch.ia": "在 Internet Archive 上查看本片 →",
  "watch.close": "关闭",
  "watch.pdlabel": "公有领域",
  "footer.pd": "本站所有影片均为公有领域（Public Domain）作品，来源为 Internet Archive（archive.org），免费观看。海报图片亦来自 Internet Archive。",
  "cat.all": "全部", "cat.Adventure": "冒险", "cat.Animation": "动画", "cat.Comedy": "喜剧",
  "cat.Drama": "剧情", "cat.Horror": "恐怖", "cat.Mystery": "悬疑", "cat.Noir": "黑色电影",
  "cat.Sci-Fi": "科幻", "cat.Chinese": "中文电影",
  "about.title": "关于 | 免费经典电影",
  "about.desc": "关于免费经典电影网站：一个公有领域老电影免费观看站。",
  "about.h1": "关于本站",
  "about.p1": "免费经典电影是一个非商业的个人网站，收集整理公有领域（Public Domain）的经典老电影，供大家免费在线观看。",
  "about.p2": "本站目前收录 35 部影片，包括默片时代的卓别林喜剧、早期恐怖片、黑色电影，以及 1929 至 1962 年间的中文经典电影，例如阮玲玉主演的《神女》《恋爱与义务》、成龙的第一部电影《大小黄天霸》，还有《风云儿女》——《义勇军进行曲》正是这部电影的主题歌。",
  "about.p3": "所有影片均来自 Internet Archive（archive.org），属于公有领域；视频直接从 Internet Archive 播放，不经过本站服务器。海报图片亦来自 Internet Archive。",
  "about.p4": "本站由个人业余维护，片单会不定期更新。如果你发现某部影片无法播放，或者有值得收录的公有领域电影推荐，欢迎通过<a href=\"contact.html\">联系页面</a>告诉我们。",
  "contact.title": "联系 | 免费经典电影",
  "contact.desc": "联系免费经典电影网站：影片无法播放、片源推荐或其他建议。",
  "contact.h1": "联系我们",
  "contact.p1": "如果你发现某部影片无法播放、有值得收录的公有领域电影推荐，或者对本站有任何建议，欢迎告诉我们。",
  "contact.h2a": "通过 GitHub 联系",
  "contact.p2": "最方便的方式是在本站的 GitHub 仓库提交一个 Issue（问题或建议）：",
  "contact.p3": "提交时请简单说明是哪部影片、遇到了什么问题，我们看到后会尽快处理。",
  "contact.h2b": "其他说明",
  "contact.p4": "本站为个人业余维护，回复可能不会特别快，敬请谅解。本站不提供任何付费服务，也不收集用户个人信息。",
  "privacy.title": "隐私政策 | 免费经典电影",
  "privacy.desc": "免费经典电影网站隐私政策：本站不收集个人信息；未来可能使用第三方广告与 Cookie。",
  "privacy.h1": "隐私政策",
  "privacy.updated": "最后更新：2026 年 11 月 11 日。",
  "privacy.h2a": "我们收集的信息",
  "privacy.p1": "本站为纯静态网站，不设账号、不要求登录，不收集、不存储用户的姓名、邮箱、地址等个人信息。观看影片无需提供任何个人信息。",
  "privacy.h2b": "第三方服务",
  "privacy.p2": "本站的影片与海报图片托管于 Internet Archive（archive.org），播放时你的浏览器会直接连接 Internet Archive 的服务器，并适用 Internet Archive 的隐私政策。本站的页面托管于 GitHub Pages，访问时 GitHub 可能会记录常规的服务器日志（如 IP 地址、浏览器类型），用于保障服务正常运行。",
  "privacy.h2c": "广告与 Cookie（未来计划）",
  "privacy.p3": "本站目前不投放任何广告，也不使用任何广告代码或跟踪 Cookie。未来，本站可能会接入第三方广告服务（例如 Google AdSense）以维持运营。第三方广告服务商可能会使用 Cookie 或类似技术来投放广告、统计展示量，并可能根据你的浏览记录展示个性化广告。届时你可以在浏览器设置中清除或禁用 Cookie，也可以通过广告服务商提供的页面选择退出个性化广告。本政策将在接入广告服务前更新。",
  "privacy.h2d": "未成年人",
  "privacy.p4": "本站内容为公有领域老电影，面向一般观众，不针对未成年人收集任何信息。",
  "privacy.h2e": "政策变更",
  "privacy.p5": "本隐私政策如有变更，将在本页面更新并注明更新日期。继续使用本站即表示你接受更新后的政策。",
  "privacy.p6": "如有疑问，请通过<a href=\"contact.html\">联系页面</a>与我们联系。"
},
sv: {
  "nav.home": "Hem", "nav.about": "Om", "nav.contact": "Kontakt", "nav.privacy": "Integritetspolicy",
  "ad": "Annonsplats",
  "index.title": "Gratis klassiska filmer | Free Classic Movies — se klassiska filmer i public domain gratis",
  "index.desc": "35 klassiska filmer i public domain, gratis att titta på online: Chaplin, skräck, film noir, kinesiska klassiker, alla från Internet Archive (archive.org).",
  "intro.h1": "Klassiska filmer i public domain — titta gratis",
  "intro.p": "35 klassiska filmer, alla från Internet Archive (archive.org) och i public domain — gratis att titta på. Videorna strömmas direkt från Internet Archive, inte via den här webbplatsens servrar.",
  "search.ph": "Sök efter titel…",
  "search.aria": "Sök filmer",
  "count": "{n} filmer",
  "note": "Tips: klicka på en poster för att titta. Vissa tidiga filmer är stumfilmer eller tidiga ljudfilmer; bildkvaliteten följer den ursprungliga restaurerade versionen.",
  "empty": "Inga filmer matchar. Prova ett annat sökord.",
  "watch.pd": "Den här filmen är i public domain. Källa: Internet Archive (archive.org). ",
  "watch.ia": "Visa filmen på Internet Archive →",
  "watch.close": "Stäng",
  "watch.pdlabel": "Public domain",
  "footer.pd": "Alla filmer på den här webbplatsen är verk i public domain från Internet Archive (archive.org), gratis att titta på. Affischbilderna kommer också från Internet Archive.",
  "cat.all": "Alla", "cat.Adventure": "Äventyr", "cat.Animation": "Animation", "cat.Comedy": "Komedi",
  "cat.Drama": "Drama", "cat.Horror": "Skräck", "cat.Mystery": "Mysterium", "cat.Noir": "Film Noir",
  "cat.Sci-Fi": "Science fiction", "cat.Chinese": "Kinesiska filmer",
  "about.title": "Om | Free Classic Movies",
  "about.desc": "Om Free Classic Movies: en icke-kommersiell personlig webbplats för gratis klassiska filmer i public domain.",
  "about.h1": "Om webbplatsen",
  "about.p1": "Free Classic Movies är en icke-kommersiell personlig webbplats som samlar klassiska filmer i public domain för alla att titta gratis på.",
  "about.p2": "Webbplatsen har för närvarande 35 filmer, inklusive Charlie Chaplin-komedier från stumfilmseran, tidiga skräckfilmer, film noir och kinesiska klassiker från 1929 till 1962 — till exempel The Goddess och Love and Duty med Ruan Lingyu, Jackie Chans första film Big and Little Wong Tin Bar och Children of Troubled Times, vars ledmotiv blev Marschen för de frivilliga.",
  "about.p3": "Alla filmer kommer från Internet Archive (archive.org) och är i public domain; videorna strömmas direkt från Internet Archive, inte via den här webbplatsens servrar. Affischbilderna kommer också från Internet Archive.",
  "about.p4": "Den här webbplatsen underhålls av en person på fritiden, och filmlistan uppdateras då och då. Om du hittar en film som inte spelas upp, eller har en film i public domain att rekommendera, hör gärna av dig via <a href=\"contact.html\">kontaktsidan</a>.",
  "contact.title": "Kontakt | Free Classic Movies",
  "contact.desc": "Kontakta Free Classic Movies: rapportera en film som inte spelas upp, rekommendera en film eller skicka förslag.",
  "contact.h1": "Kontakta oss",
  "contact.p1": "Om du hittar en film som inte spelas upp, har en film i public domain att rekommendera eller har förslag på webbplatsen, hör gärna av dig.",
  "contact.h2a": "Kontakt via GitHub",
  "contact.p2": "Det enklaste sättet är att skapa ett Issue (en fråga eller ett förslag) i webbplatsens GitHub-repositorium:",
  "contact.p3": "Beskriv kort vilken film det gäller och vilket problem du stött på, så tittar vi på det så snart vi ser det.",
  "contact.h2b": "Övrigt",
  "contact.p4": "Den här webbplatsen underhålls av en person på fritiden, så svar kan dröja — tack för din förståelse. Den här webbplatsen erbjuder inga betaltjänster och samlar inte in personuppgifter.",
  "privacy.title": "Integritetspolicy | Free Classic Movies",
  "privacy.desc": "Integritetspolicy för Free Classic Movies: webbplatsen samlar inte in personuppgifter; tredjepartsannonser och cookies kan användas i framtiden.",
  "privacy.h1": "Integritetspolicy",
  "privacy.updated": "Senast uppdaterad: 11 november 2026.",
  "privacy.h2a": "Information vi samlar in",
  "privacy.p1": "Det här är en helt statisk webbplats. Det finns inga konton och ingen inloggning, och vi samlar inte in eller lagrar personuppgifter som namn, e-postadress eller hemadress. Du behöver inte lämna några personuppgifter för att titta på filmer.",
  "privacy.h2b": "Tredjepartstjänster",
  "privacy.p2": "Filmerna och affischbilderna på den här webbplatsen hostas av Internet Archive (archive.org). När du spelar upp en film ansluter din webbläsare direkt till Internet Archives servrar, och Internet Archives integritetspolicy gäller. Webbplatsens sidor hostas på GitHub Pages; när du besöker webbplatsen kan GitHub registrera vanliga serverloggar (till exempel IP-adress och webbläsartyp) för att hålla tjänsten igång.",
  "privacy.h2c": "Annonser och cookies (framtida planer)",
  "privacy.p3": "Den här webbplatsen visar för närvarande inga annonser och använder ingen annonskod eller spårningscookies. I framtiden kan webbplatsen använda en tredjepartsannonstjänst (till exempel Google AdSense) för att hålla igång. Tredjepartsannonsörer kan använda cookies eller liknande teknik för att visa annonser, räkna visningar och visa personaliserade annonser baserat på din surfning. I så fall kan du rensa eller blockera cookies i webbläsarens inställningar och välja bort personaliserade annonser via annonsörens egna sidor. Den här policyn uppdateras innan någon annonstjänst läggs till.",
  "privacy.h2d": "Barn",
  "privacy.p4": "Webbplatsens innehåll är klassiska filmer i public domain för en allmän publik; vi samlar inte in någon information från barn.",
  "privacy.h2e": "Ändringar av policyn",
  "privacy.p5": "Om den här integritetspolicyn ändras uppdateras den på den här sidan med ett nytt datum. Fortsatt användning av webbplatsen innebär att du accepterar den uppdaterade policyn.",
  "privacy.p6": "Om du har frågor, kontakta oss via <a href=\"contact.html\">kontaktsidan</a>."
},
es: {
  "nav.home": "Inicio", "nav.about": "Acerca de", "nav.contact": "Contacto", "nav.privacy": "Política de privacidad",
  "ad": "Espacio publicitario",
  "index.title": "Películas clásicas gratis | Free Classic Movies — ve películas clásicas de dominio público gratis",
  "index.desc": "35 películas clásicas de dominio público gratis en línea: Chaplin, terror, cine negro, clásicos chinos, todas del Internet Archive (archive.org).",
  "intro.h1": "Películas clásicas de dominio público, gratis",
  "intro.p": "35 películas clásicas, todas del Internet Archive (archive.org) y de dominio público, gratis. Los vídeos se reproducen directamente desde Internet Archive, no a través de los servidores de este sitio.",
  "search.ph": "Buscar títulos…",
  "search.aria": "Buscar películas",
  "count": "{n} películas",
  "note": "Consejo: haz clic en un póster para ver la película. Algunas películas antiguas son mudas o de los primeros años del sonoro; la calidad de imagen corresponde a la versión original restaurada.",
  "empty": "No se encontraron películas. Prueba con otra palabra clave.",
  "watch.pd": "Esta película es de dominio público. Fuente: Internet Archive (archive.org). ",
  "watch.ia": "Ver esta película en Internet Archive →",
  "watch.close": "Cerrar",
  "watch.pdlabel": "Dominio público",
  "footer.pd": "Todas las películas de este sitio son obras de dominio público del Internet Archive (archive.org), gratuitas. Las imágenes de los pósteres también proceden de Internet Archive.",
  "cat.all": "Todas", "cat.Adventure": "Aventura", "cat.Animation": "Animación", "cat.Comedy": "Comedia",
  "cat.Drama": "Drama", "cat.Horror": "Terror", "cat.Mystery": "Misterio", "cat.Noir": "Cine negro",
  "cat.Sci-Fi": "Ciencia ficción", "cat.Chinese": "Cine chino",
  "about.title": "Acerca de | Free Classic Movies",
  "about.desc": "Acerca de Free Classic Movies: un sitio personal sin fines comerciales con películas clásicas gratuitas de dominio público.",
  "about.h1": "Acerca de este sitio",
  "about.p1": "Free Classic Movies es un sitio web personal sin fines comerciales que recopila películas clásicas de dominio público para que todos las vean gratis.",
  "about.p2": "El sitio cuenta actualmente con 35 películas, incluidas comedias de Charles Chaplin de la era del cine mudo, películas de terror tempranas, cine negro y clásicos chinos de 1929 a 1962, como The Goddess y Love and Duty, protagonizadas por Ruan Lingyu, la primera película de Jackie Chan, Big and Little Wong Tin Bar, y Children of Troubled Times, cuya canción principal se convirtió en la Marcha de los Voluntarios.",
  "about.p3": "Todas las películas proceden de Internet Archive (archive.org) y son de dominio público; los vídeos se reproducen directamente desde Internet Archive, no a través de los servidores de este sitio. Las imágenes de los pósteres también proceden de Internet Archive.",
  "about.p4": "Este sitio lo mantiene una persona en su tiempo libre y la lista de películas se actualiza de vez en cuando. Si encuentras una película que no se reproduce, o quieres recomendar una película de dominio público, avísanos a través de la <a href=\"contact.html\">página de contacto</a>.",
  "contact.title": "Contacto | Free Classic Movies",
  "contact.desc": "Contacta con Free Classic Movies: informa de una película que no se reproduce, recomienda una película o envía sugerencias.",
  "contact.h1": "Contáctanos",
  "contact.p1": "Si encuentras una película que no se reproduce, quieres recomendar una película de dominio público o tienes sugerencias para este sitio, nos encantaría saberlo.",
  "contact.h2a": "Contacto a través de GitHub",
  "contact.p2": "La forma más fácil es abrir un Issue (una pregunta o sugerencia) en el repositorio de GitHub de este sitio:",
  "contact.p3": "Al enviarlo, indica brevemente de qué película se trata y qué problema encontraste; lo revisaremos en cuanto lo veamos.",
  "contact.h2b": "Otras notas",
  "contact.p4": "Este sitio lo mantiene una persona en su tiempo libre, por lo que las respuestas pueden tardar; gracias por tu comprensión. Este sitio no ofrece servicios de pago ni recopila información personal.",
  "privacy.title": "Política de privacidad | Free Classic Movies",
  "privacy.desc": "Política de privacidad de Free Classic Movies: este sitio no recopila información personal; en el futuro podrían usarse publicidad de terceros y cookies.",
  "privacy.h1": "Política de privacidad",
  "privacy.updated": "Última actualización: 11 de noviembre de 2026.",
  "privacy.h2a": "Información que recopilamos",
  "privacy.p1": "Este es un sitio web puramente estático. No hay cuentas ni inicio de sesión, y no recopilamos ni almacenamos información personal como tu nombre, correo electrónico o dirección. No necesitas proporcionar ninguna información personal para ver películas.",
  "privacy.h2b": "Servicios de terceros",
  "privacy.p2": "Las películas y las imágenes de los pósteres de este sitio están alojadas en Internet Archive (archive.org). Al reproducir una película, tu navegador se conecta directamente a los servidores de Internet Archive y se aplica su política de privacidad. Las páginas del sitio están alojadas en GitHub Pages; al visitarlo, GitHub puede registrar registros de servidor habituales (como la dirección IP y el tipo de navegador) para mantener el servicio en funcionamiento.",
  "privacy.h2c": "Publicidad y cookies (planes futuros)",
  "privacy.p3": "Este sitio no muestra actualmente ningún anuncio ni utiliza código publicitario ni cookies de seguimiento. En el futuro, el sitio podría utilizar un servicio de publicidad de terceros (como Google AdSense) para ayudar a mantenerlo. Los proveedores de publicidad de terceros pueden utilizar cookies o tecnologías similares para mostrar anuncios, contar impresiones y mostrar anuncios personalizados según tu navegación. En ese caso, podrás borrar o bloquear las cookies en la configuración de tu navegador y rechazar los anuncios personalizados a través de las páginas del propio proveedor. Esta política se actualizará antes de añadir cualquier servicio publicitario.",
  "privacy.h2d": "Menores",
  "privacy.p4": "El contenido de este sitio son películas clásicas de dominio público para el público general; no recopilamos ninguna información de menores.",
  "privacy.h2e": "Cambios en esta política",
  "privacy.p5": "Si esta política de privacidad cambia, se actualizará en esta página con una nueva fecha. Seguir utilizando este sitio significa que aceptas la política actualizada.",
  "privacy.p6": "Si tienes alguna pregunta, contáctanos a través de la <a href=\"contact.html\">página de contacto</a>."
},
fr: {
  "nav.home": "Accueil", "nav.about": "À propos", "nav.contact": "Contact", "nav.privacy": "Politique de confidentialité",
  "ad": "Espace publicitaire",
  "index.title": "Films classiques gratuits | Free Classic Movies — regardez des films classiques du domaine public gratuitement",
  "index.desc": "35 films classiques du domaine public gratuits en ligne : Chaplin, horreur, film noir, classiques chinois, tous issus d'Internet Archive (archive.org).",
  "intro.h1": "Films classiques du domaine public, gratuits",
  "intro.p": "35 films classiques, tous issus d'Internet Archive (archive.org) et dans le domaine public — gratuits. Les vidéos sont diffusées directement depuis Internet Archive, et non via les serveurs de ce site.",
  "search.ph": "Rechercher un titre…",
  "search.aria": "Rechercher des films",
  "count": "{n} films",
  "note": "Astuce : cliquez sur une affiche pour regarder en ligne. Certains films anciens sont muets ou des débuts du parlant ; la qualité d'image correspond à la version originale restaurée.",
  "empty": "Aucun film trouvé. Essayez un autre mot-clé.",
  "watch.pd": "Ce film est dans le domaine public. Source : Internet Archive (archive.org). ",
  "watch.ia": "Voir ce film sur Internet Archive →",
  "watch.close": "Fermer",
  "watch.pdlabel": "Domaine public",
  "footer.pd": "Tous les films de ce site sont des œuvres du domaine public provenant d'Internet Archive (archive.org), gratuits. Les affiches proviennent également d'Internet Archive.",
  "cat.all": "Tous", "cat.Adventure": "Aventure", "cat.Animation": "Animation", "cat.Comedy": "Comédie",
  "cat.Drama": "Drame", "cat.Horror": "Horreur", "cat.Mystery": "Mystère", "cat.Noir": "Film noir",
  "cat.Sci-Fi": "Science-fiction", "cat.Chinese": "Films chinois",
  "about.title": "À propos | Free Classic Movies",
  "about.desc": "À propos de Free Classic Movies : un site personnel non commercial de films classiques gratuits du domaine public.",
  "about.h1": "À propos de ce site",
  "about.p1": "Free Classic Movies est un site personnel non commercial qui rassemble des films classiques du domaine public pour que tout le monde puisse les regarder gratuitement.",
  "about.p2": "Le site propose actuellement 35 films, dont des comédies de Charlie Chaplin de l'ère du muet, des films d'horreur anciens, des films noirs et des classiques chinois de 1929 à 1962 — par exemple The Goddess et Love and Duty avec Ruan Lingyu, le premier film de Jackie Chan, Big and Little Wong Tin Bar, et Children of Troubled Times, dont la chanson thème est devenue la Marche des volontaires.",
  "about.p3": "Tous les films proviennent d'Internet Archive (archive.org) et sont dans le domaine public ; les vidéos sont diffusées directement depuis Internet Archive, et non via les serveurs de ce site. Les affiches proviennent également d'Internet Archive.",
  "about.p4": "Ce site est entretenu par une seule personne pendant son temps libre, et la liste des films est mise à jour de temps en temps. Si un film ne se lit pas, ou si vous avez un film du domaine public à recommander, contactez-nous via la <a href=\"contact.html\">page de contact</a>.",
  "contact.title": "Contact | Free Classic Movies",
  "contact.desc": "Contactez Free Classic Movies : signalez un film qui ne se lit pas, recommandez un film ou envoyez vos suggestions.",
  "contact.h1": "Contactez-nous",
  "contact.p1": "Si un film ne se lit pas, si vous avez un film du domaine public à recommander ou des suggestions pour ce site, n'hésitez pas à nous écrire.",
  "contact.h2a": "Contact via GitHub",
  "contact.p2": "Le plus simple est d'ouvrir une Issue (question ou suggestion) dans le dépôt GitHub de ce site :",
  "contact.p3": "Lors de l'envoi, indiquez brièvement de quel film il s'agit et quel problème vous avez rencontré — nous examinerons cela dès que possible.",
  "contact.h2b": "Autres remarques",
  "contact.p4": "Ce site est entretenu par une seule personne pendant son temps libre, les réponses peuvent donc prendre un peu de temps — merci de votre compréhension. Ce site ne propose aucun service payant et ne collecte aucune information personnelle.",
  "privacy.title": "Politique de confidentialité | Free Classic Movies",
  "privacy.desc": "Politique de confidentialité de Free Classic Movies : ce site ne collecte aucune information personnelle ; des publicités tierces et des cookies pourront être utilisés à l'avenir.",
  "privacy.h1": "Politique de confidentialité",
  "privacy.updated": "Dernière mise à jour : 11 novembre 2026.",
  "privacy.h2a": "Informations que nous collectons",
  "privacy.p1": "Ce site est entièrement statique. Il n'y a pas de compte ni de connexion, et nous ne collectons ni ne stockons d'informations personnelles telles que votre nom, votre adresse e-mail ou votre adresse postale. Vous n'avez besoin de fournir aucune information personnelle pour regarder des films.",
  "privacy.h2b": "Services tiers",
  "privacy.p2": "Les films et les affiches de ce site sont hébergés par Internet Archive (archive.org). Lorsque vous lisez un film, votre navigateur se connecte directement aux serveurs d'Internet Archive, et la politique de confidentialité d'Internet Archive s'applique. Les pages du site sont hébergées sur GitHub Pages ; lors de votre visite, GitHub peut enregistrer des journaux de serveur ordinaires (tels que l'adresse IP et le type de navigateur) pour assurer le bon fonctionnement du service.",
  "privacy.h2c": "Publicité et cookies (projets futurs)",
  "privacy.p3": "Ce site n'affiche actuellement aucune publicité et n'utilise aucun code publicitaire ni cookie de suivi. À l'avenir, le site pourra faire appel à un service publicitaire tiers (par exemple Google AdSense) pour aider à son fonctionnement. Les prestataires publicitaires tiers peuvent utiliser des cookies ou des technologies similaires pour diffuser des publicités, compter les impressions et afficher des publicités personnalisées en fonction de votre navigation. Le cas échéant, vous pourrez effacer ou bloquer les cookies dans les paramètres de votre navigateur et refuser les publicités personnalisées via les pages du prestataire lui-même. Cette politique sera mise à jour avant l'ajout de tout service publicitaire.",
  "privacy.h2d": "Enfants",
  "privacy.p4": "Le contenu de ce site est constitué de films classiques du domaine public destinés à un public général ; nous ne collectons aucune information auprès d'enfants.",
  "privacy.h2e": "Modifications de cette politique",
  "privacy.p5": "Si cette politique de confidentialité change, elle sera mise à jour sur cette page avec une nouvelle date. Continuer à utiliser ce site signifie que vous acceptez la politique mise à jour.",
  "privacy.p6": "Si vous avez des questions, contactez-nous via la <a href=\"contact.html\">page de contact</a>."
},
de: {
  "nav.home": "Startseite", "nav.about": "Über uns", "nav.contact": "Kontakt", "nav.privacy": "Datenschutzerklärung",
  "ad": "Werbefläche",
  "index.title": "Kostenlose klassische Filme | Free Classic Movies — gemeinfreie Klassiker kostenlos ansehen",
  "index.desc": "35 klassische gemeinfreie Filme kostenlos online ansehen: Chaplin, Horror, Film Noir, chinesische Klassiker, alle aus dem Internet Archive (archive.org).",
  "intro.h1": "Klassische Filme der Public Domain — kostenlos ansehen",
  "intro.p": "35 klassische Filme, alle aus dem Internet Archive (archive.org) und gemeinfrei — kostenlos. Die Videos werden direkt vom Internet Archive gestreamt, nicht über die Server dieser Website.",
  "search.ph": "Titel suchen…",
  "search.aria": "Filme suchen",
  "count": "{n} Filme",
  "note": "Tipp: Klicken Sie auf ein Poster, um den Film online anzusehen. Einige frühe Filme sind Stummfilme oder frühe Tonfilme; die Bildqualität entspricht der original restaurierten Fassung.",
  "empty": "Keine Filme gefunden. Versuchen Sie es mit einem anderen Stichwort.",
  "watch.pd": "Dieser Film ist gemeinfrei. Quelle: Internet Archive (archive.org). ",
  "watch.ia": "Diesen Film auf Internet Archive ansehen →",
  "watch.close": "Schließen",
  "watch.pdlabel": "Gemeinfrei",
  "footer.pd": "Alle Filme auf dieser Website sind gemeinfreie Werke aus dem Internet Archive (archive.org) und kostenlos. Auch die Poster stammen aus dem Internet Archive.",
  "cat.all": "Alle", "cat.Adventure": "Abenteuer", "cat.Animation": "Animation", "cat.Comedy": "Komödie",
  "cat.Drama": "Drama", "cat.Horror": "Horror", "cat.Mystery": "Mystery", "cat.Noir": "Film Noir",
  "cat.Sci-Fi": "Science-Fiction", "cat.Chinese": "Chinesische Filme",
  "about.title": "Über uns | Free Classic Movies",
  "about.desc": "Über Free Classic Movies: eine nicht-kommerzielle private Website mit kostenlosen gemeinfreien klassischen Filmen.",
  "about.h1": "Über diese Website",
  "about.p1": "Free Classic Movies ist eine nicht-kommerzielle private Website, die klassische gemeinfreie Filme sammelt, damit alle sie kostenlos ansehen können.",
  "about.p2": "Die Website bietet derzeit 35 Filme, darunter Charlie-Chaplin-Komödien aus der Stummfilmzeit, frühe Horrorfilme, Film noir und chinesische Klassiker von 1929 bis 1962 — etwa The Goddess und Love and Duty mit Ruan Lingyu, Jackie Chans ersten Film Big and Little Wong Tin Bar sowie Children of Troubled Times, dessen Titelsong zum Marsch der Freiwilligen wurde.",
  "about.p3": "Alle Filme stammen aus dem Internet Archive (archive.org) und sind gemeinfrei; die Videos werden direkt vom Internet Archive gestreamt, nicht über die Server dieser Website. Auch die Poster stammen aus dem Internet Archive.",
  "about.p4": "Diese Website wird von einer einzelnen Person in ihrer Freizeit gepflegt und die Filmliste wird von Zeit zu Zeit aktualisiert. Wenn ein Film nicht abgespielt wird oder Sie einen gemeinfreien Film empfehlen möchten, schreiben Sie uns über die <a href=\"contact.html\">Kontaktseite</a>.",
  "contact.title": "Kontakt | Free Classic Movies",
  "contact.desc": "Kontakt zu Free Classic Movies: Melden Sie einen Film, der nicht abgespielt wird, empfehlen Sie einen Film oder senden Sie Vorschläge.",
  "contact.h1": "Kontakt",
  "contact.p1": "Wenn ein Film nicht abgespielt wird, Sie einen gemeinfreien Film empfehlen möchten oder Vorschläge für diese Website haben, freuen wir uns über Ihre Nachricht.",
  "contact.h2a": "Kontakt über GitHub",
  "contact.p2": "Am einfachsten ist es, ein Issue (eine Frage oder einen Vorschlag) im GitHub-Repository dieser Website zu erstellen:",
  "contact.p3": "Bitte geben Sie kurz an, um welchen Film es geht und welches Problem aufgetreten ist — wir kümmern uns darum, sobald wir es sehen.",
  "contact.h2b": "Weitere Hinweise",
  "contact.p4": "Diese Website wird von einer einzelnen Person in ihrer Freizeit gepflegt, Antworten können daher etwas dauern — danke für Ihr Verständnis. Diese Website bietet keine kostenpflichtigen Dienste an und erhebt keine personenbezogenen Daten.",
  "privacy.title": "Datenschutzerklärung | Free Classic Movies",
  "privacy.desc": "Datenschutzerklärung von Free Classic Movies: Diese Website erhebt keine personenbezogenen Daten; Werbung und Cookies von Drittanbietern können in Zukunft verwendet werden.",
  "privacy.h1": "Datenschutzerklärung",
  "privacy.updated": "Zuletzt aktualisiert: 11. November 2026.",
  "privacy.h2a": "Informationen, die wir erheben",
  "privacy.p1": "Dies ist eine rein statische Website. Es gibt keine Konten und keine Anmeldung, und wir erheben oder speichern keine personenbezogenen Daten wie Name, E-Mail-Adresse oder Wohnadresse. Zum Ansehen der Filme müssen Sie keine personenbezogenen Daten angeben.",
  "privacy.h2b": "Dienste von Drittanbietern",
  "privacy.p2": "Die Filme und Poster dieser Website werden vom Internet Archive (archive.org) gehostet. Wenn Sie einen Film abspielen, verbindet sich Ihr Browser direkt mit den Servern des Internet Archive, und dessen Datenschutzerklärung gilt. Die Seiten der Website werden auf GitHub Pages gehostet; bei Ihrem Besuch kann GitHub gewöhnliche Serverprotokolle (wie IP-Adresse und Browsertyp) aufzeichnen, um den Dienst am Laufen zu halten.",
  "privacy.h2c": "Werbung und Cookies (zukünftige Pläne)",
  "privacy.p3": "Diese Website zeigt derzeit keine Werbung und verwendet keinen Werbecode oder Tracking-Cookies. In Zukunft kann die Website einen Werbedienst eines Drittanbieters (z. B. Google AdSense) nutzen, um den Betrieb zu finanzieren. Werbeanbieter von Drittanbietern können Cookies oder ähnliche Technologien verwenden, um Anzeigen zu schalten, Impressionen zu zählen und personalisierte Anzeigen auf der Grundlage Ihres Surfverhaltens anzuzeigen. In diesem Fall können Sie Cookies in Ihren Browsereinstellungen löschen oder blockieren und personalisierte Anzeigen über die Seiten des Werbeanbieters selbst deaktivieren. Diese Richtlinie wird aktualisiert, bevor ein Werbedienst hinzugefügt wird.",
  "privacy.h2d": "Kinder",
  "privacy.p4": "Die Inhalte dieser Website sind gemeinfreie klassische Filme für ein allgemeines Publikum; wir erheben keine Informationen von Kindern.",
  "privacy.h2e": "Änderungen dieser Richtlinie",
  "privacy.p5": "Wenn sich diese Datenschutzerklärung ändert, wird sie auf dieser Seite mit einem neuen Datum aktualisiert. Die weitere Nutzung dieser Website bedeutet, dass Sie die aktualisierte Richtlinie akzeptieren.",
  "privacy.p6": "Bei Fragen kontaktieren Sie uns bitte über die <a href=\"contact.html\">Kontaktseite</a>."
}
};

var currentLang = "en";

function t(key) {
  var s = STRINGS[currentLang] && STRINGS[currentLang][key];
  if (s == null) s = STRINGS.en[key];
  return s == null ? key : s;
}

function getSavedLang() {
  try {
    var l = localStorage.getItem("fc-lang");
    if (l && STRINGS[l]) return l;
  } catch (e) {}
  return "en";
}

function applyLang(lang) {
  if (!STRINGS[lang]) lang = "en";
  currentLang = lang;
  try { localStorage.setItem("fc-lang", lang); } catch (e) {}
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  var page = document.documentElement.getAttribute("data-page") || "index";
  var title = t(page + ".title");
  if (title) document.title = title;
  var desc = t(page + ".desc");
  var meta = document.querySelector('meta[name="description"]');
  if (meta && desc) meta.setAttribute("content", desc);
  var els = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < els.length; i++) {
    els[i].textContent = t(els[i].getAttribute("data-i18n"));
  }
  var htmlEls = document.querySelectorAll("[data-i18n-html]");
  for (var j = 0; j < htmlEls.length; j++) {
    htmlEls[j].innerHTML = t(htmlEls[j].getAttribute("data-i18n-html"));
  }
  var phEls = document.querySelectorAll("[data-i18n-placeholder]");
  for (var k = 0; k < phEls.length; k++) {
    phEls[k].setAttribute("placeholder", t(phEls[k].getAttribute("data-i18n-placeholder")));
  }
  var ariaEls = document.querySelectorAll("[data-i18n-aria]");
  for (var m = 0; m < ariaEls.length; m++) {
    ariaEls[m].setAttribute("aria-label", t(ariaEls[m].getAttribute("data-i18n-aria")));
  }
  var sel = document.getElementById("langSelect");
  if (sel) sel.value = lang;
  if (typeof window.__onLangChange === "function") window.__onLangChange();
}

function initLang() {
  var sel = document.getElementById("langSelect");
  if (sel) sel.addEventListener("change", function () { applyLang(sel.value); });
  applyLang(getSavedLang());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLang);
} else {
  initLang();
}
