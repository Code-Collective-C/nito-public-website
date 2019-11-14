function mapInitialize() {
    var latlng = new window.google.maps.LatLng(-24.398166, 25.359192);
    var myOptions = {
        zoom: 5,
        center: latlng,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
    };
    
    var map = new window.google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    //TFN Office
    var latlngTFN = new window.google.maps.LatLng(-26.086504, 28.239155);
    var markerTFN = new window.google.maps.Marker({
        position: latlngTFN,
        map: map,
        icon: "./Content/images/blue-dot.png",
        title: "TFN Head Office"
    });

    var infowindow = new window.google.maps.InfoWindow(
        {
            content: "<b>TFN Head Office</b><br />111 Monument Road<br />Nimrod Park<br />Kempton Park<br />011 394 4199"
        });

    window.google.maps.event.addListener(markerTFN, 'click', function () {
        infowindow.open(map, markerTFN);
        map.setCenter(latlngTFN);
        map.setZoom(15);
    });


    //Arcy Diesel
    var latlngArcy = new window.google.maps.LatLng(-28.773465, 24.763695);
    var markerArcy = new window.google.maps.Marker({
        position: latlngArcy,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Arcy Diesel Depot"
    });

    var infowindowArcy = new window.google.maps.InfoWindow(
        {
            content: "<b>Arcy Diesel Depot</b><br/>1 Landbou Ave<br/> Kimberley<br/> 058 832-7111"
        });

    window.google.maps.event.addListener(markerArcy, 'click', function () {
        infowindowArcy.open(map, markerArcy);
        map.setCenter(latlngArcy);
        map.setZoom(15);
    });
    

    //B1 Oasis
    var latlngB1 = new window.google.maps.LatLng(-26.608409, 18.162643);
    var MarkerB1 = new window.google.maps.Marker({
        position: latlngBWTI,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "B1 Oasis"
    });

    var infowindowB1 = new window.google.maps.InfoWindow(
        {
            content: "<b>B1 Oasis</b><br/> Stand 76, B1 National Rd<br/> Keetmanshoop, Namibia<br/> 00264 63224747"
        });

    window.google.maps.event.addListener(MarkerB1, 'click', function () {
        infowindowB1.open(map, MarkerB1);
        map.setCenter(latlngB1);
        map.setZoom(15);
    });


    //Beaufort West Truck Inn
    var latlngBWTI = new window.google.maps.LatLng(-32.361295, 22.557582);
    var MarkerBWTI = new window.google.maps.Marker({
        position: latlngBWTI,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Beaufort West Truck Inn"
    });

    var infowindowBWTI = new window.google.maps.InfoWindow(
        {
            content: "<b>Beaufort West Truck Inn</b><br/> Fabriek Street<br/> Beaufort Industria<br/> 023 414-2129"
        });

    window.google.maps.event.addListener(MarkerBWTI, 'click', function () {
        infowindowBWTI.open(map, MarkerBWTI);
        map.setCenter(latlngBWTI);
        map.setZoom(15);
    });
    
    //Bethlehem
    var latlngB = new window.google.maps.LatLng(-28.222099, 28.306792);
    var MarkerB = new window.google.maps.Marker({
        position: latlngB,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Bethlehem"
    });

    var infowindowB = new window.google.maps.InfoWindow(
        {
            content: "<b>Bethlehem</b><br/> Adolf de Jongh 19<br/> Bethlehem<br/> 058 303 7928"
        });

    window.google.maps.event.addListener(MarkerB, 'click', function () {
        infowindowB.open(map, MarkerBWTI);
        map.setCenter(latlngB);
        map.setZoom(15);
    });

    //Bloem Plaza Truckstop
    var latlngBPT = new window.google.maps.LatLng(-28.997912, 26.269137);
    var markerBpt = new window.google.maps.Marker({
        position: latlngBPT,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Bloem Plaza Truckstop"
    });

    var infowindowBPT = new window.google.maps.InfoWindow(
        {
            content: "<b>Bloem Plaza Truckstop</b><br/> No 7 Avenham<br/> Avenham Offramp N1 <br/> Bloemfontein<br/> 051 433-3227"
        });

    window.google.maps.event.addListener(markerBpt, 'click', function () {
        infowindowBPT.open(map, markerBpt);
        map.setCenter(latlngBPT);
        map.setZoom(15);
    });

    //Blueline
    var latlngIDP = new window.google.maps.LatLng(-33.888096, 25.613841);
    var MarkerIDP = new window.google.maps.Marker({
        position: latlngIDP,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Blueline (Ibhayi Diesel Power)"
    });

    var infowindowIDP = new window.google.maps.InfoWindow(
        {
            content: "<b>Blueline (Ibhayi Diesel Power)</b><br/> 5 Murdoch Street<br/> Deal Party <br/> Port Elizabeth <br/> 041 486-1527"
        });

    window.google.maps.event.addListener(MarkerIDP, 'click', function () {
        infowindowIDP.open(map, MarkerIDP);
        map.setCenter(latlngIDP);
        map.setZoom(15);
    });
    

    //Bosveld Diesel
    var latlngBD = new window.google.maps.LatLng(-24.875971, 28.314565);
    var MarkerBD = new window.google.maps.Marker({
        position: latlngBD,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Bosveld Diesel"
    });

    var infowindowBD = new window.google.maps.InfoWindow(
        {
            content: "<b>Bosveld Diesel</b><br/> R101, Plot 43<br/> Buiskop  <br/> Bela Bela <br/> 014 740 0094"
        });

    window.google.maps.event.addListener(MarkerBD, 'click', function () {
        infowindowBD.open(map, MarkerBD);
        map.setCenter(latlngBD);
        map.setZoom(15);
    });


    //BP Atlantic George
    var latlngBPA = new window.google.maps.LatLng(-33.989283, 22.44516);
    var MarkerBPA = new window.google.maps.Marker({
        position: latlngBPA,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "BP Atlantic George"
    });

    var infowindowBPA = new window.google.maps.InfoWindow(
        {
            content: "<b>BP Atlantic George</b><br/> cnr Pearl & Saphire Street<br/> Tamsui Industria <br/> 044 878-2774"
        });

    window.google.maps.event.addListener(MarkerBPA, 'click', function () {
        infowindowBPA.open(map, MarkerBPA);
        map.setCenter(latlngBPA);
        map.setZoom(15);
    });

    //BP Atlantic, Moorreesburg
    var latlngBPAM = new window.google.maps.LatLng(-33.148984, 18.666671);
    var MarkerBPAM = new window.google.maps.Marker({
        position: latlngBPAM,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "BP Atlantic, Moorreesburg"
    });

    var infowindowBPAM = new window.google.maps.InfoWindow(
        {
            content: "<b>BP Atlantic, Moorreesburg</b><br/> 70 Rivier Street<br/> Moorreesburg <br/> 022 433-4358"
        });

    window.google.maps.event.addListener(MarkerBPAM, 'click', function () {
        infowindowBPAM.open(map, MarkerBPAM);
        map.setCenter(latlngBPAM);
        map.setZoom(15);
    });

    //Burgersfort PPS
    var latlngBPPS = new window.google.maps.LatLng(-24.662784, 30.307583);
    var MarkerBPPS = new window.google.maps.Marker({
        position: latlngBPPS,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Burgersfort PPS"
    });

    var infowindowBPPS = new window.google.maps.InfoWindow(
        {
            content: "<b>Cnr R37 and R555</b><br/> Burgersfort<br/> 013 231 7866"
        });

    window.google.maps.event.addListener(MarkerBPPS, 'click', function () {
        infowindowBPPS.open(map, MarkerBPPS);
        map.setCenter(latlngBPPS);
        map.setZoom(15);
    });

    //Cato Ridge Truck Stop
   var latlngCRTS = new window.google.maps.LatLng(-29.733955, 30.586812);
    var markerCRTS = new window.google.maps.Marker({
        position: latlngCRTS,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Cato Ridge Truck Stop"
    });

    var infowindowCRTS = new window.google.maps.InfoWindow(
        {
            content: "<b>Cato Ridge Truck Stop</b><br/> Doornrug Drive<br/> Cato Ridge<br/> 031 782-1027"
        });

    window.google.maps.event.addListener(markerCRTS, 'click', function () {
        infowindowCRTS.open(map, markerCRTS);
        map.setCenter(latlngCRTS);
        map.setZoom(15);
    });
    
    //CCOV
    var latlngCCOV = new window.google.maps.LatLng(-25.96323, 29.262262);
    var markerCCOV = new window.google.maps.Marker({
        position: latlngCCOV,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "CCOV"
    });

    var infowindowCCOV = new window.google.maps.InfoWindow(
        {
            content: "<b>CCOV</b><br/> Plot 78, Watermeyer straat<br/> Naauwpoort<br/> 083 501 6409"
        });

    window.google.maps.event.addListener(markerCCOV, 'click', function () {
        infowindowCCOV.open(map, markerCCOV);
        map.setCenter(latlngCCOV);
        map.setZoom(15);
    });
    
    //Chirundu
    var latlngCR = new window.google.maps.LatLng(-16.023628, 28.53431);
    var markerCR = new window.google.maps.Marker({
        position: latlngCR,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Chirundu"
    });

    var infowindowCR = new window.google.maps.InfoWindow(
        {
            content: "<b>Chirundu</b><br/> Stand No 1317<br/> 347Km Peg<br/> Chirundu rd<br/> 00263 (77) 2436644"
        });

    window.google.maps.event.addListener(markerCR, 'click', function () {
        infowindowCR.open(map, markerCR);
        map.setCenter(latlngCR);
        map.setZoom(15);
    });

    //Cool ideas
    var latlngCITS = new window.google.maps.LatLng(-25.841284, 29.459238);
    var markerCITS = new window.google.maps.Marker({
        position: latlngCITS,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Cool Ideas Truck Stop"
    });

    var infowindowCITS = new window.google.maps.InfoWindow(
        {
            content: "<b>Cool Ideas Truck Stop</b><br/> Plot 17, Vaalbank<br/> Fontein Street <br/> Middelburg <br/> 083 788-0031"
        });

    window.google.maps.event.addListener(markerCITS, 'click', function () {
        infowindowCITS.open(map, markerCITS);
        map.setCenter(latlngCITS);
        map.setZoom(15);
    });


    //Dawella Auto
    var latlngDA = new window.google.maps.LatLng(-29.644187, 17.886524);
    var markerDA = new window.google.maps.Marker({
        position: latlngDA,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Dawella Auto"
    });

    var infowindowDA = new window.google.maps.InfoWindow(
        {
            content: "<b>Dawella Auto</b><br/> Inry Street, Industrial Area<br/> Springbok <br/> 027 712-2151"
        });

    window.google.maps.event.addListener(markerDA, 'click', function () {
        infowindowDA.open(map, markerDA);
        map.setCenter(latlngDA);
        map.setZoom(15);
    });

    var latlngDHR = new window.google.maps.LatLng(-26.89873, 26.66225);
    var markerDHR = new window.google.maps.Marker({
        position: latlngDHR,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "DHR Services"
    });

    var infowindowDHR = new window.google.maps.InfoWindow(
        {
            content: "<b>DHR Services</b><br/> 1A Mahogany Street<br/> Klerkindustria <br/> 018 462-1387"
        });

    window.google.maps.event.addListener(markerDHR, 'click', function () {
        infowindowDHR.open(map, markerDHR);
        map.setCenter(latlngDHR);
        map.setZoom(15);
    });

    var latlngDFAK = new window.google.maps.LatLng(-33.837574, 18.732344);
    var markerDFAK = new window.google.maps.Marker({
        position: latlngDFAK,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Diesel for Africa - Kraaifontein"
    });

    var infowindowDFAK = new window.google.maps.InfoWindow(
        {
            content: "<b>Diesel for Africa - Kraaifontein</b><br/> Acacia Road<br/> Kraaifontein Industrial <br/> 021 988-4111"
        });

    window.google.maps.event.addListener(markerDFAK, 'click', function () {
        infowindowDFAK.open(map, markerDFAK);
        map.setCenter(latlngDFAK);
        map.setZoom(15);
    });

    var latlngFAB = new window.google.maps.LatLng(-28.177836, 23.552595);
    var markerFAB = new window.google.maps.Marker({
        position: latlngFAB,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Faber motors"
    });

    var infowindowFAB = new window.google.maps.InfoWindow(
        {
            content: "<b>Faber motors</b><br/> Rhodes straat <br/> Danielskuil <br/> 053 384-0897"
        });

    window.google.maps.event.addListener(markerFAB, 'click', function () {
        infowindowFAB.open(map, markerFAB);
        map.setCenter(latlngFAB);
        map.setZoom(15);
    });

    var latlngGWP = new window.google.maps.LatLng(-29.82189, 30.812573);
    var markerGWP = new window.google.maps.Marker({
        position: latlngGWP,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Goodwood Pitstop"
    });

    var infowindowGWP = new window.google.maps.InfoWindow(
        {
            content: "<b>Goodwood Pitstop</b><br/> 95-97 Goodwood Road<br/> Mahogany Ridge <br/> Industrial Park <br/> 031 700-2349"
        });

    window.google.maps.event.addListener(markerGWP, 'click', function () {
        infowindowGWP.open(map, markerGWP);
        map.setCenter(latlngGWP);
        map.setZoom(15);
    });


    var latlngGTLP = new window.google.maps.LatLng(-24.695248, 28.411664);
    var markerGTLP = new window.google.maps.Marker({
        position: latlngGTLP,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "GTL Petroleum Nylstroom"
    });

    var infowindowGTLP = new window.google.maps.InfoWindow(
        {
            content: "<b>GTL Petroleum Nylstroom</b><br/> 99 Thabo Mbeki Street<br/> Modimolle <br/> 014 717-3310"
        });

    window.google.maps.event.addListener(markerGTLP, 'click', function () {
        infowindowGTLP.open(map, markerGTLP);
        map.setCenter(latlngGTLP);
        map.setZoom(15);
    });

    var latlngGTLW = new window.google.maps.LatLng(-26.258965, 28.183064);
    var markerGTLW = new window.google.maps.Marker({
        position: latlngGTLW,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "GTL Petroleum Wadeville"
    });

    var infowindowGTLW = new window.google.maps.InfoWindow(
        {
            content: "<b>GTL Petroleum Wadeville</b><br/> Cnr Bezuidenhout/Rossouw St <br/> Wadeville <br/> 011 824-3209"
        });

    window.google.maps.event.addListener(markerGTLW, 'click', function () {
        infowindowGTLW.open(map, markerGTLW);
        map.setCenter(latlngGTLW);
        map.setZoom(15);
    });
    
    //Harare
    var latlngHar = new window.google.maps.LatLng(-17.893338, 31.00568);
    var markerHar = new window.google.maps.Marker({
        position: latlngHar,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Harare"
    });

    var infowindowHar = new window.google.maps.InfoWindow(
        {
            content: "<b>Harare</b><br/> 8Km Peg <br/> Simon Mazarodze Drv <br/> Waterfalls <br/> Harare <br/> 00263 (04) 614162/7 "
        });

    window.google.maps.event.addListener(markerHar, 'click', function () {
        infowindowHar.open(map, markerHar);
        map.setCenter(latlngHar);
        map.setZoom(15);
    });

    //Highway junction
    var latlngHJ = new window.google.maps.LatLng(-28.28809, 29.13134);
    var markerHJ = new window.google.maps.Marker({
        position: latlngHJ,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Highway Junction"
    });

    var infowindowHJ = new window.google.maps.InfoWindow(
        {
            content: "<b>Highway Junction</b><br/> No 1 Industrial Road<br/> Harrismith <br/> 058 624-2000"
        });

    window.google.maps.event.addListener(markerHJ, 'click', function () {
        infowindowHJ.open(map, markerHJ);
        map.setCenter(latlngHJ);
        map.setZoom(15);
    });

    var latlngHMI = new window.google.maps.LatLng(-26.215042, 28.14621);
    var markerHMI = new window.google.maps.Marker({
        position: latlngHMI,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "HMI"
    });

    var infowindowHMI = new window.google.maps.InfoWindow(
        {
            content: "<b>HMI</b><br/> 1 Stani Properties, Sharland st, Driehoek <br/> Germistom <br/> 011 873 8374"
        });

    window.google.maps.event.addListener(markerHMI, 'click', function () {
        infowindowHMI.open(map, markerHMI);
        map.setCenter(latlngHMI);
        map.setZoom(15);
    });


    var latlngKD = new window.google.maps.LatLng(-28.434614, 21.226891);
    var markerKD = new window.google.maps.Marker({
        position: latlngKD,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Kalahari diesel"
    });

    var infowindowKD = new window.google.maps.InfoWindow(
        {
            content: "<b>Kalahari diesel</b><br/> 38 Karakoel St, Updustria<br/> Upington <br/> 054 331-3544"
        });

    window.google.maps.event.addListener(markerKD, 'click', function () {
        infowindowKD.open(map, markerKD);
        map.setCenter(latlngKD);
        map.setZoom(15);
    });

    var latlngLL = new window.google.maps.LatLng(-25.464613, 30.974169);
    var markerLL = new window.google.maps.Marker({
        position: latlngLL,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Lebombo Lubs"
    });

    var infowindowLL = new window.google.maps.InfoWindow(
        {
            content: "<b>Lebombo Lubs</b><br/> Spoornet Area<br/> Bosch Street, Nelspruit <br/> 013 752-2002"
        });

    window.google.maps.event.addListener(markerLL, 'click', function () {
        infowindowLL.open(map, markerLL);
        map.setCenter(latlngLL);
        map.setZoom(15);
    });

    var latlngMDAI = new window.google.maps.LatLng(-33.972282, 18.579581);
    var markerMDAI = new window.google.maps.Marker({
        position: latlngMDAI,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Manhattan Diesel Airport Industria"
    });

    var infowindowMDAI = new window.google.maps.InfoWindow(
        {
            content: "<b>Manhattan Diesel Airport Industria</b><br/> 50 Manhattan Street<br/> Airport Industria<br/> 021 385-0817"
        });

    window.google.maps.event.addListener(markerMDAI, 'click', function () {
        infowindowMDAI.open(map, markerMDAI);
        map.setCenter(latlngMDAI);
        map.setZoom(15);
    });

    var latlngBDPI = new window.google.maps.LatLng(-33.930213, 18.606302);
    var markerBDPI = new window.google.maps.Marker({
        position: latlngBDPI,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Manhattan Diesel Parow Industria"
    });

    var infowindowBDPI = new window.google.maps.InfoWindow(
        {
            content: "<b>Manhattan Diesel Parow Indust</b><br/> Cnr Stellenberg & Tekstiel St <br/> Parow Industria <br/> 021 933-5775"
        });

    window.google.maps.event.addListener(markerBDPI, 'click', function () {
        infowindowBDPI.open(map, markerBDPI);
        map.setCenter(latlngBDPI);
        map.setZoom(15);
    });

    var latlngMollies = new window.google.maps.LatLng(-30.586987, 23.506342);
    var markerMollies = new window.google.maps.Marker({
        position: latlngMollies,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Mollies Vulstasie"
    });

    var infowindowMollies = new window.google.maps.InfoWindow(
        {
            content: "<b>Mollies Vulstasie</b><br/> Cnr Mark st & Komitee st <br/> Britstown <br/> 083 441 8162"
        });

    window.google.maps.event.addListener(markerMollies, 'click', function () {
        infowindowMollies.open(map, markerMollies);
        map.setCenter(latlngMollies);
        map.setZoom(15);
    });

    var latlngMosh = new window.google.maps.LatLng(-33.921308, 18.630783);
    var markerMosh = new window.google.maps.Marker({
        position: latlngMosh,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Mosh diesel"
    });

    var infowindowMosh = new window.google.maps.InfoWindow(
        {
            content: "<b>Mosh diesel depot</b><br/> Propnet Industrial Park, Modderdam <br/> Bellville South <br/> 021 948-0753"
        });

    window.google.maps.event.addListener(markerMosh, 'click', function () {
        infowindowMosh.open(map, markerMosh);
        map.setCenter(latlngMosh);
        map.setZoom(15);
    });

    var latlngNC = new window.google.maps.LatLng(-27.707182, 29.967399);
    var markerNC = new window.google.maps.Marker({
        position: latlngNC,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "NC Fuels"
    });

    var infowindowNC = new window.google.maps.InfoWindow(
        {
            content: "<b>NC Fuels</b><br/> Cnr Allen no. 8 <br/> Old Volksrus Rd <br> Newcastle <br/> 082 837-5860"
        });

    window.google.maps.event.addListener(markerNC, 'click', function () {
        infowindowNC.open(map, markerNC);
        map.setCenter(latlngNC);
        map.setZoom(15);
    });


    var latlngNexor = new window.google.maps.LatLng(-26.52997, 25.81268);
    var markerNexor = new window.google.maps.Marker({
        position: latlngNexor,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Nexor petroleum"
    });

    var infowindowNexor = new window.google.maps.InfoWindow(
        {
            content: "<b>Nexor petroleum</b><br/> 4 Koos De La Rey street <br/> Sannieshof <br/> 018 683-0699"
        });

    window.google.maps.event.addListener(markerNexor, 'click', function () {
        infowindowNexor.open(map, markerNexor);
        map.setCenter(latlngNexor);
        map.setZoom(15);
    });

    var latlngOR = new window.google.maps.LatLng(-28.768261, 31.914983);
    var markerOR = new window.google.maps.Marker({
        position: latlngOR,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Oilco Retail"
    });

    var infowindowOR = new window.google.maps.InfoWindow(
        {
            content: "<b>Oilco Retail</b><br/> 2 Oilco Lane<br/> Empangeni<br/> 035 792-4900"
        });

    window.google.maps.event.addListener(markerOR, 'click', function () {
        infowindowOR.open(map, markerOR);
        map.setCenter(latlngOR);
        map.setZoom(15);
    });

    var latlngOU = new window.google.maps.LatLng(-29.887458, 30.985801);
    var markerOU = new window.google.maps.Marker({
        position: latlngOU,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Oilco Umbilo"
    });

    var infowindowOU = new window.google.maps.InfoWindow(
        {
            content: "<b>Oilco Umbilo</b><br/> 46 Watford Road<br/> Umbilo <br/> 031 205-2044"
        });

    window.google.maps.event.addListener(markerOU, 'click', function () {
        infowindowOU.open(map, markerOU);
        map.setCenter(latlngOU);
        map.setZoom(15);
    });


    var latlngPomona = new window.google.maps.LatLng(-26.100077, 28.262596);
    var markerPomona = new window.google.maps.Marker({
        position: latlngPomona,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Pomona Truck Stop"
    });

    var infowindowPomona = new window.google.maps.InfoWindow(
        {
            content: "<b>Pomona Truck Stop</b><br/> cnr Constantia & Maple St, Pomona<br/> Kempton Park <br/> 011 979-1376"
        });

    window.google.maps.event.addListener(markerPomona, 'click', function () {
        infowindowPomona.open(map, markerPomona);
        map.setCenter(latlngPomona);
        map.setZoom(15);
    });

    var latlngPOD = new window.google.maps.LatLng(-27.36672, 31.61507);
    var markerPOD = new window.google.maps.Marker({
        position: latlngPOD,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Pongola Oil Distributors"
    });

    var infowindowPOD = new window.google.maps.InfoWindow(
        {
            content: "<b>Pongola Oil Distributors</b><br/> 32 De Waal Street<br/> Pongola <br/> 034 413-1546"
        });

    window.google.maps.event.addListener(markerPOD, 'click', function () {
        infowindowPOD.open(map, markerPOD);
        map.setCenter(latlngPOD);
        map.setZoom(15);
    });

    var latlngRCT = new window.google.maps.LatLng(-32.96653, 27.89849);
    var markerRCT = new window.google.maps.Marker({
        position: latlngRCT,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Ropax Casino Truckstop"
    });

    var infowindowRCT = new window.google.maps.InfoWindow(
        {
            content: "<b>Ropax Casino Truckstop</b><br/> Western Avenue Offramp from N2<br/> East London<br/> 043 700-4377"
        });

    window.google.maps.event.addListener(markerRCT, 'click', function () {
        infowindowRCT.open(map, markerRCT);
        map.setCenter(latlngRCT);
        map.setZoom(15);
    });

    var latlngSOT = new window.google.maps.LatLng(-31.90518, 26.87837);
    var markerSOT = new window.google.maps.Marker({
        position: latlngSOT,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Signal Oils Truckstop"
    });

    var infowindowSOT = new window.google.maps.InfoWindow(
        {
            content: "<b>Signal Oils Truckstop</b><br/> 7 Dickerson Street<br/> Queenstown<br/> 045 838-1158"
        });

    window.google.maps.event.addListener(markerSOT, 'click', function () {
        infowindowSOT.open(map, markerSOT);
        map.setCenter(latlngSOT);
        map.setZoom(15);
    });

    var latlngST = new window.google.maps.LatLng(-32.163619, 25.606638);
    var markerST = new window.google.maps.Marker({
        position: latlngST,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Status Toyota"
    });

    var infowindowST = new window.google.maps.InfoWindow(
        {
            content: "<b>Status Toyota</b><br/> Middelburg rd, Oukop(N10) <br/> Cradock<br/> 048 881 1436"
        });

    window.google.maps.event.addListener(markerST, 'click', function () {
        infowindowST.open(map, markerST);
        map.setCenter(latlngST);
        map.setZoom(15);
    });

    var latlngTGF = new window.google.maps.LatLng(-31.60486, 28.77924);
    var markerTGF = new window.google.maps.Marker({
        position: latlngTGF,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Tembuland Gas Fuels"
    });

    var infowindowTGF = new window.google.maps.InfoWindow(
        {
            content: "<b>Tembuland Gas Fuels</b><br/> 11 Timber Street<br/> Vulindlela Heights <br/> Mthata <br/> 047 531-2498"
        });

    window.google.maps.event.addListener(markerTGF, 'click', function () {
        infowindowTGF.open(map, markerTGF);
        map.setCenter(latlngTGF);
        map.setZoom(15);
    });

    var latlngTFNM = new window.google.maps.LatLng(-22.35742, 30.03104);
    var markerTFNM = new window.google.maps.Marker({
        position: latlngTFNM,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "TFN Musina"
    });

    var infowindowTFNM = new window.google.maps.InfoWindow(
        {
            content: "<b>TFN Musina</b><br/> Pat Harrison Street<br/> Musina (old Engen site) <br/> 084 583-1898"
        });

    window.google.maps.event.addListener(markerTFNM, 'click', function () {
        infowindowTFNM.open(map, markerTFNM);
        map.setCenter(latlngTFNM);
        map.setZoom(15);
    });

    var latlngTF = new google.maps.LatLng(-29.570111, 31.12247);
    var markerTF = new window.google.maps.Marker({
        position: latlngTF,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Tongaat Fuel"
    });

    var infowindowTF = new window.google.maps.InfoWindow(
        {
            content: "<b>Tongaat Fuel</b><br/> 1 Old Mill Road<br/> Tongaat<br/> 032 944-3849"
        });

    window.google.maps.event.addListener(markerTF, 'click', function () {
        infowindowTF.open(map, markerTF);
        map.setCenter(latlngTF);
        map.setZoom(15);
    });

    var latlngTTI = new google.maps.LatLng(-33.554635, 18.323990);
    var markerTTI = new window.google.maps.Marker({
        position: latlngTTI,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Trawal Truck Inn"
    });

    var infowindowTTI = new window.google.maps.InfoWindow(
        {
            content: "<b> Trawal Truck Inn</b><br/> Klaver N7 National route<br/> Western cape <br/> 027 216 1555/1536"
        });

        window.google.maps.event.addListener(markerTTI, 'click', function () {
        infowindowTTI.open(map, markerTTI);
        map.setCenter(latlngTTI);
        map.setZoom(15);
    });
    

    var latlngTTS = new google.maps.LatLng(-26.19621, 28.27325);
    var markerTTS = new window.google.maps.Marker({
        position: latlngTTS,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Trojan Truck Systems"
    });

    var infowindowTTS = new window.google.maps.InfoWindow(
        {
            content: "<b>Trojan Truck Systems</b><br/> 25 Main Road<br/> Anderbolt <br/> Boksburg North <br/> 011 894-5431"
        });

    window.google.maps.event.addListener(markerTTS, 'click', function () {
        infowindowTTS.open(map, markerTTS);
        map.setCenter(latlngTTS);
        map.setZoom(15);
    });

    var latlngVPT = new google.maps.LatLng(-26.852283, 27.640454);
    var markerVPT = new window.google.maps.Marker({
        position: latlngVPT,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Vaal Plaza Truckstop"
    });

    var infowindowVPT = new window.google.maps.InfoWindow(
        {
            content: "<b>Vaal Plaza Truckstop</b><br/> Vaal Plaza<br/> 056 818 1243"
        });

    window.google.maps.event.addListener(markerVPT, 'click', function () {
        infowindowVPT.open(map, markerVPT);
        map.setCenter(latlngVPT);
        map.setZoom(15);
    });

    var latlngVTI = new google.maps.LatLng(-27.192202, 28.464717);
    var markerVTI = new window.google.maps.Marker({
        position: latlngVTI,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Vaal Truck Inn"
    });

    var infowindowVTI = new window.google.maps.InfoWindow(
        {
            content: "<b>Vaal Truck Inn</b><br/> Rietfontein <br/> Villiers offramp 5 on N3 <br/> 058 821 2001"
        });

    window.google.maps.event.addListener(markerVTI, 'click', function () {
        infowindowVTI.open(map, markerVTI);
        map.setCenter(latlngVTI);
        map.setZoom(15);
    });


    var latlngWOZ = new google.maps.LatLng(-26.539567, 30.001446);
    var markerWOZ = new window.google.maps.Marker({
        position: latlngWOZ,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Wozani Berg Gasoline "
    });

    var infowindowWOZ = new window.google.maps.InfoWindow(
        {
            content: "<b>Wozani Berg Gasoline</b><br/> 13-33 Saratoga st <br/> Ermelo <br/> 082 331 7059"
        });

    window.google.maps.event.addListener(markerWOZ, 'click', function () {
        infowindowWOZ.open(map, markerWOZ);
        map.setCenter(latlngWOZ);
        map.setZoom(15);
    });


    var latlngZTS = new window.google.maps.LatLng(-25.323365, 26.062452);
    var markerZTS = new window.google.maps.Marker({
        position: latlngZTS,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Zeerust Truck Stop"
    });

    var infowindowZTS = new window.google.maps.InfoWindow(
        {
            content: "<b>Zeerust Truck Stop</b><br/> 1 Diederik street <br/> Zeerust <br/> 018 642 5870"
        });

    window.google.maps.event.addListener(markerZTS, 'click', function () {
        infowindowZTS.open(map, markerZTS);
        map.setCenter(latlngZTS);
        map.setZoom(15);
    });

    var latlngMak = new window.google.maps.LatLng(-16.309464, 29.2460659);
    var markerMak = new window.google.maps.Marker({
        position: latlngMak,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Makuti"
    });

    var infowindowMak = new window.google.maps.InfoWindow(
        {
            content: "<b>Makuti</b><br/> Makuti Valley Lodge <br/> A1 Highway <br/> Makuti "
        });

    window.google.maps.event.addListener(markerMak, 'click', function () {
        infowindowMak.open(map, markerMak);
        map.setCenter(latlngMak);
        map.setZoom(15);
    });


    var latlngTS = new window.google.maps.LatLng(-25.497782, 31.990403);
    var markerTS = new window.google.maps.Marker({
        position: latlngTS,
        map: map,
        icon: "./Content/images/green-dot.png",
        title: "Mozambique Two Ships"
    });

    var infowindowTS = new window.google.maps.InfoWindow(
        {
            content: "<b>Mozambique Two Ships</b><br/> Km peg 5, EN4 <br/> Ressano Garcia <br/> Maputo <br/> +258 844-749873"
        });

    window.google.maps.event.addListener(markerTS, 'click', function () {
        infowindowTS.open(map, markerTS);
        map.setCenter(latlngTS);
        map.setZoom(15);
    });

}

