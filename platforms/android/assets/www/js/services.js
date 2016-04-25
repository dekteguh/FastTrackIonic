angular.module('all.services', [])

.factory('AreaServices', function(){
    propinsi = [
        {id:1,nama:'DKI Jakarta',lat:-6.180736,lon:106.828474},
        {id:2,nama:'Jawa Barat',lat:-6.901846,lon:107.618054},
        {id:3,nama:'Jawa Tengah',lat:-6.993472,lon:110.419993},
        {id:4,nama:'DI Yogyakarta',lat:-7.794751,lon:110.367318},
        {id:5,nama:'Jawa Timur',lat:-7.245552,lon:112.73914},
    ];
  
    kabkota = [
        {id:1,nama:'Jakarta Timur',prop_id:1, lat:-6.213791,lon:106.944126},
        {id:2,nama:'Jakarta Barat',prop_id:1, lat:-6.176107, lon:106.737813},
        {id:3,nama:'Jakarta Pusat',prop_id:1, lat:-6.172548, lon:106.818995},
        {id:4,nama:'Jakarta Selatan',prop_id:1, lat:-6.247733, lon:106.807319},
        {id:5,nama:'Cianjur',prop_id:2, lat:-6.820992, lon:107.140234},
        {id:6,nama:'Bandung',prop_id:2, lat:-6.910559, lon:107.610262},
        {id:7,nama:'Sukabumi',prop_id:2, lat:-6.917859, lon:106.931718},
        {id:8,nama:'Ciamis',prop_id:2, lat:-7.316076, lon:108.353863},
        {id:9,nama:'Semarang',prop_id:3, lat:-6.977781, lon:110.409943},
        {id:10,nama:'Salatiga',prop_id:3, lat:-7.327605, lon:110.500647},
        {id:11,nama:'Pemalang',prop_id:3, lat:-6.920089, lon:109.370432},
        {id:12,nama:'Kebumen',prop_id:3, lat:-7.675392, lon:109.667096},
        {id:13,nama:'Sleman',prop_id:4, lat:-7.714974, lon:110.335446},
        {id:14,nama:'Kulon Progo',prop_id:4, lat:-7.788661, lon:110.162665},
        {id:15,nama:'Gunung Kidul',prop_id:4, lat:-7.994451, lon:110.606601},
        {id:16,nama:'Bantul',prop_id:4, lat:-7.874783, lon:110.324494},
        {id:17,nama:'Surabaya',prop_id:5, lat:-7.249731, lon:112.750820},
        {id:18,nama:'Gresik',prop_id:5, lat:-7.165601, lon:112.652422},
        {id:19,nama:'Sumenep',prop_id:5, lat:-7.008535, lon:113.858428},
        {id:20,nama:'Banyuwangi',prop_id:5, lat:-8.214243, lon:114.371521},
    ];
  
    return{
        //mendapatkan semua data propinsi
        listProp: function(){
            return propinsi;
        },
        //mendapatkan data kako berdasarkan propinsi tertentu
        listKabById: function(prop_id){
            var list = [];
            for(i=0;i<kabkota.length;i++){
                var arr = [];
                if(kabkota[i].prop_id === parseInt(prop_id)){
                    arr['id'] = kabkota[i].id;
                    arr['nama'] = kabkota[i].nama;
                    arr['prop_id'] = kabkota[i].prop_id;
                    arr['lat'] = kabkota[i].lat;
                    arr['lon'] = kabkota[i].lon;
                    list.push(arr);   
                }
            }
            return list;
        },
        //mendapatkan data prop berdasarkan id propinsi tertentu
        findPropById: function(prop_id){
            var prop = null;
            for(i=0;i<propinsi.length;i++){
                if(propinsi[i].id === parseInt(prop_id)){
                    prop.id = propinsi[i].id;
                    prop.nama = propinsi[i].nama;
                    prop.lat = propinsi[i].lat;
                    prop.lon = propinsi[i].lon; 
                }
            }
            return prop;
        },
        //mendapatkan data kako berdasarkan id kako tertentu
        findKabKotaId: function(kab_id){
            var kako = null;
            for(i=0;i<kabkota.length;i++){
                if(kabkota[i].id === parseInt(kab_id)){
                    kako.id = kabkota[i].id;
                    kako.nama = kabkota[i].nama;
                    kako.prop_id = kabkota[i].prop_id;
                    kako.lat = kabkota[i].lat;
                    kako.lon = kabkota[i].lon; 
                }
            }
            return kako;
        }
    }
})

.factory('FormServices', function(){
    
})