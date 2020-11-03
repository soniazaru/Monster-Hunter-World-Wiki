import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function Imgmostri(props) {
  let url = imgData[props.indice].imgLink

  return (
    <Image src={url} rounded />
  )
}

export default Imgmostri;

let imgData = [
  {
    "id": "0",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/4/47/MHW-Aptonoth_Render_001.png/revision/latest/scale-to-width-down/350?cb=20180209035147"
  },
  {
    "id": "1",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/1/17/MHW-Jagras_Render_001.png/revision/latest?cb=20171204105237"
  },
  {
    "id": "2",
    "imgLink": "http://www.ardent-anima.com/images/mhw/full_mernos.png"
  },
  {
    "id": "3",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/9/98/2ndGen-Vespoid_Queen_Render_001.png/revision/latest?cb=20150328014630"
  },
  {
    "id": "4",
    "imgLink": "http://www.ardent-anima.com/images/mhw/full_mosswine.png"
  },
  {
    "id": "5",
    "imgLink": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-apceros_render_001.png"
  },
  {
    "id": "6",
    "imgLink": "https://vignette.wikia.nocookie.net/winx-club-and-freinds-adventures/images/1/17/A1ee8622dc2d43af99ed925d53b7676b8424a0d7r1-468-438v2_00.jpg/revision/latest?cb=20190122014458"
  },
  {
    "id": "7",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/a/a7/MHW-Noios_Render_001.png/revision/latest?cb=20171204124648"
  },
  {
    "id": "8",
    "imgLink": "https://gamepedia.cursecdn.com/monsterhunterworld_gamepedia_en/thumb/1/1d/Gajau_Render_001.png/1200px-Gajau_Render_001.png"
  },
  {
    "id": "9",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/f/f1/MHW-Kelbi_Render_001.png/revision/latest?cb=20190411145600"
  },
  {
    "id": "10",
    "imgLink": "https://i.pinimg.com/originals/93/86/6e/93866e774bbf8bb3bac14a1674a08d4f.jpg"
  },
  {
    "id": "11",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/f/fd/MHW-Shamos_Render_001.png/revision/latest?cb=20190923131136&path-prefix=it"
  },
  {
    "id": "12",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/0/02/Girros.png/revision/latest?cb=20190906101505&path-prefix=it"
  },
  {
    "id": "13",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/4/45/MHGen-Hornetaur_Render_001.png/revision/latest?cb=20151130201926"
  },
  {
    "id": "14",
    "imgLink": "http://www.ardent-anima.com/images/mhw/full_gastodon.png"
  },
  {
    "id": "15",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/b/b8/MHW-Barnos_Render_001.png/revision/latest?cb=20190818221315&path-prefix=it"
  },
  {
    "id": "16",
    "imgLink": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_jagras_render_001.png"
  },
  {
    "id": "17",
    "imgLink": "https://www.gamesoul.it/wp-content/uploads/2018/01/guida-mhw-kuluyaku.jpg"
  },
  {
    "id": "18",
    "imgLink": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-pukei-pukei_render_001.png"
  },
  {
    "id": "19",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/1/15/Mhw-barroth_render_001.png/revision/latest?cb=20191022125318&path-prefix=it"
  },
  {
    "id": "20",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/e/ed/MHW-Jyuratodus_Render_001.png/revision/latest?cb=20171204115016"
  },
  {
    "id": "21",
    "imgLink": "https://vignette.wikia.nocookie.net/monster-hunter/images/e/e0/Tobi-Kadachi.png/revision/latest?cb=20171215214909&path-prefix=it"
  },
  {
    "id": "22",
    "imgLink": "https://www.gamesoul.it/wp-content/uploads/2018/02/guida-mhw_anjanath1.jpg"
  },
  {
    "id": "23",
    "imgLink": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-azure_rathalos_render_001.png"
  },
  {
    "id": "24",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/e/e2/MHW-Bazelgeuse_Render_001.png/revision/latest?cb=20180224091735"
  },
  {
    "id": "25",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/c/cc/MHW-Behemoth_Render_001.png/revision/latest?cb=20190903160345&path-prefix=it"
  },
  {
    "id": "26",
    "imgLink": "https://www.optimagazine.com/wp-content/uploads/2018/03/Monster-Hunter-World-3.jpg"
  },
  {
    "id": "27",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/7/75/MHW-Diablos_Render_001.png/revision/latest?cb=20191223114815&path-prefix=it"
  },
  {
    "id": "28",
    "imgLink": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-black_diablos_render_001.png"
  },
  {
    "id": "29",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/e/ed/Mhw-dodogama_render_001.png/revision/latest?cb=20190906094931&path-prefix=it"
  },
  {
    "id": "30",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/4/4c/MHW-Great_Girros_Render_001.png/revision/latest?cb=20190906102555&path-prefix=it"
  },
  {
    "id": "31",
    "imgLink": "https://preview.redd.it/ktyfqnu4dr411.png?width=672&format=png&auto=webp&s=971207726530a8ba512521b3cf60c7ac80fe5e18"
  },
  {
    "id": "32",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/1/18/Mhw-kulve_taroth_render_002_%281%29.png/revision/latest?cb=20190909141454&path-prefix=it"
  },
  {
    "id": "33",
    "imgLink": "https://i.pinimg.com/originals/14/d3/31/14d331ba00069bfa86f204f1de070ab1.png"
  },
  {
    "id": "34",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/a/a7/FrontierGen-Lavasioth_Subspecies_Render_001.png/revision/latest?cb=20140906064452"
  },
  {
    "id": "35",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/3/34/MHW-Legiana_Render_001.png/revision/latest?cb=20190909154232&path-prefix=it"
  },
  {
    "id": "36",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/3/33/Mhw-lunastra_render_001.png/revision/latest?cb=20191205152624&path-prefix=it"
  },
  {
    "id": "37",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/4/47/MHWI-Ruiner_Nergigante_Render_001.png/revision/latest?cb=20191216105658"
  },
  {
    "id": "38",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/9/9f/MHW-Odogaron_Render_001.png/revision/latest?cb=20190923123705&path-prefix=it"
  },
  {
    "id": "39",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/4/47/Paolumu.png/revision/latest?cb=20190923124112&path-prefix=it"
  },
  {
    "id": "40",
    "imgLink": "https://vignette.wikia.nocookie.net/monster-hunter/images/d/d9/Radobaan.png/revision/latest?cb=20171215214811&path-prefix=it"
  },
  {
    "id": "41",
    "imgLink": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-rathalos_render_001.png"
  },
  {
    "id": "42",
    "imgLink": "https://i.ya-webdesign.com/images/monster-hunter-world-png-4.png"
  },
  {
    "id": "43",
    "imgLink": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-pink_rathian_render_001.png"
  },
  {
    "id": "44",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/e/e0/MHW-Teostra_Render_001.png/revision/latest?cb=20191206142909&path-prefix=it"
  },
  {
    "id": "45",
    "imgLink": "https://vignette.wikia.nocookie.net/monster-hunter/images/e/ef/Tzitzi-Ya-Ku.png/revision/latest/scale-to-width-down/340?cb=20171215214924&path-prefix=it"
  },
  {
    "id": "46",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/a/ac/Mhw-uragaan_render_001.png/revision/latest?cb=20191119190049&path-prefix=it"
  },
  {
    "id": "47",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/5/54/MHW-Vaal_Hazak_Render_001.png/revision/latest?cb=20190923132416&path-prefix=it"
  },
  {
    "id": "48",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/2/2f/MHW-Xeno%27jiiva_Render_001.png/revision/latest?cb=20190923134911&path-prefix=it"
  },
  {
    "id": "49",
    "imgLink": "https://vignette.wikia.nocookie.net/monster-hunter/images/0/01/Zorah_Magdaros.png/revision/latest?cb=20171215214938&path-prefix=it"
  },
  {
    "id": "50",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/0/07/MHW-Leshen_Render_001.png/revision/latest?cb=20191126211820"
  },
  {
    "id": "51",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunterwikiita/images/5/57/MHW_Ancient_Leshen_Render.png/revision/latest?cb=20191203140527&path-prefix=it"
  },
  {
    "id": "52",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/9/92/MHWI-Safi%27jiiva_Render_001.png/revision/latest?cb=20191207124403"
  },
  {
    "id": "53",
    "imgLink": "https://www.monsterhunter.com/world-iceborne/topics/s-zinogre/images/img01.png"
  },
  {
    "id": "54",
    "imgLink": "https://vignette.wikia.nocookie.net/monsterhunter/images/1/18/MHWI-Rajang_Render_001.png/revision/latest?cb=20190903160514"
  }
]