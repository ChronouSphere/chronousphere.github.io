import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';

export interface BranchList {
    position: number;
    ads: string;
    ste: string;
    lon: number;
    nam: string;
    lat: number;
}

const ELEMENT_DATA: BranchList[] = [
    {
        "position": 1,
        "ads": "Tingkat 1-2, 12-16, Bangunan KWSP, Jalan Dato' Dalam, 80000, Johor Bahru, Johor Darul Takzim, Malaysia",
        "ste": "01",
        "lon": 103.758697,
        "nam": "Johor Bahru",
        "lat": 1.461468
    }, {
        "position": 2,
        "ads": "No. 6 & 8, Jalan Sulaiman  83000 Batu Pahat, Johor Darul Takzim",
        "ste": "01",
        "lon": 102.931331,
        "nam": "Batu Pahat",
        "lat": 1.849373
    }, {
        "position": 3,
        "ads": "No.8 & 10 , Tingkat ,1 & 2, Jalan Haji Manan, 86000, Kluang, Johor Darul Takzim, Malaysia",
        "ste": "01",
        "lon": 103.32,
        "nam": "Kluang",
        "lat": 2.03428
    }, {
        "position": 4,
        "ads": "Tingkat Bawah, 1, 2 & 3, No. 9, Jalan Petrie, 84000, Muar, Johor, Malaysia",
        "ste": "01",
        "lon": 102.563756,
        "nam": "Muar",
        "lat": 2.046047
    }, {
        "position": 5,
        "ads": "No. 5 & 6, Jalan Genuang Perdana, Taman Genuang Perdana, 85000, Segamat, Johor, Malaysia",
        "ste": "01",
        "lon": 102.845164,
        "nam": "Segamat",
        "lat": 2.490775
    }, {
        "position": 6,
        "ads": "Lot. No. 2,  Bandar Tepian Sungai, Jalan Jemaluang, 86800, Mersing, Johor, Malaysia",
        "ste": "01",
        "lon": 103.84525,
        "nam": "Mersing",
        "lat": 2.417167
    }, {
        "position": 7,
        "ads": "No. 259 & 260, Jalan Kenanga 29/8, Indahpura, 81000 Kulai Johor",
        "ste": "01",
        "lon": 103.615742,
        "nam": "Kulai",
        "lat": 1.640592
    }, {
        "position": 8,
        "ads": "Aras Bawah, Mezzanine, 8 & 9, Bangunan KWSP Peladang, No. 33, Jalan Sultan Badlishah, 05000, Alor Setar, Kedah, Malaysia",
        "ste": "02",
        "lon": 100.367888,
        "nam": "Alor Setar",
        "lat": 6.118921
    }, {
        "position": 9,
        "ads": "Tingkat Bawah & 1, Wisma Keladi, No. 11A, Jalan Bank 08000, Sungai Petani, Kedah, Malaysia",
        "ste": "02",
        "lon": 100.488285,
        "nam": "Sungai Petani",
        "lat": 5.642433
    }, {
        "position": 10,
        "ads": "Tingkat Bawah, Blok Podium, Bangunan KWSP, Jalan Bukit Lagi,  01000, Kangar, Perlis, Malaysia",
        "ste": "09",
        "lon": 100.193167,
        "nam": "Kangar",
        "lat": 6.435742
    }, {
        "position": 11,
        "ads": "No.25(GF-1), Langkawi City, Mukim Kuah, 07000 Langkawi, Kedah.",
        "ste": "02",
        "lon": 99.848652,
        "nam": "Langkawi",
        "lat": 6.320378
    }, {
        "position": 12,
        "ads": "NO. 33 & 34, Persiaran 7, Kulim Avenue, Kulim Hi-Tech Park, 09000 Kulim, Kedah Malaysia",
        "ste": "02",
        "lon": 100.571761,
        "nam": "Kulim",
        "lat": 5.386766
    }, {
        "position": 13,
        "ads": "KWSP Kota Bharu, Tingkat 2, 3 & 5, Bangunan KWSP, Jalan Padang Garong 15000, Kota Bharu, Kelantan, Malaysia",
        "ste": "03",
        "lon": 102.240754,
        "nam": "Kota Bharu",
        "lat": 6.128002
    }, {
        "position": 14,
        "ads": "Lot 655, Jalan Hospital 17500 Tanah Merah, Kelantan Malaysia",
        "ste": "03",
        "lon": 102.149186,
        "nam": "Tanah Merah",
        "lat": 5.809974
    }, {
        "position": 14,
        "ads": "Lot PT 5556, Taman Yani, 18000, Kuala Krai, Kelantan, Malaysia",
        "ste": "03",
        "lon": 102.205922,
        "nam": "Kuala Krai",
        "lat": 5.539513
    }, {
        "position": 15,
        "ads": "KWSP Bandar Melaka, Bangunan KWSP, Jalan MITC, Hang Tuah Jaya, 75450, Ayer Keroh, Melaka, Malaysia",
        "ste": "04",
        "lon": 102.286522,
        "nam": "Melaka",
        "lat": 2.274066
    }, {
        "position": 16,
        "ads": "8670-Lot 10, Kompleks Perniagaan Alor Gajah, Jalan Besar 78000, Alor Gajah, Melaka, Malaysia",
        "ste": "04",
        "lon": 102.21016,
        "nam": "Alor Gajah",
        "lat": 2.3819
    }, {
        "position": 17,
        "ads": "C 538, Jalan Bestari 5, Bandar Jasin Bestari Seksyen 2, 77200 Bemban, Melaka, Malaysia",
        "ste": "04",
        "lon": 102.39305,
        "nam": "Jasin",
        "lat": 2.277432
    }, {
        "position": 18,
        "ads": "No 1 Jalan Dato' As Dawood 70100, Seremban, Negeri Sembilan, Malaysia",
        "ste": "05",
        "lon": 101.943568,
        "nam": "Seremban",
        "lat": 2.719514
    }, {
        "position": 19,
        "ads": "No. 4, 5 & 6, Jalan Kiara 1, Pusat Perniagaan Kiara, 72100, Bahau, Negeri Sembilan, Malaysia",
        "ste": "05",
        "lon": 102.396532,
        "nam": "Bahau",
        "lat": 2.81015
    }, {
        "position": 20,
        "ads": "D\u2019Nilai Convention Mall, No. G-6 & M-6, PT 9946, Jalan BBN 1/3F, Bandar Baru Nilai, Negeri Sembilan.",
        "ste": "05",
        "lon": 101.7924,
        "nam": "Nilai",
        "lat": 2.82202
    }, {
        "position": 21,
        "ads": "Bangunan KWSP Pahang, Persiaran KWSP, Bandar Indera Mahkota 25200, Kuantan, Pahang, Malaysia",
        "ste": "06",
        "lon": 103.298328,
        "nam": "Kuantan",
        "lat": 3.832408
    }, {
        "position": 22,
        "ads": "No. 79, Jalan Tun Razak, 27600, Raub, Pahang, Malaysia",
        "ste": "06",
        "lon": 101.857494,
        "nam": "Raub",
        "lat": 3.790905
    }, {
        "position": 23,
        "ads": "No 128B (GF, 1F dan 2F) dan No 128A (GF)\r\nPersiaran Damai 1, Damai Court\r\nTemerloh, Pahang",
        "ste": "06",
        "lon": 102.419838,
        "nam": "Temerloh",
        "lat": 3.440249
    }, {
        "position": 24,
        "ads": "Tingkat Bawah, No. 1 & 2, Lorong Wawasan 3, Taman Wawasan 27000 Jerantut, Pahang, Malaysia",
        "ste": "06",
        "lon": 102.381734,
        "nam": "Jerantut",
        "lat": 3.928703
    }, {
        "position": 25,
        "ads": "Tingkat Bawah & Tingkat 1, No. 10, Lorong Peramu Permai 1, Taman Peramu Permai, 26600 Pekan, Pahang, Malaysia",
        "ste": "06",
        "lon": 103.381203,
        "nam": "Pekan",
        "lat": 3.551154
    }, {
        "position": 26,
        "ads": "Bangunan KWSP, No. 3009, Off Lebuh Tenggiri 2, Bandar Seberang Jaya, 13700, Seberang Jaya, Pulau Pinang, Malaysia",
        "ste": "07",
        "lon": 100.397658,
        "nam": "Seberang Jaya",
        "lat": 5.39424
    }, {
        "position": 27,
        "ads": "KWSP Georgetown Tingkat 3 & 4, Menara KWSP, 38, Jalan Sultan Ahmad Shah, 10050, Georgetown, Pulau Pinang, Malaysia",
        "ste": "07",
        "lon": 100.330759,
        "nam": "George Town",
        "lat": 5.424024
    }, {
        "position": 28,
        "ads": "Tingkat Bawah & Tingkat 1, Blok F-2, Lorong Bayan Indah 1, Bay Avenue, 11900, Bayan Baru, Pulau Pinang, Malaysia",
        "ste": "07",
        "lon": 100.308249,
        "nam": "Bayan Baru",
        "lat": 5.33757
    }, {
        "position": 29,
        "ads": "Tingkat Bawah, 5, 6, 7 & 8, Bangunan KWSP, Jalan Greentown, 30450, Ipoh, Perak, Malaysia",
        "ste": "08",
        "lon": 101.093874,
        "nam": "Ipoh",
        "lat": 4.602434
    }, {
        "position": 30,
        "ads": "No. 260 & 261, Jalan PPMP 3/4, Pusat Perniagaan Manjung Point 3, 32040 Seri Manjung, Perak, Malaysia",
        "ste": "08",
        "lon": 100.670388,
        "nam": "Manjung",
        "lat": 4.217725
    }, {
        "position": 31,
        "ads": "No. 37 (GF-2) & No. 39 (GF), Persiaran TBC, Taiping Business Centre Jalan Tupai, 34000 Taiping, Perak.",
        "ste": "08",
        "lon": 100.749533,
        "nam": "Taiping",
        "lat": 4.839668
    }, {
        "position": 32,
        "ads": "No 23, Lorong Perwira M1/38,\r\nTaman Nanas, Jalan Changkat Jong,\r\n36000 Teluk Intan, Perak",
        "ste": "08",
        "lon": 101.044137,
        "nam": "Teluk Intan",
        "lat": 4.002052
    }, {
        "position": 33,
        "ads": "No. 8B, Tingkat Bawah, Jalan Raja Chulan, 33000, Kuala Kangsar, Perak, Malaysia",
        "ste": "08",
        "lon": 100.941475,
        "nam": "Kuala Kangsar",
        "lat": 4.777508
    }, {
        "position": 34,
        "ads": "NO. 2 & 4, JALAN WAWASAN 1, TAMAN WAWASAN JAYA, 34200 PARIT BUNTAR, PERAK.",
        "ste": "08",
        "lon": 100.482803,
        "nam": "Parit Buntar",
        "lat": 5.11336
    }, {
        "position": 34,
        "ads": "PJX-HM Shah Tower, Lot A Ground Level, No. 16A Persiaran Barat, 46050, Petaling Jaya, Selangor, Malaysia",
        "ste": "10",
        "lon": 101.645617,
        "nam": "Petaling Jaya",
        "lat": 3.104927
    }, {
        "position": 35,
        "ads": "KWSP Kajang Tingkat Bawah, Mezzanine, 1, 2 & 3 No. 1, Jalan Hentian 3, Pusat Hentian Kajang, Jalan Reko 43000, Kajang, Selangor, Malaysia",
        "ste": "10",
        "lon": 101.791892,
        "nam": "Kajang",
        "lat": 2.957656
    }, {
        "position": 36,
        "ads": "Tingkat Bawah dan Satu, Unit B-G-1, North Tower (Tower B), BBT One The Towers, Lebuh Batu Nilam 1,  Bandar Bukit Tinggi,  41200, Klang, Selangor, Malaysia",
        "ste": "10",
        "lon": 101.440844,
        "nam": "Klang",
        "lat": 3.00775
    }, {
        "position": 37,
        "ads": "Tingkat G, 1 & 2, Corporate Tower IDCC Shah Alam, Jalan Pahat L 15/L, 40200, Shah Alam, Selangor, Malaysia",
        "ste": "10",
        "lon": 101.524495,
        "nam": "Shah Alam",
        "lat": 3.065616
    }, {
        "position": 38,
        "ads": "Lot 5, Sunway Batu Caves, 68100, Batu Caves, Selangor, Malaysia",
        "ste": "10",
        "lon": 101.69113,
        "nam": "Gombak",
        "lat": 3.236359
    }, {
        "position": 39,
        "ads": "No 3A, The Prime @ Dataran Puchong, Taman Puchong Utama, 47100 Puchong, Selangor",
        "ste": "10",
        "lon": 101.61802,
        "nam": "Puchong",
        "lat": 2.991933
    }, {
        "position": 40,
        "ads": "No. 3S-10-G & 3S-10-1 Rawang One, Jalan Pintas Rawang 48000 Rawang, Selangor Malaysia",
        "ste": "10",
        "lon": 101.578396,
        "nam": "Rawang",
        "lat": 3.319344
    }, {
        "position": 41,
        "ads": "Tingkat GF & 1, No. 1, Jalan Medan Niaga 6, Medan Niaga, 45000 Kuala Selangor",
        "ste": "10",
        "lon": 101.271026,
        "nam": "Kuala Selangor",
        "lat": 3.318496
    }, {
        "position": 42,
        "ads": "Tingkat Bawah, Menara KWSP, Persiaran Kwasa Utama, Pusat Bandar Kwasa Damansara, Seksyen U4, Shah Alam, Selangor Darul Ehsan",
        "ste": "10",
        "lon": 101.571346,
        "nam": "Kwasa Damansara",
        "lat": 3.173077
    }, {
        "position": 43,
        "ads": "Bangunan KWSP, Jalan Kemajuan, Padang Hiliran, 21100, Kuala Terengganu, Terengganu, Malaysia",
        "ste": "11",
        "lon": 103.129981,
        "nam": "Kuala Terengganu",
        "lat": 5.312837
    }, {
        "position": 44,
        "ads": "Tingkat Bawah & Tingkat 1, PT 10720 & 10721, Taman Cukai Utama Fasa 4, Jln Kubang Kurus, 24000, Kemaman, Terengganu, Malaysia",
        "ste": "11",
        "lon": 103.418594,
        "nam": "Kemaman",
        "lat": 4.220381
    }, {
        "position": 45,
        "ads": "KWSP Jerteh, Tingkat GF & 1, Lot 226, Jalan Dato Kamaruddin, 22000 Jerteh, Terengganu, Malaysia",
        "ste": "11",
        "lon": 102.49374,
        "nam": "Jerteh",
        "lat": 5.73607
    }, {
        "position": 46,
        "ads": "Tingkat GF & 1 Lot PT 15824 (Unit 22), Sura Gate Commercial Centre, Jalan Sura Jeti, 23000, Dungun, Terengganu, Malaysia",
        "ste": "11",
        "lon": 103.419445,
        "nam": "Dungun",
        "lat": 4.754323
    }, {
        "position": 47,
        "ads": "Blok A, Bangunan KWSP, Lot 49, Jalan Karamunsing,  88598, Kota Kinabalu, Sabah, Malaysia",
        "ste": "12",
        "lon": 116.072686,
        "nam": "Kota Kinabalu",
        "lat": 5.967621
    }, {
        "position": 48,
        "ads": "Lot 3A & 5, Midtown Plaza\r\nBatu 4, Jalan Lintas Utara,\r\n90000 Sandakan,  Sabah, Malaysia",
        "ste": "12",
        "lon": 118.083374,
        "nam": "Sandakan",
        "lat": 5.863611
    }, {
        "position": 49,
        "ads": "Tingkat Bawah & 1, TB - 308, Blok 35, Bangunan KWSP, Kompleks Fajar, Jalan Lembaga, 91000, Tawau, Sabah, Malaysia",
        "ste": "12",
        "lon": 117.891867,
        "nam": "Tawau",
        "lat": 4.245408
    }, {
        "position": 50,
        "ads": "Beg Berkunci 20, Jalan Masak, 89009, Keningau, Sabah, Malaysia",
        "ste": "12",
        "lon": 116.795654,
        "nam": "Keningau",
        "lat": 5.378132
    }, {
        "position": 51,
        "ads": "Tingkat Bawah, Lot E004\r\n Financial Park Labuan, Jalan Merdeka\r\n 87000 Labuan, Sabah, Malaysia",
        "ste": "15",
        "lon": 115.249302,
        "nam": "Labuan",
        "lat": 5.276456
    }, {
        "position": 52,
        "ads": "Bangunan KWSP, MDLD 3330, Lot 65, Kompleks Fajar, Jalan Segama, 91126, Lahad Datu, Sabah, Malaysia",
        "ste": "12",
        "lon": 118.325497,
        "nam": "Lahad Datu",
        "lat": 5.02878
    }, {
        "position": 53,
        "ads": "Lot No. 2, Taman WTK Fasa II, Jalan Tandek, 89100, Kota Marudu, Sabah, Malaysia",
        "ste": "12",
        "lon": 116.773634,
        "nam": "Kota Marudu",
        "lat": 6.494514
    }, {
        "position": 54,
        "ads": "Tingkat GF & FF , Unit No. A-005,Blok A, Beaufort Square Avenue 2, Jalan Binunuk, 89800 Beaufort, Sabah",
        "ste": "12",
        "lon": 115.740176,
        "nam": "Beaufort",
        "lat": 5.34323
    }, {
        "position": 55,
        "ads": "Tingkat Bawah, Lot 1, Blok G, Jalan Mawar, Pekan Tomborungus, 89058 Kudat, Sabah Malaysia",
        "ste": "12",
        "lon": 116.852335,
        "nam": "Kudat",
        "lat": 6.879202
    }, {
        "position": 56,
        "ads": "Bangunan KWSP, Jalan Uplands, Beg Berkunci 2089, 93598, Kuching, Sarawak, Malaysia",
        "ste": "13",
        "lon": 110.35795,
        "nam": "Kuching",
        "lat": 1.530278
    }, {
        "position": 57,
        "ads": "Lot 1225,  Tingkat Bawah & Aras 1, Blok 10, MCLD Centre Point,  Jalan Melayu,  98008, Miri, Sarawak, Malaysia",
        "ste": "13",
        "lon": 113.985327,
        "nam": "Miri",
        "lat": 4.388416
    }, {
        "position": 58,
        "ads": "No. 10-12, Tingkat Bawah & 1 Lorong Kampung Datu 5, Jalan Kampung Datu, P.O. Box 1797 96000, Sibu, Sarawak, Malaysia",
        "ste": "13",
        "lon": 111.822549,
        "nam": "Sibu",
        "lat": 2.293055
    }, {
        "position": 59,
        "ads": "Blok E, Sublot 7, Naim Bintulu Paragon\r\nNo. 1, Old Airport Place, 97000 Bintulu\r\nSarawak, Malaysia",
        "ste": "13",
        "lon": 113.049816,
        "nam": "Bintulu",
        "lat": 3.168849
    }, {
        "position": 60,
        "ads": "Lot 1565, Tingkat Bawah, Jalan Buangsiol, 98700, Limbang, Sarawak, Malaysia",
        "ste": "13",
        "lon": 115.006395,
        "nam": "Limbang",
        "lat": 4.758127
    }, {
        "position": 61,
        "ads": "Tingkat GF & 1, No. 5, Jalan Nenas, 96100, Sarikei, Sarawak, Malaysia",
        "ste": "13",
        "lon": 111.52237,
        "nam": "Sarikei",
        "lat": 2.129544
    }, {
        "position": 62,
        "ads": "Tingkat Bawah Lot 654, Blok 3, Daerah Bandar Simanggang, Jalan Hospital, 95000, Sri Aman, Sarawak, Malaysia",
        "ste": "13",
        "lon": 111.462197,
        "nam": "Sri Aman",
        "lat": 1.235568
    }, {
        "position": 63,
        "ads": "Tingkat Bawah Bangunan KWSP, Jalan Raja Laut 50350, Kuala Lumpur, Wilayah Persekutuan, Malaysia",
        "ste": "14",
        "lon": 101.694895,
        "nam": "Kuala Lumpur",
        "lat": 3.153725
    }, {
        "position": 64,
        "ads": "No. 2, Jalan Radin Bagus 6, Bandar Baru Seri Petaling, 57000, Kuala Lumpur, Wilayah Persekutuan, Malaysia",
        "ste": "14",
        "lon": 101.692925,
        "nam": "Seri Petaling",
        "lat": 3.071012
    }, {
        "position": 65,
        "ads": "No 1 & 3, Jalan Laman Rimbunan Raya 1, Laman Rimbunan, 52100 Kepong, Kuala Lumpur, Wilayah Persekutuan, Malaysia",
        "ste": "14",
        "lon": 101.651606,
        "nam": "Kepong",
        "lat": 3.209951
    }, {
        "position": 66,
        "ads": "No 32A, Dataran Wangsa, Wangsa Melawati 53300 Kuala Lumpur, Wilayah Persekutuan, Malaysia",
        "ste": "14",
        "lon": 101.743188,
        "nam": "Wangsa Maju",
        "lat": 3.209415
    }];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'epf-locator';

    displayedColumns: string[] = ['position', 'ste', 'nam', 'ads', 'lat'];
    dataSource = ELEMENT_DATA;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        const body = { "ios": "100", "lan": "EN", "ver": "100" };
        this.http.post('https://secure.kwsp.gov.my/m2/postBranchLocation', body)
            .subscribe((res) => {
                console.log(res);
            })
    }

    translateState(ste: string) {
        switch (ste) {
            case '01':
                return 'Johor';
            case '02':
                return 'Kedah';
            case '03':
                return 'Kelantan';
            case '04':
                return 'Melaka';
            case '05':
                return 'Negeri Sembilan';
            case '06':
                return 'Pahang';
            case '07':
                return 'Pulau Pinang';
            case '08':
                return 'Perak';
            case '09':
                return 'Perlis';
            case '10':
                return 'Selangor';
            case '11':
                return 'Terengganu';
            case '12':
                return 'Sabah';
            case '13':
                return 'Sarawak';
            case '14':
                return 'Wilayah Persekutuan Kuala Lumpur';
            case '15':
                return 'Wilayah Persekutuan Labuan';
            case '16':
                return 'Wilayah Persekutuan Putrajaya'
            default:
                return ''
        }
    }
}
