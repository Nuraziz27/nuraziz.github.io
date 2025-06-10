var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriSatelit_1 = new ol.layer.Tile({
            'title': 'Esri Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Googlemap_2 = new ol.layer.Tile({
            'title': 'Google map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Administrasi_Desa_4 = new ol.format.GeoJSON();
var features_Administrasi_Desa_4 = format_Administrasi_Desa_4.readFeatures(json_Administrasi_Desa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Desa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Desa_4.addFeatures(features_Administrasi_Desa_4);
var lyr_Administrasi_Desa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_Desa_4, 
                style: style_Administrasi_Desa_4,
                popuplayertitle: 'Administrasi_Desa',
                interactive: true,
                title: '<img src="styles/legend/Administrasi_Desa_4.png" /> Administrasi_Desa'
            });
var format_Batas_Kabupaten_5 = new ol.format.GeoJSON();
var features_Batas_Kabupaten_5 = format_Batas_Kabupaten_5.readFeatures(json_Batas_Kabupaten_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kabupaten_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kabupaten_5.addFeatures(features_Batas_Kabupaten_5);
var lyr_Batas_Kabupaten_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kabupaten_5, 
                style: style_Batas_Kabupaten_5,
                popuplayertitle: 'Batas_Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/Batas_Kabupaten_5.png" /> Batas_Kabupaten'
            });
var format_Batas_Kecamatan_6 = new ol.format.GeoJSON();
var features_Batas_Kecamatan_6 = format_Batas_Kecamatan_6.readFeatures(json_Batas_Kecamatan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kecamatan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan_6.addFeatures(features_Batas_Kecamatan_6);
var lyr_Batas_Kecamatan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kecamatan_6, 
                style: style_Batas_Kecamatan_6,
                popuplayertitle: 'Batas_Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/Batas_Kecamatan_6.png" /> Batas_Kecamatan'
            });
var format_Batas_Desa_7 = new ol.format.GeoJSON();
var features_Batas_Desa_7 = format_Batas_Desa_7.readFeatures(json_Batas_Desa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Desa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Desa_7.addFeatures(features_Batas_Desa_7);
var lyr_Batas_Desa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Desa_7, 
                style: style_Batas_Desa_7,
                popuplayertitle: 'Batas_Desa',
                interactive: true,
                title: '<img src="styles/legend/Batas_Desa_7.png" /> Batas_Desa'
            });
var format_BidangTanah_8 = new ol.format.GeoJSON();
var features_BidangTanah_8 = format_BidangTanah_8.readFeatures(json_BidangTanah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BidangTanah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BidangTanah_8.addFeatures(features_BidangTanah_8);
var lyr_BidangTanah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BidangTanah_8, 
                style: style_BidangTanah_8,
                popuplayertitle: 'Bidang Tanah',
                interactive: true,
    title: 'Bidang Tanah<br />\
    <img src="styles/legend/BidangTanah_8_0.png" /> Hak Milik<br />\
    <img src="styles/legend/BidangTanah_8_1.png" /> Hak Pakai<br />\
    <img src="styles/legend/BidangTanah_8_2.png" /> Kosong<br />\
    <img src="styles/legend/BidangTanah_8_3.png" /> <br />' });
var format_ZonaLindung_9 = new ol.format.GeoJSON();
var features_ZonaLindung_9 = format_ZonaLindung_9.readFeatures(json_ZonaLindung_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaLindung_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaLindung_9.addFeatures(features_ZonaLindung_9);
var lyr_ZonaLindung_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaLindung_9, 
                style: style_ZonaLindung_9,
                popuplayertitle: 'Zona Lindung',
                interactive: true,
                title: '<img src="styles/legend/ZonaLindung_9.png" /> Zona Lindung'
            });
var format_JaringanJalanBuff_10 = new ol.format.GeoJSON();
var features_JaringanJalanBuff_10 = format_JaringanJalanBuff_10.readFeatures(json_JaringanJalanBuff_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanBuff_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanBuff_10.addFeatures(features_JaringanJalanBuff_10);
var lyr_JaringanJalanBuff_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanBuff_10, 
                style: style_JaringanJalanBuff_10,
                popuplayertitle: 'Jaringan Jalan Buff',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalanBuff_10.png" /> Jaringan Jalan Buff'
            });

lyr_ESRITopo_0.setVisible(true);lyr_EsriSatelit_1.setVisible(true);lyr_Googlemap_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_Administrasi_Desa_4.setVisible(true);lyr_Batas_Kabupaten_5.setVisible(true);lyr_Batas_Kecamatan_6.setVisible(true);lyr_Batas_Desa_7.setVisible(true);lyr_BidangTanah_8.setVisible(true);lyr_ZonaLindung_9.setVisible(true);lyr_JaringanJalanBuff_10.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_EsriSatelit_1,lyr_Googlemap_2,lyr_OpenStreetMap_3,lyr_Administrasi_Desa_4,lyr_Batas_Kabupaten_5,lyr_Batas_Kecamatan_6,lyr_Batas_Desa_7,lyr_BidangTanah_8,lyr_ZonaLindung_9,lyr_JaringanJalanBuff_10];
lyr_Administrasi_Desa_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Batas_Kabupaten_5.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_Batas_Kecamatan_6.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_Batas_Desa_7.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_BidangTanah_8.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'FID_Bidang': 'FID_Bidang', 'KELURAHAN': 'KELURAHAN', 'KECAMATA_1': 'KECAMATA_1', 'PL_CITRA': 'PL_CITRA', 'KLASPL': 'KLASPL', 'SARPRAS': 'SARPRAS', 'RT': 'RT', 'RW': 'RW', 'DUSUN': 'DUSUN', 'KABUPATE_1': 'KABUPATE_1', 'KETERANGAN': 'KETERANGAN', 'STATUS': 'STATUS', 'SERTIPIKAT': 'SERTIPIKAT', 'TIPE_HAK': 'TIPE_HAK', });
lyr_ZonaLindung_9.set('fieldAliases', {'FID_Pola_R': 'FID_Pola_R', 'OBJECTID': 'OBJECTID', 'FID_pola_1': 'FID_pola_1', 'Jenisss_1': 'Jenisss_1', 'Temaaa_1': 'Temaaa_1', 'Pola_Rua_1': 'Pola_Rua_1', 'Luas': 'Luas', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Zona': 'Zona', 'FID_Admini': 'FID_Admini', 'OBJECTID_1': 'OBJECTID_1', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_JaringanJalanBuff_10.set('fieldAliases', {'FID_Admini': 'FID_Admini', 'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_Jaring': 'FID_Jaring', 'JENIS': 'JENIS', 'FUNGSI': 'FUNGSI', 'NAMA': 'NAMA', 'SUMBER_1': 'SUMBER_1', 'lbr_jln': 'lbr_jln', 'jari_jari': 'jari_jari', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_Administrasi_Desa_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Batas_Kabupaten_5.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_Batas_Kecamatan_6.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_Batas_Desa_7.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_BidangTanah_8.set('fieldImages', {'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'FID_Bidang': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KECAMATA_1': 'TextEdit', 'PL_CITRA': 'TextEdit', 'KLASPL': 'TextEdit', 'SARPRAS': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'DUSUN': 'TextEdit', 'KABUPATE_1': 'TextEdit', 'KETERANGAN': 'TextEdit', 'STATUS': 'TextEdit', 'SERTIPIKAT': 'TextEdit', 'TIPE_HAK': 'TextEdit', });
lyr_ZonaLindung_9.set('fieldImages', {'FID_Pola_R': 'TextEdit', 'OBJECTID': 'TextEdit', 'FID_pola_1': 'TextEdit', 'Jenisss_1': 'TextEdit', 'Temaaa_1': 'TextEdit', 'Pola_Rua_1': 'TextEdit', 'Luas': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Zona': 'TextEdit', 'FID_Admini': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', });
lyr_JaringanJalanBuff_10.set('fieldImages', {'FID_Admini': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'FID_Jaring': 'TextEdit', 'JENIS': 'TextEdit', 'FUNGSI': 'TextEdit', 'NAMA': 'TextEdit', 'SUMBER_1': 'TextEdit', 'lbr_jln': 'TextEdit', 'jari_jari': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Administrasi_Desa_4.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Batas_Kabupaten_5.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_Batas_Kecamatan_6.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_Batas_Desa_7.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_BidangTanah_8.set('fieldLabels', {'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'FID_Bidang': 'no label', 'KELURAHAN': 'no label', 'KECAMATA_1': 'no label', 'PL_CITRA': 'no label', 'KLASPL': 'no label', 'SARPRAS': 'no label', 'RT': 'no label', 'RW': 'no label', 'DUSUN': 'no label', 'KABUPATE_1': 'no label', 'KETERANGAN': 'no label', 'STATUS': 'no label', 'SERTIPIKAT': 'inline label - visible with data', 'TIPE_HAK': 'no label', });
lyr_ZonaLindung_9.set('fieldLabels', {'FID_Pola_R': 'no label', 'OBJECTID': 'no label', 'FID_pola_1': 'no label', 'Jenisss_1': 'no label', 'Temaaa_1': 'no label', 'Pola_Rua_1': 'no label', 'Luas': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Zona': 'no label', 'FID_Admini': 'no label', 'OBJECTID_1': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', });
lyr_JaringanJalanBuff_10.set('fieldLabels', {'FID_Admini': 'no label', 'OBJECTID': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'FID_Jaring': 'no label', 'JENIS': 'no label', 'FUNGSI': 'no label', 'NAMA': 'no label', 'SUMBER_1': 'no label', 'lbr_jln': 'no label', 'jari_jari': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_JaringanJalanBuff_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});