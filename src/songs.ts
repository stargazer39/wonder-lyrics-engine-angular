export interface Song {
    names?: string[];
    singers?: string[];
    thumb?: string;
    title: string;
    timecode: Array<number>,
    lyrics: string[],
    id: string;
    localpath?: string;
    styles?: Styles;
}
  
export interface Styles {
    maintxt?: any;
    /* mtxtshadow?: string; */
    secondarytxt?: any;
    /* stxtbg?: string; */
    ticker?: any;
}

export const songs: Array<Song> = [
    {
        id:"001",
        singers:['Hatsune Miku'],
        title:"Lucky Orb",
        names:['emon Tes.'],
        thumb:"default.png",
        lyrics:["Hey! You there, you're a lucky boy","Hey! It's you, you're a lucky girl","Hey! Something's going to happen, it's a special night","Why don't we dance dance, let's take off everything","Hey! You there, you're a dreaming boy","Hey! It's you, you're a dreaming girl","Come on shakin', come on shakin'","Clap your hands up anyways","Anything goes now","Just get blown away!","","I don't know why","But my heart is dancing","Only a second before the story begins","That secret you can't tell anyone","The bad news that comes every day","That one you dislike, that one you don't get along with","Put them all on a rocket to send them beyond the stars","","Hey! You there, you're a lucky boy","Hey! It's you, you're a lucky girl","Hey! Something's going to happen, it's a special night","Why don't we dance dance, let's take off everything","Hey! You there, you're a dreaming boy","Hey! It's you, you're a dreaming girl","Come on shakin', come on shakin'","Clap your hands up anyways","Anything goes now","Just get blown away!","","Nagging dad","Irritated mom","That stuck-up friends looking down on you!","Just today, just tonight","Put them all on a rocket to send them beyond your dreams","","Hey! You there, you're a lucky boy","Hey! It's you, you're a lucky girl","Hey! Something's going to happen, it's a special night","Why don't we dance dance, let's take off everything","Hey! You there, you're a dreaming boy","Hey! It's you, you're a dreaming girl","Come on shakin', come on shakin'","Clap your hands up anyways","Anything goes now","Just get blown away!"],
        timecode:[33.5,37.5,41.4,44.4,49.4,52.5,56.3,58.3,60.2,62.1,67.2,80.1,83.9,87.6,95.1,98.9,102.6,106.5,112.2,114.2,118,121.7,124.8,129.3,133.1,136.6,138.2,140.3,142.1,145.5,182.3,183.6,186.2,190.2,194.2,200.1,201.7,205.5,209.45,212.4,217,220.8,224.1,226.1,227.9,229.8,234],
        localpath:'assets/videos/【MV】Lucky☆Orb feat. Hatsune Miku by emon(T ( 1440 X 1440 ).webm',
        styles: {
            maintxt: {"textShadow": "0 0 5px rgb(42 0 171)", "color": "white"},
            secondarytxt: {"color":"white","backgroundColor":"rgb(0 144 177)"},
            ticker:{"backgroundColor": "rgb(255, 0, 200)", "boxShadow":  "0px 0px 10px 5px rgb(247 0 159 / 82%)"}
        }
    },
    {
        id:"002",
        singers:['Hatsune Miku'],
        title:"Wonder Style",
        names:['Colate'],
        thumb:"default.png",
        lyrics:["kono yoru ni koishite","ichibyou goto ni sekai wa kawaru","onegai konna jikan ga zutto tsuzukimasu you ni","So take me, for me","","mawaru miraabooru nariyamanai oto","tsutawaru kodou wa majikku","haneru you na biito asagata made gimme","kinou no nayami nara mou throw out","nee kikoeru?","kokoro yurasu sutoorii","mada tarinai?","suwiito ni odoru no","watashi wa sou Wonder Style","","kono yoru ni koishite","kirameita furoa o nagameta","ashita no mukougawa made mitooseru mitai","kono yoru ni koishite","ichibyou goto ni sekai wa kawaru","onegai konna jikan ga zutto tsuzukimasu you ni","So take me, for me","","kessen wa shuumatsu doyou no kuuhaku","choushi ga denai weekdays doushite?","ano hi kiita song hameta iyafon","kimochi dake sukoshi taimusurippu","nee kikoeru?","kokoro hazumu merodii","mada tarinai?","suwiito ni odoru no","watashi wa sou Wonder style","","ijiwaru na everyday","kimagure ni sotto te o nobashite kureru kara","","kono yoru ni koishite","kirameita furoa o nagameta","ashita no mukougawa made mitooseru mitai","kono yoru ni koishite","ichibyou goto ni sekai wa kawaru","onegai konna jikan ga zutto tsuzukimasu you ni","So take me, for me","","So take me, for me","","Made By StargazeR for Hatsune Miku"
    ],
        timecode:[3.900394,6.539555,11.412276,17.699743,22.531823,27.004868,30.668105,34.580447,38.147682,41.916005,45.527035,49.371856,52.595986,54.516624,59.892814,71.299989,74.061191,78.883821,86.299808,89.019651,93.860018,100.107824,105.035895,109.419724,113.292197,116.595889,120.611861,124.395918,128.17973,131.925674,135.107326,137.004066,142.436623,155.267891,158.931902,167.828695,169.099908,171.571981,176.44309,183.774773,186.683613,191.436283,197.627804,201.628209,205.222736,208.756443,210,215],
        localpath:'assets/videos/video.mkv',
        styles: {
            maintxt: {"textShadow": "0 0 5px rgb(42 0 171)", "color": "white"},
            secondarytxt: {"color":"white","backgroundColor":"rgb(0 144 177)"},
            ticker:{"backgroundColor": "rgb(255, 0, 200)", "boxShadow":  "0px 0px 10px 5px rgb(247 0 159 / 82%)"}
        }
    }
]