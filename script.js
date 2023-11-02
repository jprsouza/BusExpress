function handleLogin() {
    const button = document.querySelector(".button");
    window.location.href = "tela de carregamento.html"

    function processLogin() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        console.log("Username: " + username);
        console.log("Password: " + password);

        
    }

    button.addEventListener("click", processLogin);
}

//--------HORARIO---------

function pesquisar() {
    var input = document.getElementById("pesquisa");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("tabelaHorarios");
    var tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        var texto = td.textContent || td.innerText;
        if (texto.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  //------------CARREGAMENTO------------

  setTimeout(function() {
    var transitionScreen = document.getElementById("transition-screen");
    transitionScreen.classList.remove("hidden");
    window.location.href = "Horario.html";
}, 3000);

//-----------------BOTÃO--------------

function roma() {
  window.location.href= "https://drive.google.com/file/d/1BXlLAxwDmjAv_2GAG801py0TtacgeetK/view"
}

function barbara() {
  window.location.href="https://drive.google.com/file/d/1IxqGlJ8O-OWQHix263JLzfg1xFVb0o_X/view"
}

function belmonte() {
  window.location.href="https://drive.google.com/file/d/1OwhjQP4_p7S5nvFIlq7TgDjsfcRjCLcb/view"
}

function sider() {
  window.location.href="https://drive.google.com/file/d/1Wm46mosLmtQcqrSQ1QnSdIa21UO2V5QI/view"
}

function castelo() {
  window.location.href="https://drive.google.com/file/d/1K7DzhuqGu-eXyraDX-Ws4qvb2Pxn3a4B/view"
}

function amalia() {
  window.location.href="https://drive.google.com/file/d/11KAHVGPhXjRxMpQBoYyhHrfXtZfA6Rau/view"
}

function aterrado() {
  window.location.href="https://drive.google.com/file/d/10wsE7-mNC5OvzubQjNU70j-FmrKc6Mse/view"
}

function americana() {
  window.location.href="https://drive.google.com/file/d/1COD6z_CzSOaSi-yo2eECmOAfty3tC3AF/view"
}

function limpa() {
  window.location.href="https://drive.google.com/file/d/1IGbfYg4KuqMkFyFwjBxKnbj2qcP24Bb-/view"
}

function vila() {
  window.location.href="https://drive.google.com/file/d/100Xs23TEovgBFCgmhG4SSL2wIgIcyYVK/view"
}

function VRD() {
  window.location.href="https://drive.google.com/file/d/1JPRx9e_R52YSTfWJUI3LVzJ5yRBAPBXl/view"
}

function primavera() {
  window.location.href="https://drive.google.com/file/d/1YpGS-tAGKMElCdE3QvcOLHCdFtvWx__p/view"
}

function novaprimavera() {
  window.location.href="https://drive.google.com/file/d/1B4EzFfvMEWZpYPj3ubSfR7AQQMZEA89k/view"
}

function bosco() {
  window.location.href="https://drive.google.com/file/d/11SMTn8cgjVd6jYHiaW9AXsiB_qM9QHiT/view"
}

function acude() {
  window.location.href="https://drive.google.com/file/d/1dHN5gS-PFCo3LmgCohMyERGn9xhzIe-U/view"
}

function conforto() {
  window.location.href="https://drive.google.com/file/d/157JtF7CGxtRKIMCVaU8HILDHZc7eg4gu/view"
}

function padre() {
  window.location.href="https://drive.google.com/file/d/1IJ8W7Rv00ElXuMMeRCpRI_pDhWp3XsUC/view"
}

function caviana() {
  window.location.href="https://drive.google.com/file/d/1paKteTo24M4E6CgGYlwIpKu7QSmkHxj8/view"
}

function caieira() {
  window.location.href="https://drive.google.com/file/d/195QmvnpRNw4-oF1xp5flJME3szF8G7J4/view"
}

function zarur() {
  window.location.href="https://drive.google.com/file/d/1pNjHd9p4QV_xtEc_ZBUoIpHBaOz4nwF4/view"
}

function zarur2() {
  window.location.href="https://drive.google.com/file/d/1B2VWQwLlYrQ0WdUcchpAVeVKagsbqeql/view"
}

function zarur3() {
  window.location.href="https://drive.google.com/file/d/1qPaxO7do9edZ30T3ewpubtDTMKcOlTPB/view"
}

function candelaria() {
  window.location.href="https://drive.google.com/file/d/16w2twp-IqbV_Br3qLUnYBkwfoOl0A7D2/view"
}

function dom() {
  window.location.href="https://drive.google.com/file/d/1WyfSq0_CWhXjbZV008EzCorQHH2F6H7i/view"
}

function dom2() {
  window.location.href="https://drive.google.com/file/d/1mXcYiZ4rpZwTGuBvV8-DUpZUNEPrUbFc/view"
}

function cruz() {
  window.location.href="https://drive.google.com/file/d/1p-ZGqdfFqiWY6pK3gP2fkeDeIkQQvX_6/view"
}

function acude2() {
  window.location.href="https://drive.google.com/file/d/1FBAe62hfn6YEQkjleOpJ5DPvhqYj4Z7W/view"
}

function acude4() {
  window.location.href="https://drive.google.com/file/d/1RgPMEyCLkgzjeI2-ocTu0U-YTwJrrl1h/view"
}

function rita() {
  window.location.href="https://drive.google.com/file/d/1dZsJ0wCeK4biN1LJD9Qp6krb4pIBw-to/view"
}

function josi() {
  window.location.href="https://drive.google.com/file/d/1hXHD1sAQiMY2xdIF-21wpK09C6z06NEs/view"
}

function jardim() {
  window.location.href="https://drive.google.com/file/d/1GZwH_D1B7zsNnXv2S4CrcQfoh2BuJ4qb/view"
}

function cafezal() {
  window.location.href="https://drive.google.com/file/d/10k-zSV61Vr2ur_bYZ-utbK6Xk9orMR1S/view"
}

function pks() {
  window.location.href="https://drive.google.com/file/d/1HUBL8hV2a2RK27jpv7uSkY9ewkFqQZb9/view"
}

function santo() {
  window.location.href="https://drive.google.com/file/d/10Jk3iqgTF0N-QxO79fCSDUXUMOKKvgvw/view"
}

function con() {
  window.location.href="https://drive.google.com/file/d/1O3xBeAeAzEFy8Zz9dHFB2pVLQ1DuDueB/view"
}

function rdc() {
  window.location.href="https://drive.google.com/file/d/1oL_hriVv8L2K-HG3RaMgRkoHDPC5zqGV/view"
}

function rl() {
  window.location.href="https://drive.google.com/file/d/1-WGlzKYhJxv1Lj2Sae6L4Xv-osWpdd0u/view"
}

function np() {
  window.location.href="https://drive.google.com/file/d/1rOUEJnEYxu6rB2eZairZ_PUOC_JSsrOv/view"
}

function vb() {
  window.location.href="https://drive.google.com/file/d/1BrcUXFrXWXv7FifBE7k2T8PnwAe2EXmS/view  "
}

function coqueiro() {
  window.location.href="https://drive.google.com/file/d/1JN6Shta1n04kWfyiDTNNDfqNA55hIC7Y/view"
}

function bh() {
  window.location.href="https://drive.google.com/file/d/13xomK4okH0wdMcEwFox916hbqvN2DzUd/view"
}

function tp() {
  window.location.href="https://drive.google.com/file/d/1E8GZr5aHF_68M1pKoxWgwsSOC4ux-_Q2/view"
}

function ne() {
  window.location.href="https://drive.google.com/file/d/13WH8mpfI0B73-X3ZJWbmwDZY4UkYvG64/view"
}

function fz() {
  window.location.href="https://drive.google.com/file/d/1q0n6uwSklsFnaRwWKWXapRkXYYa57Drf/view"
}

function fbg() {
  window.location.href="https://drive.google.com/file/d/1TPGkYiSTjqQ6s_EZmvvaoX7ZuJlZPfko/view"
}

function sl() {
  window.location.href="https://drive.google.com/file/d/1fsk77edDrsSh-Lj1Ra99OkTkNa6leppi/view"
}

function bm() {
  window.location.href="https://drive.google.com/file/d/1ohfaIXtZW-vEDuW5k3VVWBJVlKD0FEco/view"
}

function bm1() {
  window.location.href="https://drive.google.com/file/d/1rfD06FhpXR25c97quK60PuB-QALfw0LC/view"
}

function dzs() {
  window.location.href="https://drive.google.com/file/d/1cSJmtuoF3X6rTUUb-gojLjvwstqbxNzL/view"
}

function sti() {
  window.location.href="https://drive.google.com/file/d/1p7Unwr-S5HhWSikaLy9D8fQEkyRVzROM/view"
}

function amp() {
  window.location.href="https://drive.google.com/file/d/1hN4YP9kObtvLLL-mBVwRqtP3_UgUQVWP/view"
}

function cer() {
  window.location.href="https://drive.google.com/file/d/1TUJ9Nonj2QedvrW0ft1z2jgLMK39eV3a/view"
}

function cera() {
  window.location.href="https://drive.google.com/file/d/1dda_RSFDbnA-N-qC4YfP525WicB-fGEI/view"
}

function san() {
  window.location.href="https://drive.google.com/file/d/1VffhpD7kdplp3M4xe2sPrg5AJKnuDema/view"
}

function sant() {
  window.location.href="https://drive.google.com/file/d/1eubyAgMihX_wHOJT7dnvJIvEq2D5b5y-/view"
}

function bm2() {
  window.location.href="https://drive.google.com/file/d/1dx8lhuwWzp3pTdDgroes8PpFi8AOwoWZ/view"
}

function bm3() {
  window.location.href="https://drive.google.com/file/d/1xUoij9hTaCb_lxhX9TZl7VS49fJRH0Q1/view"
}

function bm4() {
  window.location.href="https://drive.google.com/file/d/1ezkL_eRlvDduPgRQGvNpanPAcv5eDHBF/view"
}

function bm5() {
  window.location.href="https://drive.google.com/file/d/1GSskQbH92uIIcbMk0zYpQZh5Qyo1e0Jk/view"
}

function bm6() {
  window.location.href="https://drive.google.com/file/d/1z6N3EeQJyV9urBNk-KmDJYMMzqBozIvw/view"
}

function bm7() {
  window.location.href="https://drive.google.com/file/d/1URJE8stgLu3G09_KM3-KY2iH-v_ZBvTU/view"
}

function bm8() {
  window.location.href="https://drive.google.com/file/d/1zlnr7Hux02HqE4jaahiRV5bxz9MgVLui/view"
}

function bm9() {
  window.location.href="https://drive.google.com/file/d/1UwzNsT0WyLUb3iJqgBoDoyjNPt2BQW-7/view"
}

function bm10() {
  window.location.href="https://drive.google.com/file/d/1RRcj2M-zu8WKwDIvq6y2Z85iEQsmYXa_/view"
}

function bm11() {
  window.location.href="https://drive.google.com/file/d/1l_1yTDd-03G0Nh8d1rBNby0vo_KLtu15/view"
}

function bm12() {
  window.location.href="https://drive.google.com/file/d/1cxlxiy1Fuh_3yvpKVHXJuW6yMNN-MAK1/view"
}

function bm13() {
  window.location.href="https://drive.google.com/file/d/1nkWfieFKNmRz3Jomh8KT16ayy3WXNlMZ/view"
}

function bm14() {
  window.location.href="https://drive.google.com/file/d/1XEsttNptWo4Au4JhIyUS7s4dbi4FvaKn/view"
}

function bm15() {
  window.location.href="https://drive.google.com/file/d/1kWXSUd6beuPsWlbsArCQbXYu6MGpWcdI/view"
}

function bm16() {
  window.location.href="https://drive.google.com/file/d/1G1Hhqzn0sqbqwp_W-oJG93qQ-zCyqwWG/view"
}

function bm17() {
  window.location.href="https://drive.google.com/file/d/1GWanQgIGxVV2vWO1RxsuDE2V_47T0SVW/view"
}

function bm18() {
  window.location.href="https://drive.google.com/file/d/1N1c_L9Sq94DxIgjdwlcmqiE6-lpBmZmu/view"
}

function bm19() {
  window.location.href="https://drive.google.com/file/d/1xchb1RB-LW-kCNbQa2BTW3Dwx0Q6ZO8f/view"
}

function bm20() {
  window.location.href="https://drive.google.com/file/d/18PREFqlXCF0EzhkCKSIQ4_EbIO3mibGK/view"
}

function bm21() {
  window.location.href="https://drive.google.com/file/d/1a890YxxD-Rk3ZmW5MvGRDwg7G4U9wrOz/view"
}

function bm22() {
  window.location.href="https://drive.google.com/file/d/1eqwh_DBmyJrGTCkoz1VRu-jYVRRuiiwu/view"
}

function bm23() {
  window.location.href="https://drive.google.com/file/d/1DdQ0ckKyKXVWbx50VDNWqLiTt_KLTINZ/view"
}

function bm24() {
  window.location.href="https://drive.google.com/file/d/1sQSPqy7EhPax-PecQfeLycfZF9SReZ_C/view"
}

function bm25() {
  window.location.href="https://drive.google.com/file/d/10Ka6KrYySZb_F5uZ65P5nYzTv2Fqe4JD/view"
}

function bm26() {
  window.location.href="https://drive.google.com/file/d/1a3erPpa27pYDHqA8vQiKyKIii2n8A6ml/view"
}

function bm27() {
  window.location.href="https://drive.google.com/file/d/1RRVbFsVWU9DOQhhGT1RUpYN3Cizkj67o/view"
}

function bm28() {
  window.location.href="https://drive.google.com/file/d/1HIDNJM1qj_QMetMTFkKsd5PXSMFEDJrp/view"
}

function bm29() {
  window.location.href="https://drive.google.com/file/d/1L8o3NCdIwAlsvQ1Nx5kJA1MdbenfWtiX/view"
}

function bm30() {
  window.location.href="https://drive.google.com/file/d/1YUyoZq1hHIRwizezA_odMCOZ88Vf_yG3/view"
}

function bm31() {
  window.location.href="https://drive.google.com/file/d/19dOkfpcygQ_Z81ZEv1AuUJLhPAQLgi60/view"
}

function bm32() {
  window.location.href="https://drive.google.com/file/d/14fP4I4NReQ9y8sXOt9l3SzyRrCWpc9qn/view"
}

function bm33() {
  window.location.href="https://drive.google.com/file/d/1RRrAJvTd3M0wEN7pdgFvTCt9NI_R5g9c/view"
}

function bm34() {
  window.location.href="https://drive.google.com/file/d/10y01wweAdod2lKfFyn-5LkED1BrDo4un/view"
}

function bm35() {
  window.location.href="https://drive.google.com/file/d/1zgHFZeZdEbDyXWDEnixjAINYUj_u6Jsq/view"
}

function bm36() {
  window.location.href="https://drive.google.com/file/d/18ZT9jBS_HHy1785zoE27ixDkGMmTT7IX/view"
}

function bm37() {
  window.location.href="https://drive.google.com/file/d/1QffM1zIJFnWBIrVWo4pyNL3ynJ5ujyiC/view"
}

function bm38() {
  window.location.href="https://drive.google.com/file/d/17iznOCOQpwZpSudPx9ApeFRZPCPPy6IG/view"
}

function bm39() {
  window.location.href="https://drive.google.com/file/d/178s4zL6VJ51OudOgC3VNJEwK0CrOGLcP/view"
}

function bm40() {
  window.location.href="https://drive.google.com/file/d/1DHecSOoenF6Qew3teA-xbT6OcUC2x3Xn/view"
}

//------------ROTAS---------

function rota125() {
  window.location.href="https://www.google.com/maps/dir/Pte.+Alta,+Volta+Redonda+-+RJ/ROMA+1+-+VR+-+Rua+Baob%C3%A1+-+Roma,+Volta+Redonda+-+RJ/@-22.554846,-44.1448731,13z/am=t/data=!3m1!4b1!4m15!4m14!1m5!1m1!1s0x9e98fdc7886925:0x886f95af76f3a96d!2m2!1d-44.1320888!2d-22.5361791!1m5!1m1!1s0x9ea146a1a8ccdb:0x1c5536a178235761!2m2!1d-44.0778227!2d-22.5963491!3e3!5i5?entry=ttu"
}

function rota180() {
  window.location.href="https://www.google.com/maps/dir/Centro+Comercial+Roma+II/Conforto,+Volta+Redonda+-+RJ/@-22.558372,-44.1354101,13z/am=t/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9ea1c738115e53:0xe1180c1389cd05e8!2m2!1d-44.0776819!2d-22.6054449!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3?entry=ttu"
}

function rota520 () {
  window.location.href="https://www.google.com/maps/dir/Av.+Itaver%C3%A1+-+Belmonte,+Volta+Redonda+-+RJ,+27274-190/Elevado+Pres.+Castelo+Branco+-+Pte.+Alta,+Volta+Redonda+-+RJ/@-22.5105347,-44.1555675,13z/am=t/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9e99b50e400441:0xc93d534f8c4b929c!2m2!1d-44.1358729!2d-22.5061586!1m5!1m1!1s0x9e9901c6c2de6d:0x7a26d465de5846bb!2m2!1d-44.1351993!2d-22.5270067!3e3?entry=ttu"
}

function rota100() {
  window.location.href="https://www.google.com/maps/dir/Cajueiro,+Barra+Mansa+-+RJ/Monte+Castelo,+Volta+Redonda+-+RJ/@-22.5221639,-44.1521969,13z/am=t/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9e98e3616da751:0xc69cc9e07b1b496!2m2!1d-44.1287002!2d-22.537354!1m5!1m1!1s0x9ea298a55e2aa1:0x1154263b3d6e0d07!2m2!1d-44.0924659!2d-22.520862!3e3?entry=ttu"
}

function rota105() {
  window.location.href="https://www.google.com/maps/dir/R.+Jaci+Dominguete+-+Mangueira,+Barra+Mansa+-+RJ,+27333-002/S%C3%A3o+Crist%C3%B3v%C3%A3o,+Volta+Redonda+-+RJ/@-22.5355311,-44.1310237,15z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e98e5fa8e837b:0x36e900fc11456233!2m2!1d-44.1250615!2d-22.5411234!1m5!1m1!1s0x9e98f4475edced:0xc729b338f5ea8e6b!2m2!1d-44.1191988!2d-22.5323533!3e3!5i3?entry=ttu"
}

function rota150() {
  window.location.href="https://www.google.com/maps/dir/Jardim+Ponte+Alta,+Volta+Redonda+-+RJ/Academia+Proquality+Jd.+Am%C3%A1lia+II,+Rua+Crist%C3%B3v%C3%A3o+Colombo,+161+-+Jardim+Amalia,+Volta+Redonda+-+RJ,+27251-025/@-22.5236875,-44.1446092,13z/am=t/data=!3m1!4b1!4m15!4m14!1m5!1m1!1s0x9e98fb3f8ad263:0xac9d34ba51053f7!2m2!1d-44.1298877!2d-22.5345856!1m5!1m1!1s0x9ea2b56d255555:0x5987efd1564940f7!2m2!1d-44.0781801!2d-22.5074121!3e3!5i2?entry=ttu"
}

function rota155() {
  window.location.href="https://www.google.com/maps/dir/Vila+Rica,+Volta+Redonda+-+RJ/Vila+Americana,+Volta+Redonda+-+RJ/@-22.5204364,-44.1280007,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9ea2f9114d8843:0x69810efb188cc7ab!2m2!1d-44.0684962!2d-22.5454565!1m5!1m1!1s0x9ebd37a8f5da39:0x1fe9ea11bb00ade3!2m2!1d-44.0758246!2d-22.495859!3e3?entry=ttu"
}

function rota205() {
  window.location.href="https://www.google.com/maps/dir/%C3%81gua+Limpa,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.5133888,-44.1124492,14z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ea2cd42490741:0xb9ead466acc6bd62!2m2!1d-44.0651235!2d-22.5077893!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3!5i1?entry=ttu"
}

function rota205A() {
  window.location.href="https://www.google.com/maps/dir/Morada+da+Colina,+Volta+Redonda+-+RJ/Jardim+Padre+Josimo+Tavares,+Volta+Redonda+-+RJ/@-22.5133274,-44.1459806,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ea2ced6ce5853:0x9cf939d35544f5da!2m2!1d-44.0734468!2d-22.5132073!1m5!1m1!1s0x9e99af75594f07:0x612b3fb701ac4cac!2m2!1d-44.1434656!2d-22.5137941!3e3!5i4?entry=ttu"
}

 function rota205B() {
  window.location.href="https://www.google.com/maps/dir/Morada+da+Colina,+Volta+Redonda+-+RJ/Jardim+Padre+Josimo+Tavares,+Volta+Redonda+-+RJ/@-22.5133274,-44.1459806,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ea2ced6ce5853:0x9cf939d35544f5da!2m2!1d-44.0734468!2d-22.5132073!1m5!1m1!1s0x9e99af75594f07:0x612b3fb701ac4cac!2m2!1d-44.1434656!2d-22.5137941!3e3!5i3?entry=ttu"
}

 function rota215() {
  window.location.href="https://www.google.com/maps/dir/Nova+Primavera,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.5030712,-44.1278603,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9ebcef804f86dd:0xe60ae28cb2866c7b!2m2!1d-44.0522317!2d-22.4857646!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3?entry=ttu"
}

function rota215A() {
  window.location.href="https://www.google.com/maps/dir/Nova+Primavera,+Volta+Redonda+-+RJ/Vila+Elmira,+Volta+Redonda+-+RJ/@-22.5097363,-44.1365535,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebcef804f86dd:0xe60ae28cb2866c7b!2m2!1d-44.0522317!2d-22.4857646!1m5!1m1!1s0x9e991db3aca30f:0x55408e49ac7d6ac0!2m2!1d-44.1355282!2d-22.5364843!3e3!5i2?entry=ttu"
}

function rota220() {
  window.location.href="https://www.google.com/maps/dir/Dom+Bosco,+Volta+Redonda+-+RJ/S%C3%A3o+Carlos,+Volta+Redonda+-+RJ/@-22.5040055,-44.1769604,12z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebd01c8fed449:0xa0d0d2bf084ae746!2m2!1d-44.0591775!2d-22.4755694!1m5!1m1!1s0x9e98f87730cc73:0x31e707a6fd188d09!2m2!1d-44.1251374!2d-22.5303149!3e3!5i5?entry=ttu"
}

function rota225() {
  window.location.href="https://www.google.com/maps/dir/A%C3%A7ude+-+Vila+Santa+Cec%C3%ADlia,+Volta+Redonda+-+RJ,+27261-220/S%C3%A3o+Sebastiao,+Volta+Redonda+-+RJ/@-22.4941223,-44.1638386,12z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e98703672110b:0x5e26de3b519d369d!2m2!1d-44.1044387!2d-22.5229897!1m5!1m1!1s0x9ebdada22f7d2d:0x53c637db1402ec59!2m2!1d-44.0663127!2d-22.4660436!3e3!5i1?entry=ttu"
}

function rota230() {
  window.location.href="https://www.google.com/maps/dir/Santo+Agostinho,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.5060757,-44.1373721,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9ebd3f8d5f8131:0x6ad8b6aa95983834!2m2!1d-44.0805798!2d-22.4895076!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3?entry=ttu"
}

function rota250() {
  window.location.href="https://www.google.com/maps/dir/%C3%81gua+Limpa,+Volta+Redonda+-+RJ/Jardim+Padre+Josimo+Tavares,+Volta+Redonda+-+RJ/@-22.507939,-44.1248749,14z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ea2cd42490741:0xb9ead466acc6bd62!2m2!1d-44.0651235!2d-22.5077893!1m5!1m1!1s0x9e99af75594f07:0x612b3fb701ac4cac!2m2!1d-44.1434656!2d-22.5137941!3e3!5i1?entry=ttu"
}

function rota255() {
  window.location.href="https://www.google.com/maps/dir/Morro+da+Caviana,+Volta+Redonda+-+RJ/Vila+Santa+Cec%C3%ADlia,+Volta+Redonda+-+RJ/@-22.5073228,-44.1275117,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebd3f21b0655f:0x24e2dadaab190c15!2m2!1d-44.0752301!2d-22.491929!1m5!1m1!1s0x9e986bce439c9d:0xe8f473c567315e7e!2m2!1d-44.1067253!2d-22.5277794!3e3!5i5?entry=ttu"
}

function rota260() {
  window.location.href="https://www.google.com/maps/dir/Caieira,+Volta+Redonda+-+RJ/Vila+Elmira,+Volta+Redonda+-+RJ/@-22.5050875,-44.1800353,12z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9ebcfdee4a0f77:0x983a79c4170fcbb1!2m2!1d-44.0562042!2d-22.48072!1m5!1m1!1s0x9e991db3aca30f:0x55408e49ac7d6ac0!2m2!1d-44.1355282!2d-22.5364843!3e3?entry=ttu"
}

function rota300() {
  window.location.href="https://www.google.com/maps/dir/Santa+Rita+do+Zarur,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.4931975,-44.1872104,12z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9e97cfa38b28e5:0x138138702738e337!2m2!1d-44.1091014!2d-22.4679376!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3?entry=ttu"
}

function rota305() {
  window.location.href="https://www.google.com/maps/dir/Santa+Rita+do+Zarur,+Volta+Redonda+-+RJ/Jardim+Amalia,+Volta+Redonda+-+RJ/@-22.4882899,-44.135929,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e97cfa38b28e5:0x138138702738e337!2m2!1d-44.1091014!2d-22.4679376!1m5!1m1!1s0x9ea2c7688e34ef:0x29ed3207d6264dfb!2m2!1d-44.0782023!2d-22.5092167!3e3!5i2?entry=ttu"
}

function rota310() {
  window.location.href="https://www.google.com/maps/dir/Santa+Rita+do+Zarur,+Volta+Redonda+-+RJ/A%C3%A7ude,+Volta+Redonda+-+RJ/@-22.489195,-44.1564287,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e97cfa38b28e5:0x138138702738e337!2m2!1d-44.1091014!2d-22.4679376!1m5!1m1!1s0x9e99cf3231d5f5:0xb959be3123d15d75!2m2!1d-44.141168!2d-22.4958981!3e3!5i5?entry=ttu"
}

function rota315() {
  window.location.href="https://www.google.com/maps/dir/Candel%C3%A1ria,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.49898,-44.1332293,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebd0cabe3728f:0x7e689454861d2d39!2m2!1d-44.0746357!2d-22.4714652!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3!5i3?entry=ttu"
}

function rota320() {
  window.location.href="https://www.google.com/maps/dir/Conforto,+Volta+Redonda+-+RJ/Dom+Bosco,+Volta+Redonda+-+RJ/@-22.4996413,-44.1309359,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!1m5!1m1!1s0x9ebd01c8fed449:0xa0d0d2bf084ae746!2m2!1d-44.0591775!2d-22.4755694!3e3!5i4?entry=ttu"
}

function rota325() {
  window.location.href="https://www.google.com/maps/dir/Santa+Cruz,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.4929092,-44.1872036,12z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebd64db7e3c59:0x3f17ed51d19ab15c!2m2!1d-44.0936543!2d-22.46496!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3!5i1?entry=ttu"
}

function rota500() {
  window.location.href="https://www.google.com/maps/dir/A%C3%A7ude,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.5100662,-44.1568953,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e99cf3231d5f5:0xb959be3123d15d75!2m2!1d-44.141168!2d-22.4958981!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3!5i2?entry=ttu"
}

function rota500A() {
  window.location.href="https://www.google.com/maps/dir/A%C3%A7ude,+Volta+Redonda+-+RJ/Pte.+Alta,+Volta+Redonda+-+RJ/@-22.5148913,-44.1568953,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9e99cf3231d5f5:0xb959be3123d15d75!2m2!1d-44.141168!2d-22.4958981!1m5!1m1!1s0x9e98fdc7886925:0x886f95af76f3a96d!2m2!1d-44.1320888!2d-22.5361791!3e3?entry=ttu"
}

function  rota505() {
  window.location.href="https://www.google.com/maps/dir/Conforto,+Volta+Redonda+-+RJ/Santa+Rita+de+C%C3%A1ssia,+Barra+Mansa+-+RJ/@-22.5054882,-44.1679516,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!1m5!1m1!1s0x9e99f145ce757f:0x92711bec9d787235!2m2!1d-44.1654333!2d-22.4925809!3e3?entry=ttu"
}

function rota510() {
  window.location.href="https://www.google.com/maps/dir/R.+28+-+Jardim+Padre+Josimo+Tavares,+Volta+Redonda+-+RJ,+27273-447/R.+Dom+Pedro+II,+Volta+Redonda+-+RJ/@-22.5144235,-44.1603465,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9e99a7214758e3:0xd3466aaa796e457d!2m2!1d-44.1473472!2d-22.5175706!1m5!1m1!1s0x9e98fe63420c25:0x81839d8d4a0b457!2m2!1d-44.1295184!2d-22.5310644!3e3?entry=ttu"
}

function rota525() {
  window.location.href="https://www.google.com/maps/dir/A%C3%A7ude,+Volta+Redonda+-+RJ/Jardim+Amalia,+Volta+Redonda+-+RJ/@-22.5035508,-44.1297785,14z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e99cf3231d5f5:0xb959be3123d15d75!2m2!1d-44.141168!2d-22.4958981!1m5!1m1!1s0x9ea2c7688e34ef:0x29ed3207d6264dfb!2m2!1d-44.0782023!2d-22.5092167!3e3!5i1?entry=ttu"
}

function rota525A() {
  window.location.href="https://www.google.com/maps/dir/Pra%C3%A7a+Cafezal,+Volta+Redonda+-+RJ,+27276-650/Vila+Bras%C3%ADlia,+Volta+Redonda+-+RJ/@-22.4947627,-44.1330811,14z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9e9834cf8ef541:0xbcf072af307dffb!2m2!1d-44.1334189!2d-22.5025045!1m5!1m1!1s0x9e97f13c9ee621:0x690ae9d26c4c1ff0!2m2!1d-44.1091014!2d-22.4868257!3e3?entry=ttu"
}

function rota530() {
  window.location.href="https://www.google.com/maps/dir/A%C3%A7ude,+Volta+Redonda+-+RJ/Vila+Rica,+Volta+Redonda+-+RJ/@-22.5035508,-44.1097885,14z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e99cf3231d5f5:0xb959be3123d15d75!2m2!1d-44.141168!2d-22.4958981!1m5!1m1!1s0x9ebcc1e4392b05:0x4a2c1740a4554d97!2m2!1d-44.0472832!2d-22.5008993!3e3!5i2?entry=ttu"
}

function rota540() {
  window.location.href="https://www.google.com/maps/dir/A%C3%A7ude,+Volta+Redonda+-+RJ/Santo+Agostinho,+Volta+Redonda+-+RJ/@-22.50221,-44.1520037,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e99cf3231d5f5:0xb959be3123d15d75!2m2!1d-44.141168!2d-22.4958981!1m5!1m1!1s0x9ebd3f8d5f8131:0x6ad8b6aa95983834!2m2!1d-44.0805798!2d-22.4895076!3e3!5i1?entry=ttu"
}

function rota210() {
  window.location.href="https://www.google.com/maps/dir/Tr%C3%AAs+Po%C3%A7os,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.5058659,-44.1322474,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebce7f6727aad:0xeefb346542898c7d!2m2!1d-44.0603668!2d-22.4952429!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3!5i2?entry=ttu"
}

function rota210B() {
  window.location.href="https://www.google.com/maps/dir/R.+%C3%89rica+Berbete,+Pinheiral+-+RJ,+27197-000/Via+de+Acesso+Av.+dos+Trabalhadores+-+Laranjal,+Volta+Redonda+-+RJ,+27260-080/@-22.5221386,-44.102677,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebcc22f828bc5:0xca68fdb6d7004458!2m2!1d-44.0247802!2d-22.5060403!1m5!1m1!1s0x9e9809e2c5020f:0x80d68d527aec90a0!2m2!1d-44.0965121!2d-22.5130423!3e3!5i3?entry=ttu"
}

function rota210C() {
  window.location.href="https://www.google.com/maps/dir/Tr%C3%AAs+Po%C3%A7os,+Volta+Redonda+-+RJ/Vila+Rica,+Volta+Redonda+-+RJ/@-22.4984771,-44.0599112,15z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebce7f6727aad:0xeefb346542898c7d!2m2!1d-44.0603668!2d-22.4952429!1m5!1m1!1s0x9ebcc1e4392b05:0x4a2c1740a4554d97!2m2!1d-44.0472832!2d-22.5008993!3e3!5i1?entry=ttu"
}

function rota245() {
  window.location.href="https://www.google.com/maps/dir/Nova+Primavera,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.5030712,-44.1278671,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebcef804f86dd:0xe60ae28cb2866c7b!2m2!1d-44.0522317!2d-22.4857646!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3!5i3?entry=ttu"
}

function rota400() {
  window.location.href="https://www.google.com/maps/dir/Vila+Bras%C3%ADlia,+Volta+Redonda+-+RJ/Vila+Elmira,+Volta+Redonda+-+RJ/@-22.5117354,-44.1549772,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e97f13c9ee621:0x690ae9d26c4c1ff0!2m2!1d-44.1091014!2d-22.4868257!1m5!1m1!1s0x9e991db3aca30f:0x55408e49ac7d6ac0!2m2!1d-44.1355282!2d-22.5364843!3e3!5i5?entry=ttu"
}

function rota405() {
  window.location.href="https://www.google.com/maps/dir/Coqueiros,+Volta+Redonda+-+RJ/Vila+Elmira,+Volta+Redonda+-+RJ/@-22.5136702,-44.1549763,13z/am=t/data=!3m1!4b1!4m15!4m14!1m5!1m1!1s0x9e97f6e25127db:0x2494af2f732bd711!2m2!1d-44.1085074!2d-22.4911611!1m5!1m1!1s0x9e991db3aca30f:0x55408e49ac7d6ac0!2m2!1d-44.1355282!2d-22.5364843!3e3!5i2?entry=ttu"
}

function rota415() {
  window.location.href="https://www.google.com/maps/dir/Belo+Horizonte,+Volta+Redonda+-+RJ/Conforto,+Volta+Redonda+-+RJ/@-22.5068191,-44.1486826,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9e97887abd759b:0xf89435e4f41f1bca!2m2!1d-44.1214636!2d-22.4906427!1m5!1m1!1s0x9e9859399ed6df:0xe3ffb3a043d509a1!2m2!1d-44.1215743!2d-22.5232751!3e3?entry=ttu"
}

function rota420() {
  window.location.href="https://www.google.com/maps/dir/Tr%C3%AAs+Po%C3%A7os,+Volta+Redonda+-+RJ/Vila+Bras%C3%ADlia,+Volta+Redonda+-+RJ/@-22.5004162,-44.1062051,14z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ebce7f6727aad:0xeefb346542898c7d!2m2!1d-44.0603668!2d-22.4952429!1m5!1m1!1s0x9e97f13c9ee621:0x690ae9d26c4c1ff0!2m2!1d-44.1091014!2d-22.4868257!3e3!5i4?entry=ttu"
}

function rota450() {
  window.location.href="https://www.google.com/maps/dir/Nova+Esperan%C3%A7a,+Volta+Redonda+-+RJ,+27278-515/Jardim+Amalia,+Volta+Redonda+-+RJ/@-22.5029533,-44.1407703,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e9789657ec2c7:0x3cb3023fd092f262!2m2!1d-44.1203723!2d-22.48814!1m5!1m1!1s0x9ea2c7688e34ef:0x29ed3207d6264dfb!2m2!1d-44.0782023!2d-22.5092167!3e3!5i1?entry=ttu"
}

function rota455() {
  window.location.href="https://www.google.com/maps/dir/R.+do+Mutir%C3%A3o+-+Vila+Bras%C3%ADlia,+Volta+Redonda+-+RJ/Terminal+Castelo+Branco,+Rod.+S%C3%A9rgio+Braga,+3005+-+Conforto,+Volta+Redonda+-+RJ,+27265-485/@-22.5064722,-44.1534199,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9e97f1e46a341f:0xeaa75a7bb543c52e!2m2!1d-44.1064863!2d-22.4868909!1m5!1m1!1s0x9e98fe2142f60f:0xedec057621a4ce7c!2m2!1d-44.1338002!2d-22.5276985!3e3!5i5?entry=ttu"
}

function rota515() {
  window.location.href="https://www.google.com/maps/dir/Funda%C3%A7%C3%A3o+Beatriz+Gama+-+Retiro,+Volta+Redonda+-+RJ/Av.+Santa+Rosa,+Volta+Redonda+-+RJ,+27273-650/@-22.5032035,-44.155023,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9e97f60f198481:0x403fa270f32c81f5!2m2!1d-44.1375415!2d-22.4779111!1m5!1m1!1s0x9e9906cc267e3b:0xe101ccc2d1ec3a5d!2m2!1d-44.1391846!2d-22.5257126!3e3?entry=ttu"
}

function rota545() {
  window.location.href="https://www.google.com/maps/dir/Siderl%C3%A2ndia,+Volta+Redonda+-+RJ/Pinheiral,+Rio+de+Janeiro/@-22.5090325,-44.1099461,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9e99a9fda42011:0x9d885eeef9d6b34e!2m2!1d-44.1376061!2d-22.519543!1m5!1m1!1s0x9ea4d279061cd7:0xd821a598c0160ed8!2m2!1d-43.9997614!2d-22.5173574!3e3?entry=ttu"
}

function rotaP195() {
  window.location.href="https://www.google.com/maps/dir/Academia+Proquality+Jd.+Am%C3%A1lia+II,+Rua+Crist%C3%B3v%C3%A3o+Colombo,+161+-+Jardim+Amalia,+Volta+Redonda+-+RJ,+27251-025/Rodovi%C3%A1ria+de+Barra+Mansa+-+Avenida+Joaquim+Leite+-+Centro,+Barra+Mansa+-+RJ/@-22.5277736,-44.1647401,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ea2b56d255555:0x5987efd1564940f7!2m2!1d-44.0781801!2d-22.5074121!1m5!1m1!1s0x9e9bf107204ce7:0x432d70542687ed5e!2m2!1d-44.168736!2d-22.545987!3e3!5i1?entry=ttu"
}

function rotaP200() {
  window.location.href="https://www.google.com/maps/dir/Aterrado,+Volta+Redonda+-+RJ/Supermercado+Beira+Rio,+Av.+Argemiro+de+Paula+Coutinho,+40+-+Centro,+Barra+Mansa+-+RJ,+27310-020/@-22.5213842,-44.1729502,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ea2ae7538264b:0x1097ad631b356b1b!2m2!1d-44.0900889!2d-22.507507!1m5!1m1!1s0x9e994f2af56f2d:0x8d71d6ca8736504d!2m2!1d-44.1696676!2d-22.5444072!3e3!5i4?entry=ttu"
}

function rotaP207() {
  window.location.href="https://www.google.com/maps/dir/Academia+Proquality+Jd.+Am%C3%A1lia+II,+Rua+Crist%C3%B3v%C3%A3o+Colombo,+161+-+Jardim+Amalia,+Volta+Redonda+-+RJ,+27251-025/Supermercado+Beira+Rio,+Av.+Argemiro+de+Paula+Coutinho,+40+-+Centro,+Barra+Mansa+-+RJ,+27310-020/@-22.5277736,-44.1678849,13z/am=t/data=!4m15!4m14!1m5!1m1!1s0x9ea2b56d255555:0x5987efd1564940f7!2m2!1d-44.0781801!2d-22.5074121!1m5!1m1!1s0x9e994f2af56f2d:0x8d71d6ca8736504d!2m2!1d-44.1696676!2d-22.5444072!3e3!5i5?entry=ttu"
}


function rota720() {
  window.location.href="https://www.google.com/maps/dir/Olaria+S%C3%A3o+Sebasti%C3%A3o,+Rod.+Min.+L%C3%BAcio+Meira,+BR+393,+km+280+Distrito+da+-+Calif%C3%B3rnia,+Barra+do+Pira%C3%AD+-+RJ,+27163-000/Vila+Bras%C3%ADlia,+Volta+Redonda+-+RJ/@-22.493151,-44.1243395,13z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9ea2b146453687:0x18f50e8e23ec4ef!2m2!1d-44.052223!2d-22.471053!1m5!1m1!1s0x9e97f13c9ee621:0x690ae9d26c4c1ff0!2m2!1d-44.1091014!2d-22.4868257!3e3?entry=ttu"
}

function rotaP730() {
  window.location.href="https://www.google.com/maps/dir/Santo+Agostinho,+Volta+Redonda+-+RJ/Vila+Maria,+Barra+Mansa+-+RJ/@-22.5191974,-44.215088,12z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9ebd3f8d5f8131:0x6ad8b6aa95983834!2m2!1d-44.0805798!2d-22.4895076!1m5!1m1!1s0x9e9bbb317f5afb:0x86f1d2767bad612b!2m2!1d-44.199308!2d-22.5124974!3e3?entry=ttu"
}

function rota735() {
  window.location.href="https://www.google.com/maps/dir/Academia+Proquality+Jd.+Am%C3%A1lia+II,+Rua+Crist%C3%B3v%C3%A3o+Colombo,+161+-+Jardim+Amalia,+Volta+Redonda+-+RJ,+27251-025/Santa+Clara,+Barra+Mansa+-+RJ/@-22.5470989,-44.2117573,12z/am=t/data=!4m14!4m13!1m5!1m1!1s0x9ea2b56d255555:0x5987efd1564940f7!2m2!1d-44.0781801!2d-22.5074121!1m5!1m1!1s0x9e9c29d10dac9b:0xbc39712c62cc802b!2m2!1d-44.1693276!2d-22.5831848!3e3?entry=ttu"
}

