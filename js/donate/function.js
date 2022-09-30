$.cxDialog.defaults.background = '#000';// alert bg rengi
$.FormHata= function(deger){
  var deger;var deger2="#"+deger;$('#'+deger+'').css({"background-color" : "#FFB3B3"}).focus();
  }
$.FormOnay= function(deger){
  var deger; var deger2="#"+deger;$('#'+deger+'').css({"background-color" : "#fff"});  }

$.duzenliBagis = function(){
			if( $("#duzenliBagis").is(':checked') ) {
				$("#duzenliBagisDetay").css("display","");
			}
			else {
			   $("#duzenliBagisDetay").css("display","none");
        }
}

$(document).ready(function() {
    $("#SepetTutar").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	    $("#telefon").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	    $("#cepTel").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	
		    $("#sbtTel").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
		    $("#tcno").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
			    $("#kartno_a").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
			    $("#kartno_b").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
			    $("#kartno_c").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
			    $("#kartno_d").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
			$("#cvv").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	    $("#tcNo").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
		    $("#user").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});
$(document).on("click", ".orderDonation", function () {
	$('input').css({"background-color" : "#fff"});
	$('select').css({"background-color" : "#fff"});
	$(".modal-body #hissedarIsim").html("Ad Soyad");
	$(".modal-body #hissedarTelefon").html("Cep Tel");
	$("#sepetEkle1")[0].reset();
     var fonBaslik 	= $(this).data('title');
	var portalid 	= $(this).data('portal');
     var fonid	 	= $(this).data('fonid');//modal data
     $('.modal-header #myModalLabel').html(fonBaslik);
	 $(".modal-body #fonid").val(fonid);

	 var Ttutar			="tutar-"+fonid;
	 var gelenTutar 	= $("input[name="+Ttutar+"]").val();// input
  	if (isNaN(gelenTutar)) {$(".modal-body #SepetTutar").val("");}
		else {$(".modal-body #SepetTutar").val(gelenTutar);}
	 $(".modal-body #fonidS").val(fonid);
	
	$.bagisDetayGetir1 = function(fonidDeger){
			var fonidDeger;
			$.post('function.php',{detayFonId1:fonidDeger},function(output){
			$('#activities').empty();
			
			$("#activities").append(output);
		});
		}
	$.bagisDetayGetir2 = function(fonidDeger){
			var fonidDeger;
			$.post('function.php',{detayFonId2:fonidDeger},function(output){
			$('#sources').empty();
			
			$("#sources").append(output);
		});
		}
	$.bagisDetayGetir3 = function(fonidDeger){
			var fonidDeger;
			$.post('function.php',{detayFonId3:fonidDeger},function(output){
			$('#pools').empty();
			
			$("#pools").append(output);
		});
		}
	
	
$.ajax({       
	type: "POST",
	url:  "function.php",
	data : {fonDeger:fonid},
	success: function(sonuc){
	//alert(sonuc);
	var sonuclar = sonuc.split("-");

	if(sonuclar[3]==1){
		$("#bagisNotuDurum").css("display","");
	
	}else if(sonuclar[3]==0){	
			$("#bagisNotuDurum").css("display","none");
		}
	 if(sonuclar[2]==1){//vekalet varmı hissedarekle
	 			 $("#hisseVar").attr('value', 1);
				 $("#vekaletYazisi").css("display","");
				 $("#hissedarekle").css("display","");
				 $("#adetTur").html("Hisse");
			}else{$("#vekaletYazisi").css("display","none"); $("#hissedarekle").css("display","none"); $("#adetTur").html("Adet");
			$("#hisseVar").attr('value', 2);
			}
	 if(sonuclar[0]==1){//adet varsa
				$("#adetDurum").css("display","");
				$(".modal-body #sonToplam").empty()
			}else{
				$("#adetDurum").css("display","none");
				$(".modal-body #sonToplam").empty()
			}

			if(sonuclar[6]==1){//tutar klitle: 1:kilitle 0: kilitleme
			$("#SepetTutar").attr('readonly', true);
			}else {
			$("#SepetTutar").attr('readonly', false);
			}
		
		if(sonuclar[7]==1){
		$("#bagisDetay1").css("display","");
			 $.bagisDetayGetir1(portalid);
	
		}else if(sonuclar[7]==0){	
			$("#bagisDetay1").css("display","none");
		}
		
		if(sonuclar[8]==1){
		$("#bagisDetay2").css("display","");
			 $.bagisDetayGetir2(portalid);
	
		}else if(sonuclar[8]==0){	
			$("#bagisDetay2").css("display","none");
		}
		
		if(sonuclar[9]==1){
		$("#bagisDetay3").css("display","");
			 $.bagisDetayGetir3(portalid);
	
		}else if(sonuclar[9]==0){	
			$("#bagisDetay3").css("display","none");
		}
		
		
		
			}
		})
});
	
	
	$.sepetEkle = function(ekleTur){
		  var ekleTur;
		  var fonidF	  	= $("input[name=fonid]").val();
		  var bagisNotu  		= $.trim($("textarea[name=bagisNotu]").val());
		  var SepetTutar  	= $("input[name=SepetTutar]").val();
		  var adet  		= $("select[name=adet]").val();
		   var hisseVar	  	= $("input[name=hisseVar]").val();
		  var hareketid	  	= $("input[name=hareketid]").val();
		  fonidF  		= $.trim(fonidF);
		  SepetTutar  	= $.trim(SepetTutar);
		  adet  		= $.trim(adet);
		  hareketid		= $.trim(hareketid);  
		   var gonderForm=0;
			 if(SepetTutar=="" || SepetTutar<1){
					$.FormHata("SepetTutar");
					 gonderForm=1;
					}else {$.FormOnay("SepetTutar");}

			if(fonidF=="0" || fonidF==""){
				alert("Sistem Hatası");
				 gonderForm=1;
				 location.reload();
		}
	if(hisseVar==1){	
	$.each($('.hissedar'), function() {
		var hissedarIsim = [];
		hissedarIsim.push($(this).val());
		if($.trim(hissedarIsim)=="" && gonderForm==0){
				$.cxDialog({
				title: 'UYARI !',
				okText: 'Tamam',
				info: '<p>Hissedar İsim Alanını Doldurun</p>',
				ok: function(){
					//location.reload();
					},
				  });
			
			  gonderForm=1;}
		});
	$.each($('.hissedarCep'), function() {
		var hissedarCep = [];
		hissedarCep.push($(this).val());
		if($.trim(hissedarCep)=="" && gonderForm==0){
				$.cxDialog({
				title: 'UYARI !',
				okText: 'Tamam',
				info: '<p>Hissedar Cep Telefonu Alanını Doldurun</p>',
				ok: function(){
					//location.reload();
					},
				  });
			
			  gonderForm=1;}
		});
	}
if(gonderForm==0){
       // alert($('#sepetEkle1').serialize()); // check to show that all form data is being submitted
        $.post("function.php",$('#sepetEkle1').serialize(),function(data){
            if(data==1){
				if(ekleTur==0){
					location.reload();
					}else if(ekleTur==1){
						window.location.href = "odeme";
					}
			}else if(data==0){
				$.cxDialog({
				title: 'UYARI !',
				okText: 'Tamam',
				info: '<p>Beklenmedik bir hata oluştu !!!</p>',
				ok: function(){
					location.reload();
					},
				  });
				} //post check to show that the mysql string is the same as submit                        
        });
        return false; // return false to stop the page submitting. You could have the form action set to the same PHP page so if people dont have JS on they can still use the form
}				
} 
	    $("#duzenliBagis").click(function(){
			if( $("#duzenliBagis").is(':checked') ) {
				$("#duzenliBagisDetay").css("display","");
			}
			else {
			   $("#duzenliBagisDetay").css("display","none");
        }
    });	
$(document).ready(function(){
    $('#odemeSayfasinaGit').click(function(){
        window.location.href='odeme';
    });
});
$(document).ready(function () {
    $('#kartno_a').keyup(function () {
        if (this.value.length == 4) $('#kartno_b').focus().select();
    });

    $('#kartno_b').keyup(function () {
        if (this.value.length == 4) $('#kartno_c').focus().select();
    });

    $('#kartno_c').keyup(function () {
        if (this.value.length == 4) $('#kartno_d').focus().select();
    });

    $('#kartno_d').keyup(function () {
        if (this.value.length == 4) $('#month').focus().select();
    });
});	 
$.bagisTamamla = function(){
	$('input').css({"background-color" : "#fff"});
	$('select').css({"background-color" : "#fff"});
	$('textarea').css({"background-color" : "#fff"});
	var ulke  		= $.trim($("select[name=ulke]").val());
	var adisoyadi  	= $.trim($("input[name=adisoyadi]").val());
	var tcno  		= $.trim($("input[name=tcno]").val());
	var cepTel  	= $.trim($("input[name=cepTel]").val());
	var email  		= $.trim($("input[name=email]").val());
	var kartSahibi  = $.trim($("input[name=kartSahibi]").val());
	var banka  		= $.trim($("select[name=banka]").val());
	var kartno_a  	= $.trim($("input[name=kartno_a]").val());
	var kartno_b  	= $.trim($("input[name=kartno_b]").val());
	var kartno_c  	= $.trim($("input[name=kartno_c]").val());
	var kartno_d  	= $.trim($("input[name=kartno_d]").val());
	var month  		= $.trim($("select[name=month]").val());
	var year  		= $.trim($("select[name=year]").val());
	var cvv  		= $.trim($("input[name=cvv]").val());
	var sozlesme  	= $('#sozlesme').is(':checked');
	if(tcno!=""){
	var tcDurum=$.tcKontrol(tcno);
	}
	var telDurum=$.telKontrol(cepTel);
	var isimKontrol = adisoyadi.indexOf(" ");
	var isimKartKontrol = kartSahibi.indexOf(" ");
	if(ulke=="0" || ulke==0){
	$.FormHata("ulke");
	}else if(adisoyadi.length < 6 || adisoyadi == "" || adisoyadi == " "  || isimKontrol <= 0){
	$.FormHata("adisoyadi");
	}else  if(tcDurum==false){
	$.FormHata("tcno");
	}else if(telDurum==false){
		//$("#cepTel").val("");
	if(ulke==1){
		$.cxDialog({
		title: 'UYARI !',
		okText: 'Tamam',
		info: '<p>Cep Telefonunuz 5 ile başlamalı ve 10 karakterden küçük olamaz</p>',
		ok: function(){},
	  });
	}else{
		$.cxDialog({
		title: 'UYARI !',
		okText: 'Tamam',
		info: '<p>Cep Telefonunuz 00 ile başlamalı ve 10 karakterden küçük olamaz</p>',
		ok: function(){},
	  });
		}
	$.FormHata("cepTel");
	}else if(kartSahibi.length < 6 || kartSahibi == "" || kartSahibi == " "  || isimKartKontrol <= 0){
	$.FormHata("kartSahibi");
	}else if(kartno_a.length <4 || kartno_a == "" || kartno_a == " "){
	$.FormHata("kartno_a");
	}else if(kartno_b.length <4 || kartno_b == "" || kartno_b == " "){
	$.FormHata("kartno_b");
	}else if(kartno_c.length <4 || kartno_c == "" || kartno_c == " "){
	$.FormHata("kartno_c");
	}else if(kartno_d.length <3 || kartno_d == "" || kartno_d == " "){
	$.FormHata("kartno_d");
	}else if(month == "" || month == " "){
	$.FormHata("month");
	}else if(year == "" || year == " "){
	$.FormHata("year");
	}else if(cvv.length <3 || cvv == "" || cvv == " "){
	$.FormHata("cvv");
	}else if(sozlesme!=true){
		alert("Lütfen KVKK sözleşmesini onaylayın");
		$.FormHata("sozlesme");
	}else{
	$("#bagisTamamla").html("Lütfen Bekleyin...");
	$("#bagisTamamla").attr('disabled',true); 
	$('#bagisSepet').submit();
	}
}
//kredi kartı doğrulama
//telefon kontrol
$.telKontrol= function (tel){
    var ulketip = $.trim($('#ulke').val());
    var tel// = $.trim($('#cepTel').val());
	var isNum = /^[0-9-'.']*$/;
	if (!isNum.test(tel)) {
		return false;
	}else if(ulketip == 1){
        var d = tel.substring(0, 1);
        if(d != '5'){
            return false;
        }else if(tel.length<10){
			return false;
			}else{
				return true;
				}
    }else if(ulketip > 1){
        var d = tel.substring(0, 2);
        if(d != '00'){
            return false;
        }else if(tel.length<10){
			return false;
			}else{
				return true;
				}
    }
}
//tel kontrol son
//tc kontrol
$.tcKontrol=function (n,x) {
    var n;  //$.trim($('#tcno').val());
	var x;
    var ulke = $('#ulke').val();
	if(x=="sfr"){ulke=1;}
    if(ulke == 1){
        if(n.length != 11 || n==00000000000 || n==11111111110){
            return false;
        }
        var evens = odds = all = 0;
        for(var i = 0; i < n.length ; i++) {
            var num = Number(n[i]);
            if(i < 10) {
                all += num;
                if(i < 9) {
                    if(i % 2)
                        odds += num
                    else
                        evens += num
                }
            }
        }
        if(((evens * 7) - odds) % 10 == n[9] && all % 10 == n[10]){
            return true;
        }else{
			return false;
           // alert('Lütfen T.C. Numaranızı doğru girin');
        }
    }
}
//tc kontol son  
$(function() {
  $('#adisoyadi').on('change keyup', function() {
    var copisim  = $.trim($("input[name=adisoyadi]").val());
	//if(copisim==""){$(".sepetisim").css("display","none");}else{$(".sepetisim").css("display","");}
    $('.cikisIsim').html(copisim);
  });
});
$(function() {
  $('#cepTel').on('change keyup', function() {
    var copisim  = $.trim($("input[name=cepTel]").val());
	//$('#sepetIsim').css("display","");
	
    $('.cikisTel').html(copisim);
  });
});
$.saniyeBaslat=function(){
		var saniye = 240;
		$.geriyeSay = function(){
			if (saniye > 1){
				saniye--;
				$("#saniye").text(saniye);
			} else {
				window.location.href = "index.php";
			}
		}
		$("#saniye").text(saniye);
		setInterval("$.geriyeSay()", 1000);
		
	};
	
$.uyeGirisYap = function(){
  $('input').css({"background-color" : "#fff"});
  var user	  	= $.trim($("input[name=user]").val());
  var field  	=  $.trim($('input:radio[name=field]:checked').val());
  var pass		= $.trim($("input[name=pass]").val());
  if(field=="tc"){
  var tcKont=$.tcKontrol(user,"sfr");}
  if(tcKont==false && field=="tc"){
	   $.FormHata("user");
	}else if(field=="gsm" && user.length<10){
		$.FormHata("user");
	}else if(pass==""){
		$.FormHata("pass");
		}else{
	$.ajax({       
		type: "POST",
		url:  "functioniyp.php",
		data : {user:user,field:field,pass:pass},
		success: function(sonuc){
		if(sonuc==1 || sonuc==2){
			if(sonuc==2){
				$.cxDialog({
				title: 'UYARI !',
				okText: 'Tamam',
				info: '<p>Bağışçı hesabınız açıldı<br>Bilgilerinizin güncellemek için Tamam a basın</p>',
				ok: function(){
					window.location.href = "bagisci";
					},
			  });
			}else{
				location.reload();
			}
		}else{
		 $.cxDialog({
			title: 'UYARI !',
			okText: 'Tamam',
			info: '<p>Hatalı bilgi girişi !!!</p>',
			ok: function(){
				location.reload();
			},
		  });
			}
		}
	});
}
}
$.sifreHatirlat = function(){
 $('input').css({"background-color" : "#fff"});
  var tcNo	  	= $("input[name=tcNo]").val();
  var ceptel		= $("input[name=ceptel]").val();
  var tcFunc=$.tcKontrol(tcNo,"sfr");
  if(tcFunc==false){
	  $.FormHata("tcNo");
	  }else if(ceptel.length<10){
		   $.FormHata("ceptel");
		  }else{
		$.ajax({       
		type: "POST",
		url:  "functioniyp.php",
		data : {tcNo:tcNo,ceptel:ceptel},
		success: function(sonuc){
		if(sonuc==1){
			 $.cxDialog({
			title: 'UYARI !',
			okText: 'Tamam',
			info: '<p>Şifreniz cep telefonunuza gönderildi.</p>',
			ok: function(){
				window.location.href = "bagisci";
			},
		  });	
		}else{
			var uyari;
			if(sonuc==2){uyari='<p>Bilgilerinizle eşleşen birden çok bağışçı hesabı var.<br>Lütfen destek birimimizle iletişime geçin</p>';}
			else if(sonuc==3){uyari='<p>Bilgilerinizle eşleşen kayıt bulunamadı. Tekrar deneyin</p>';}
			$.cxDialog({
			title: 'UYARI !',
			okText: 'Tamam',
			info: uyari,
			ok: function(){
				location.reload();
				},
		  });
	
		}
		}
	});
}
}
$.sifreDegistir = function(){
 $('input').css({"background-color" : "#fff"});
  var eskiSifre	  	= $.trim($("input[name=eskiSifre]").val());
  var yeniSifre1	= $.trim($("input[name=yeniSifre1]").val());
  var yeniSifre2	= $.trim($("input[name=yeniSifre2]").val());
  if(eskiSifre==""){
	$.FormHata("eskiSifre");
	}else if(yeniSifre1=="" || yeniSifre2=="" || yeniSifre1!=yeniSifre2 || yeniSifre1.length<6){
		   $.FormHata("yeniSifre1");
		   $.FormHata("yeniSifre2");
	}else{
		$.ajax({       
		type: "POST",
		url:  "functioniyp.php",
		data : {eskiSifre:eskiSifre,yeniSifre1:yeniSifre1,yeniSifre2:yeniSifre2},
		success: function(sonuc){
		if(sonuc==1){
		 $.cxDialog({
		title: 'UYARI !',
		okText: 'Tamam',
		info: '<p>Şifreniz başarıyla değiştirildi</p>',
		ok: function(){
			location.reload();
			},
		  });	
		}else{
		$.cxDialog({
		title: 'UYARI !',
		okText: 'Tamam',
		info: '<p>Şifreniz değiştirilemedi !!! Tekrar deneyin</p>',
		ok: function(){
			location.reload();
			},
	  });	
		}
		}
	});
	}
}
