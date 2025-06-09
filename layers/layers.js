var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BidangTanah_1 = new ol.format.GeoJSON();
var features_BidangTanah_1 = format_BidangTanah_1.readFeatures(json_BidangTanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BidangTanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BidangTanah_1.addFeatures(features_BidangTanah_1);
var lyr_BidangTanah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BidangTanah_1, 
                style: style_BidangTanah_1,
                popuplayertitle: 'Bidang Tanah',
                interactive: true,
                title: '<img src="styles/legend/BidangTanah_1.png" /> Bidang Tanah'
            });
var format_JaringanJalanBuff_2 = new ol.format.GeoJSON();
var features_JaringanJalanBuff_2 = format_JaringanJalanBuff_2.readFeatures(json_JaringanJalanBuff_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanBuff_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanBuff_2.addFeatures(features_JaringanJalanBuff_2);
var lyr_JaringanJalanBuff_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanBuff_2, 
                style: style_JaringanJalanBuff_2,
                popuplayertitle: 'Jaringan Jalan Buff',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalanBuff_2.png" /> Jaringan Jalan Buff'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BidangTanah_1.setVisible(true);lyr_JaringanJalanBuff_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BidangTanah_1,lyr_JaringanJalanBuff_2];
lyr_BidangTanah_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'FID_Bidang': 'FID_Bidang', 'KELURAHAN': 'KELURAHAN', 'KECAMATA_1': 'KECAMATA_1', 'PL_CITRA': 'PL_CITRA', 'KLASPL': 'KLASPL', 'SARPRAS': 'SARPRAS', 'RT': 'RT', 'RW': 'RW', 'DUSUN': 'DUSUN', 'KABUPATE_1': 'KABUPATE_1', 'KETERANGAN': 'KETERANGAN', 'STATUS': 'STATUS', 'SERTIPIKAT': 'SERTIPIKAT', 'TIPE_HAK': 'TIPE_HAK', });
lyr_JaringanJalanBuff_2.set('fieldAliases', {'FID_Admini': 'FID_Admini', 'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_Jaring': 'FID_Jaring', 'JENIS': 'JENIS', 'FUNGSI': 'FUNGSI', 'NAMA': 'NAMA', 'SUMBER_1': 'SUMBER_1', 'lbr_jln': 'lbr_jln', 'jari_jari': 'jari_jari', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_BidangTanah_1.set('fieldImages', {'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'FID_Bidang': '', 'KELURAHAN': '', 'KECAMATA_1': '', 'PL_CITRA': '', 'KLASPL': '', 'SARPRAS': '', 'RT': '', 'RW': '', 'DUSUN': '', 'KABUPATE_1': '', 'KETERANGAN': '', 'STATUS': '', 'SERTIPIKAT': '', 'TIPE_HAK': '', });
lyr_JaringanJalanBuff_2.set('fieldImages', {'FID_Admini': '', 'OBJECTID': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'Shape_Leng': '', 'Shape_Area': '', 'FID_Jaring': '', 'JENIS': '', 'FUNGSI': '', 'NAMA': '', 'SUMBER_1': '', 'lbr_jln': '', 'jari_jari': '', 'BUFF_DIST': '', 'ORIG_FID': '', });
lyr_BidangTanah_1.set('fieldLabels', {'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'FID_Bidang': 'no label', 'KELURAHAN': 'no label', 'KECAMATA_1': 'no label', 'PL_CITRA': 'no label', 'KLASPL': 'no label', 'SARPRAS': 'no label', 'RT': 'no label', 'RW': 'no label', 'DUSUN': 'no label', 'KABUPATE_1': 'no label', 'KETERANGAN': 'no label', 'STATUS': 'no label', 'SERTIPIKAT': 'no label', 'TIPE_HAK': 'no label', });
lyr_JaringanJalanBuff_2.set('fieldLabels', {'FID_Admini': 'no label', 'OBJECTID': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'FID_Jaring': 'no label', 'JENIS': 'no label', 'FUNGSI': 'no label', 'NAMA': 'no label', 'SUMBER_1': 'no label', 'lbr_jln': 'no label', 'jari_jari': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_JaringanJalanBuff_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});