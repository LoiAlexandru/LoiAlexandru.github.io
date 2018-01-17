var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

$(document).ready(function () {
  $(".PaginaPrincipala").click(function () {
    $(".pagina1").show();
    $(".pagina2").hide();
    $(".pagina3").hide();
    $(".pagina4").hide();
    $(".pagina5").hide();
    $(".pagina6").hide();
    $(".pagina7").hide();
    $(".pagina8").hide();
    $(".pagina9").hide();
    $(".pagina10").hide();
  });
});
$(document).ready(function () {
  $(".OrasulBaiaMare").click(function () {
    $(".pagina2").show();
    $(".pagina1").hide();
    $(".pagina3").hide();
    $(".pagina4").hide();
    $(".pagina5").hide();
    $(".pagina6").hide();
    $(".pagina7").hide();
    $(".pagina8").hide();
    $(".pagina9").hide();
    $(".pagina10").hide();
  });
});
$(document).ready(function () {
  $(".AtractiiTuristice").click(function () {
    $(".pagina3").show();
    $(".pagina1").hide();
    $(".pagina2").hide();
    $(".pagina4").hide();
    $(".pagina5").hide();
    $(".pagina6").hide();
    $(".pagina7").hide();
    $(".pagina8").hide();
    $(".pagina9").hide();
    $(".pagina10").hide();
  });
});
$(document).ready(function () {
  $(".viatainbaiamare").click(function () {
    $(".pagina4").show();
    $(".pagina1").hide();
    $(".pagina2").hide();
    $(".pagina3").hide();
    $(".pagina5").hide();
    $(".pagina6").hide();
    $(".pagina7").hide();
    $(".pagina8").hide();
    $(".pagina9").hide();
    $(".pagina10").hide();
  });
});
$(document).ready(function () {
  $(".baiamaredeazi").click(function () {
    $(".pagina5").show();
    $(".pagina1").hide();
    $(".pagina2").hide();
    $(".pagina3").hide();
    $(".pagina4").hide();
    $(".pagina6").hide();
    $(".pagina7").hide();
    $(".pagina8").hide();
    $(".pagina9").hide();
    $(".pagina10").hide();
  });
});

$(document).ready(function () {
  $(".proiecteincursderealizare").click(function () {
    $(".pagina7").show();
    $(".pagina1").hide();
    $(".pagina2").hide();
    $(".pagina3").hide();
    $(".pagina4").hide();
    $(".pagina5").hide();
    $(".pagina6").hide();
    $(".pagina8").hide();
    $(".pagina9").hide();
    $(".pagina10").hide();
  });
});
$(document).ready(function () {
  $(".proiecterealizateinbaiamare").click(function () {
    $(".pagina6").show();
    $(".pagina1").hide();
    $(".pagina2").hide();
    $(".pagina3").hide();
    $(".pagina4").hide();
    $(".pagina5").hide();
    $(".pagina7").hide();
    $(".pagina8").hide();
    $(".pagina9").hide();
    $(".pagina10").hide();
  });
});
$(document).ready(function () {
  $(".despreoamenisitraditii").click(function () {
    $(".pagina8").show();
    $(".pagina1").hide();
    $(".pagina2").hide();
    $(".pagina3").hide();
    $(".pagina4").hide();
    $(".pagina5").hide();
    $(".pagina6").hide();
    $(".pagina7").hide();
    $(".pagina9").hide();
    $(".pagina10").hide();
  });
});
$(document).ready(function () {
  $(".asezaregeografica").click(function () {
    $(".pagina9").show();
    $(".pagina1").hide();
    $(".pagina2").hide();
    $(".pagina3").hide();
    $(".pagina4").hide();
    $(".pagina5").hide();
    $(".pagina6").hide();
    $(".pagina7").hide();
    $(".pagina8").hide();
    $(".pagina10").hide();
  });
});
$(document).ready(function () {
  $(".googlemaps").click(function () {
    $(".pagina10").show();
    $(".pagina1").hide();
    $(".pagina2").hide();
    $(".pagina3").hide();
    $(".pagina4").hide();
    $(".pagina5").hide();
    $(".pagina6").hide();
    $(".pagina7").hide();
    $(".pagina8").hide();
    $(".pagina9").hide();
  });
});














$(document).ready(function () {
  $(".ScurtaDescriere").click(function () {
    $(".pag2buton1").show();
    $(".pag2buton2").hide();
    $(".pag2buton3").hide();
    $(".pag2buton4").hide();
    $(".pag2buton5").hide();
    $(".pag2buton6").hide();
    $(".pag2buton7").hide();
    $(".pag2buton8").hide();
    $(".pag2buton9").hide();
    $(".pag2buton10").hide();
  });
});
$(document).ready(function () {
  $(".Etimologie").click(function () {
    $(".pag2buton2").show();
    $(".pag2buton1").hide();
    $(".pag2buton3").hide();
    $(".pag2buton4").hide();
    $(".pag2buton5").hide();
    $(".pag2buton6").hide();
    $(".pag2buton7").hide();
    $(".pag2buton8").hide();
    $(".pag2buton9").hide();
    $(".pag2buton10").hide();
  });
});
$(document).ready(function () {
  $(".Istorie").click(function () {
    $(".pag2buton3").show();
    $(".pag2buton1").hide();
    $(".pag2buton2").hide();
    $(".pag2buton4").hide();
    $(".pag2buton5").hide();
    $(".pag2buton6").hide();
    $(".pag2buton7").hide();
    $(".pag2buton8").hide();
    $(".pag2buton9").hide();
    $(".pag2buton10").hide();
  });
});
$(document).ready(function () {
  $(".AsezareGeografica").click(function () {
    $(".pag2buton4").show();
    $(".pag2buton1").hide();
    $(".pag2buton2").hide();
    $(".pag2buton3").hide();
    $(".pag2buton5").hide();
    $(".pag2buton6").hide();
    $(".pag2buton7").hide();
    $(".pag2buton8").hide();
    $(".pag2buton9").hide();
    $(".pag2buton10").hide();
  });
});
$(document).ready(function () {
  $(".Relief").click(function () {
    $(".pag2buton5").show();
    $(".pag2buton1").hide();
    $(".pag2buton2").hide();
    $(".pag2buton3").hide();
    $(".pag2buton4").hide();
    $(".pag2buton6").hide();
    $(".pag2buton7").hide();
    $(".pag2buton8").hide();
    $(".pag2buton9").hide();
    $(".pag2buton10").hide();
  });
});
$(document).ready(function () {
  $(".Hidrografie").click(function () {
    $(".pag2buton6").show();
    $(".pag2buton1").hide();
    $(".pag2buton2").hide();
    $(".pag2buton3").hide();
    $(".pag2buton4").hide();
    $(".pag2buton5").hide();
    $(".pag2buton7").hide();
    $(".pag2buton8").hide();
    $(".pag2buton9").hide();
    $(".pag2buton10").hide();
  });
});
$(document).ready(function () {
  $(".Clima").click(function () {
    $(".pag2buton7").show();
    $(".pag2buton1").hide();
    $(".pag2buton2").hide();
    $(".pag2buton3").hide();
    $(".pag2buton4").hide();
    $(".pag2buton5").hide();
    $(".pag2buton6").hide();
    $(".pag2buton8").hide();
    $(".pag2buton9").hide();
    $(".pag2buton10").hide();
  });
});
$(document).ready(function () {
  $(".FloraSiFauna").click(function () {
    $(".pag2buton8").show();
    $(".pag2buton1").hide();
    $(".pag2buton2").hide();
    $(".pag2buton3").hide();
    $(".pag2buton4").hide();
    $(".pag2buton5").hide();
    $(".pag2buton6").hide();
    $(".pag2buton7").hide();
    $(".pag2buton9").hide();
    $(".pag2buton10").hide();
  });
});
$(document).ready(function () {
  $(".Demografie").click(function () {
    $(".pag2buton9").show();
    $(".pag2buton1").hide();
    $(".pag2buton2").hide();
    $(".pag2buton3").hide();
    $(".pag2buton4").hide();
    $(".pag2buton5").hide();
    $(".pag2buton6").hide();
    $(".pag2buton7").hide();
    $(".pag2buton8").hide();
    $(".pag2buton10").hide();
  });
});
$(document).ready(function () {
  $(".Evenimente").click(function () {
    $(".pag2buton10").show();
    $(".pag2buton1").hide();
    $(".pag2buton2").hide();
    $(".pag2buton3").hide();
    $(".pag2buton4").hide();
    $(".pag2buton5").hide();
    $(".pag2buton6").hide();
    $(".pag2buton7").hide();
    $(".pag2buton8").hide();
    $(".pag2buton9").hide();
  });
});






$(document).ready(function () {
  $(".dezvoltareurbana").click(function () {
    $(".pag6buton1").show();
    $(".pag6buton2").hide();
    $(".pag6buton3").hide();
    $(".pag6buton4").hide();
    $(".pag6buton5").hide();
  });
});
$(document).ready(function () {
  $(".invatamantsieducatie").click(function () {
    $(".pag6buton1").hide();
    $(".pag6buton2").show();
    $(".pag6buton3").hide();
    $(".pag6buton4").hide();
    $(".pag6buton5").hide();
  });
});
$(document).ready(function () {
  $(".socialculturale").click(function () {
    $(".pag6buton1").hide();
    $(".pag6buton2").hide();
    $(".pag6buton3").show();
    $(".pag6buton4").hide();
    $(".pag6buton5").hide();
  });
});
$(document).ready(function () {
  $(".spatiiverzisiparcuri").click(function () {
    $(".pag6buton1").hide();
    $(".pag6buton2").hide();
    $(".pag6buton3").hide();
    $(".pag6buton4").show();
    $(".pag6buton5").hide();
  });
});
$(document).ready(function () {
  $(".transportsistrazi").click(function () {
    $(".pag6buton1").hide();
    $(".pag6buton2").hide();
    $(".pag6buton3").hide();
    $(".pag6buton4").hide();
    $(".pag6buton5").show();
  });
});







$(document).ready(function () {
  $(".Muzee").click(function () {
    $(".muzee1").show();
    $(".turism").hide();
  });
});

$(document).ready(function () {
  $(".AtractiiTuristice1").click(function () {
    $(".muzee1").hide();
    $(".turism").show();
  });
});


$(document).ready(function () {
  $(".EducatieSiCalificare").click(function () {
    $(".pag4buton1").show();
    $(".pag4buton2").hide();
    $(".pag4buton3").hide();
    $(".pag4buton4").hide();
    $(".pag4buton5").hide();
    $(".pag4buton6").hide();
    $(".pag4buton7").hide();
    $(".pag4buton8").hide();
  });
});
$(document).ready(function () {
  $(".viatasicomunitate").click(function () {
    $(".pag4buton2").show();
    $(".pag4buton1").hide();
    $(".pag4buton3").hide();
    $(".pag4buton4").hide();
    $(".pag4buton5").hide();
    $(".pag4buton6").hide();
    $(".pag4buton7").hide();
    $(".pag4buton8").hide();
  });
});
$(document).ready(function () {
  $(".sanatatesiasistentasociala").click(function () {
    $(".pag4buton3").show();
    $(".pag4buton1").hide();
    $(".pag4buton2").hide();
    $(".pag4buton4").hide();
    $(".pag4buton5").hide();
    $(".pag4buton6").hide();
    $(".pag4buton7").hide();
    $(".pag4buton8").hide();
  });
});
$(document).ready(function () {
  $(".locuinteinbaiamare").click(function () {
    $(".pag4buton4").show();
    $(".pag4buton1").hide();
    $(".pag4buton2").hide();
    $(".pag4buton3").hide();
    $(".pag4buton5").hide();
    $(".pag4buton6").hide();
    $(".pag4buton7").hide();
    $(".pag4buton8").hide();
  });
});
$(document).ready(function () {
  $(".politicasisiguranta").click(function () {
    $(".pag4buton5").show();
    $(".pag4buton1").hide();
    $(".pag4buton2").hide();
    $(".pag4buton3").hide();
    $(".pag4buton4").hide();
    $(".pag4buton6").hide();
    $(".pag4buton7").hide();
    $(".pag4buton8").hide();
  });
});
$(document).ready(function () {
  $(".utilitati").click(function () {
    $(".pag4buton6").show();
    $(".pag4buton1").hide();
    $(".pag4buton2").hide();
    $(".pag4buton3").hide();
    $(".pag4buton4").hide();
    $(".pag4buton5").hide();
    $(".pag4buton7").hide();
    $(".pag4buton8").hide();
  });
});
$(document).ready(function () {
  $(".mediu").click(function () {
    $(".pag4buton7").show();
    $(".pag4buton1").hide();
    $(".pag4buton2").hide();
    $(".pag4buton3").hide();
    $(".pag4buton4").hide();
    $(".pag4buton5").hide();
    $(".pag4buton6").hide();
    $(".pag4buton8").hide();
  });
});
$(document).ready(function () {
  $(".adoptiacainilorfarastapan").click(function () {
    $(".pag4buton8").show();
    $(".pag4buton1").hide();
    $(".pag4buton2").hide();
    $(".pag4buton3").hide();
    $(".pag4buton4").hide();
    $(".pag4buton5").hide();
    $(".pag4buton6").hide();
    $(".pag4buton7").hide();
  });
});













$(document).ready(function () {
  $(".pag4buton1_1").click(function () {
    $(".reteascolara").show();
    $(".facilitati").hide();
    $(".calificare").hide();
  });
});
$(document).ready(function () {
  $(".pag4buton1_2").click(function () {
    $(".facilitati").show();
    $(".reteascolara").hide();
    $(".calificare").hide();
  });
});
$(document).ready(function () {
  $(".pag4buton1_3").click(function () {
    $(".calificare").show();
    $(".reteascolara").hide();
    $(".facilitati").hide();
  });
});






$(document).ready(function () {
  $(".pag4buton2_1").click(function () {
    $(".voluntariat").show();
    $(".consilicivice").hide();
    $(".consiliuldeonoare").hide();
  });
});
$(document).ready(function () {
  $(".pag4buton2_2").click(function () {
    $(".consilicivice").show();
    $(".voluntariat").hide();
    $(".consiliuldeonoare").hide();
  });
});
$(document).ready(function () {
  $(".pag4buton2_3").click(function () {
    $(".consiliuldeonoare").show();
    $(".consilicivice").hide();
    $(".voluntariat").hide();

  });
});






$(document).ready(function () {
  $(".pag4buton3_1").click(function () {
    $(".asistentasociala").show();
    $(".unitatimedicale").hide();
    $(".ocrotirecopilșifamilie").hide();

  });
});
$(document).ready(function () {
  $(".pag4buton3_2").click(function () {
    $(".unitatimedicale").show();
    $(".asistentasociala").hide();
    $(".ocrotirecopilșifamilie").hide();

  });
});
$(document).ready(function () {
  $(".pag4buton3_3").click(function () {
    $(".ocrotirecopilșifamilie").show();
    $(".unitatimedicale").hide();
    $(".asistentasociala").hide();

  });
});






$(document).ready(function () {
  $(".pag4buton4_1").click(function () {
    $(".locuințesociale").show();
    $(".locuințeprinANL").hide();
    $(".locuințedeserviciu").hide();

  });
});
$(document).ready(function () {
  $(".pag4buton4_2").click(function () {
    $(".locuințeprinANL").show();
    $(".locuințesociale").hide();
    $(".locuintedeserviciu").hide();
  });
});
$(document).ready(function () {
  $(".pag4buton4_3").click(function () {
    $(".locuintedeserviciu").show();
    $(".locuințeprinANL").hide();
    $(".locuințesociale").hide();
  });
});






$(document).ready(function () {
  $(".pag4buton5_1").click(function () {
    $(".polițialocalăBaiaMare").show();
    $(".siguranțacirculației").hide();
    $(".protectiecivila").hide();

  });
});
$(document).ready(function () {
  $(".pag4buton5_2").click(function () {
    $(".siguranțacirculației").show();
    $(".polițialocalăBaiaMare").hide();
    $(".protectiecivila").hide();
  });
});
$(document).ready(function () {
  $(".pag4buton5_3").click(function () {
    $(".protectiecivila").show();
    $(".siguranțacirculației").hide();
    $(".polițialocalăBaiaMare").hide();
  });
});












$(document).ready(function () {
  $(".pag4buton6_1").click(function () {
    $(".salubritateamenajera").show();
    $(".apacurenta").hide();
    $(".preturipentruavize").hide();

  });
});
$(document).ready(function () {
  $(".pag4buton6_2").click(function () {
    $(".apacurenta").show();
    $(".salubritateamenajera").hide();
    $(".preturipentruavize").hide();

  });
});
$(document).ready(function () {
  $(".pag4buton6_3").click(function () {
    $(".apacurenta").hide();
    $(".salubritateamenajera").hide();
    $(".preturipentruavize").show();

  });
});








$(document).ready(function () {
  $(".pag4buton7_1").click(function () {
    $(".planulintegratdeprotectiamediului").show();
    $(".proiectedespremediu").hide();
    $(".PLAM").hide();

  });
});
$(document).ready(function () {
  $(".pag4buton7_2").click(function () {
    $(".proiectedespremediu").show();
    $(".planulintegratdeprotectiamediului").hide();
    $(".PLAM").hide();

  });
});
$(document).ready(function () {
  $(".pag4buton7_3").click(function () {
    $(".PLAM").show();
    $(".proiectedespremediu").hide();
    $(".planulintegratdeprotectiamediului").hide();

  });
});










$(document).ready(function () {
  $(".pag6buton1_1").click(function () {
    $(".Digitizarea3Dareteleidedrumuri").show();
    $(".HartadezgomotinteractivaaMunicipiuluiBaiaMare").hide();
    $(".Elaborareaunuiplandemobilitateurbanăpentruvârstnicișipersoanelecudizabilități").hide();
    $(".ZoneproductivesustenabileînBaiaMare").hide();
    $(".CreştereaperformanţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();
    $(".CreştereaeficienţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton1_2").click(function () {
    $(".HartadezgomotinteractivaaMunicipiuluiBaiaMare").show();
    $(".Digitizarea3Dareteleidedrumuri").hide();
    $(".Elaborareaunuiplandemobilitateurbanăpentruvârstnicișipersoanelecudizabilități").hide();
    $(".ZoneproductivesustenabileînBaiaMare").hide();
    $(".CreştereaperformanţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();
    $(".CreştereaeficienţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton1_3").click(function () {
    $(".Elaborareaunuiplandemobilitateurbanăpentruvârstnicișipersoanelecudizabilități").show();
    $(".HartadezgomotinteractivaaMunicipiuluiBaiaMare").hide();
    $(".Digitizarea3Dareteleidedrumuri").hide();
    $(".ZoneproductivesustenabileînBaiaMare").hide();
    $(".CreştereaperformanţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();
    $(".CreştereaeficienţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton1_4").click(function () {
    $(".ZoneproductivesustenabileînBaiaMare").show();
    $(".HartadezgomotinteractivaaMunicipiuluiBaiaMare").hide();
    $(".Digitizarea3Dareteleidedrumuri").hide();
    $(".Elaborareaunuiplandemobilitateurbanăpentruvârstnicișipersoanelecudizabilități").hide();
    $(".CreştereaperformanţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();
    $(".CreştereaeficienţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();

  });
});
$(document).ready(function () {
  $(".pag6buton1_5").click(function () {
    $(".CreştereaperformanţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").show();
    $(".HartadezgomotinteractivaaMunicipiuluiBaiaMare").hide();
    $(".Digitizarea3Dareteleidedrumuri").hide();
    $(".Elaborareaunuiplandemobilitateurbanăpentruvârstnicișipersoanelecudizabilități").hide();
    $(".ZoneproductivesustenabileînBaiaMare").hide();
    $(".CreştereaeficienţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();

  });
});
$(document).ready(function () {
  $(".pag6buton1_6").click(function () {
    $(".CreştereaeficienţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").show();
    $(".HartadezgomotinteractivaaMunicipiuluiBaiaMare").hide();
    $(".Digitizarea3Dareteleidedrumuri").hide();
    $(".Elaborareaunuiplandemobilitateurbanăpentruvârstnicișipersoanelecudizabilități").hide();
    $(".ZoneproductivesustenabileînBaiaMare").hide();
    $(".CreştereaperformanţeienergeticeablocurilordelocuinţedinmunicipiulBaiaMare").hide();

  });
});








$(document).ready(function () {
  $(".pag6buton2_1").click(function () {
    $(".cent").show();
    $(".cngs").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton2_2").click(function () {
    $(".cngs").show();
    $(".cent").hide();
  });
});







$(document).ready(function () {
  $(".pag6buton3_1").click(function () {
    $(".centrusocialmultifunctionalromanii").show();
    $(".ReabilitareasipromovareaidentităţiiculturalesiistoricePiaţaCetăţii").hide();
    $(".ModernizareasiextindereacentruluisocialpentrupersoanecudizabilitatiPhoenix-BaiaMare").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton3_2").click(function () {
    $(".centrusocialmultifunctionalromanii").hide();
    $(".ReabilitareasipromovareaidentităţiiculturalesiistoricePiaţaCetăţii").show();
    $(".ModernizareasiextindereacentruluisocialpentrupersoanecudizabilitatiPhoenix-BaiaMare").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton3_3").click(function () {
    $(".centrusocialmultifunctionalromanii").hide();
    $(".ReabilitareasipromovareaidentităţiiculturalesiistoricePiaţaCetăţii").hide();
    $(".ModernizareasiextindereacentruluisocialpentrupersoanecudizabilitatiPhoenix-BaiaMare").show();
  });
});








$(document).ready(function () {
  $(".pag6buton4_1").click(function () {
    $(".ArboretuldecastancomestibildelaBaiaMare").show();
    $(".CreştereacalităţiivieţiiurbaneprinamenajareaParculuiPublicCentral").hide();
    $(".Dezvoltareaeco-reţeleiurbaneşiainfrastructuriideagrementîncartierulVasileAlecsandri").hide();
    $(".SkateParkînBaiaMare").hide();
    $(".Îmbunătăţireavaloriieconomiceapădurii").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton4_2").click(function () {
    $(".ArboretuldecastancomestibildelaBaiaMare").hide();
    $(".CreştereacalităţiivieţiiurbaneprinamenajareaParculuiPublicCentral").show();
    $(".Dezvoltareaeco-reţeleiurbaneşiainfrastructuriideagrementîncartierulVasileAlecsandri").hide();
    $(".SkateParkînBaiaMare").hide();
    $(".Îmbunătăţireavaloriieconomiceapădurii").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton4_3").click(function () {
    $(".ArboretuldecastancomestibildelaBaiaMare").hide();
    $(".CreştereacalităţiivieţiiurbaneprinamenajareaParculuiPublicCentral").hide();
    $(".Dezvoltareaeco-reţeleiurbaneşiainfrastructuriideagrementîncartierulVasileAlecsandri").show();
    $(".SkateParkînBaiaMare").hide();
    $(".Îmbunătăţireavaloriieconomiceapădurii").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton4_4").click(function () {
    $(".ArboretuldecastancomestibildelaBaiaMare").hide();
    $(".CreştereacalităţiivieţiiurbaneprinamenajareaParculuiPublicCentral").hide();
    $(".Dezvoltareaeco-reţeleiurbaneşiainfrastructuriideagrementîncartierulVasileAlecsandri").hide();
    $(".SkateParkînBaiaMare").show();
    $(".Îmbunătăţireavaloriieconomiceapădurii").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton4_5").click(function () {
    $(".ArboretuldecastancomestibildelaBaiaMare").hide();
    $(".CreştereacalităţiivieţiiurbaneprinamenajareaParculuiPublicCentral").hide();
    $(".Dezvoltareaeco-reţeleiurbaneşiainfrastructuriideagrementîncartierulVasileAlecsandri").hide();
    $(".SkateParkînBaiaMare").hide();
    $(".Îmbunătăţireavaloriieconomiceapădurii").show();
  });
});







$(document).ready(function () {
  $(".pag6buton5_1").click(function () {
    $(".ÎmbunătăţireatransportuluipublicurbanprinextindereareţeleidetroleibuzşiainfrastructuriiaferenteînBaiaMare–cartierVasileAlecsandri").show();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastraziiGranicerilordinMunicipiulBaiaMare").hide();
    $(".ReabilitareapoduluidepesteSăsar-stradaPodulViilor").hide();
    $(".ÎnfiinţareareţeleidedrumuriforestiereaMunicipiuluiBaiaMare").hide();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastrăziiElectrolizeidinMunicipiulBaiaMare").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton5_2").click(function () {
    $(".ÎmbunătăţireatransportuluipublicurbanprinextindereareţeleidetroleibuzşiainfrastructuriiaferenteînBaiaMare–cartierVasileAlecsandri").hide();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastraziiGranicerilordinMunicipiulBaiaMare").show();
    $(".ReabilitareapoduluidepesteSăsar-stradaPodulViilor").hide();
    $(".ÎnfiinţareareţeleidedrumuriforestiereaMunicipiuluiBaiaMare").hide();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastrăziiElectrolizeidinMunicipiulBaiaMare").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton5_3").click(function () {
    $(".ÎmbunătăţireatransportuluipublicurbanprinextindereareţeleidetroleibuzşiainfrastructuriiaferenteînBaiaMare–cartierVasileAlecsandri").hide();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastraziiGranicerilordinMunicipiulBaiaMare").hide();
    $(".ReabilitareapoduluidepesteSăsar-stradaPodulViilor").show();
    $(".ÎnfiinţareareţeleidedrumuriforestiereaMunicipiuluiBaiaMare").hide();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastrăziiElectrolizeidinMunicipiulBaiaMare").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton5_4").click(function () {
    $(".ÎmbunătăţireatransportuluipublicurbanprinextindereareţeleidetroleibuzşiainfrastructuriiaferenteînBaiaMare–cartierVasileAlecsandri").hide();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastraziiGranicerilordinMunicipiulBaiaMare").hide();
    $(".ReabilitareapoduluidepesteSăsar-stradaPodulViilor").hide();
    $(".ÎnfiinţareareţeleidedrumuriforestiereaMunicipiuluiBaiaMare").show();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastrăziiElectrolizeidinMunicipiulBaiaMare").hide();
  });
});
$(document).ready(function () {
  $(".pag6buton5_5").click(function () {
    $(".ÎmbunătăţireatransportuluipublicurbanprinextindereareţeleidetroleibuzşiainfrastructuriiaferenteînBaiaMare–cartierVasileAlecsandri").hide();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastraziiGranicerilordinMunicipiulBaiaMare").hide();
    $(".ReabilitareapoduluidepesteSăsar-stradaPodulViilor").hide();
    $(".ÎnfiinţareareţeleidedrumuriforestiereaMunicipiuluiBaiaMare").hide();
    $(".CreştereaaccesibilităţiiurbaneprinmodernizareastrăziiElectrolizeidinMunicipiulBaiaMare").show();
  });
});













function clock() {
  var time = new Date(),

    hours = time.getHours(),

    minutes = time.getMinutes(),


    seconds = time.getSeconds();

  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, 'red');
  grad.addColorStop(0.5, 'rgb(68, 68, 68)');
  grad.addColorStop(1, 'rgb(68, 68, 68)');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius * 0.20 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour = (hour * Math.PI / 6) +
    (minute * Math.PI / (6 * 60)) +
    (second * Math.PI / (6 * 60 * 60));
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minute
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
  // second
  second = (second * Math.PI / 30);
  drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}







