<template>
  <div id="app">
    <CustomAudio :config="customParams"
                 @audioCanplay="audioCanplay"
                 @audioTimeUpdate="audioTimeUpdate"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class App extends Vue {
  private customParams: CustomAudioParams = {
    url: 'https://dshvv.oss-cn-beijing.aliyuncs.com/speak.wav',
    // playImg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2443048164,3935796374&fm=26&gp=0.jpg',
    // pauseImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606108409167&di=5f5f50c5af07236e0dac72740d56ff0a&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F21%2F87%2F5905bf8333486_610.jpg',
    // pointImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606108748780&di=c36ca584417c82c04aac79116faf3301&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F17%2F1d%2FQJ8664594830.jpg',
    // showLabel:true,
    // keyframes: [
    //   {
    //     duration: 9140,
    //     label: "ivr",
    //     color: "white",
    //   },
    //   {
    //     duration: 15940,
    //     label: "振铃",
    //     color: "red",
    //   },
    //   {
    //     duration: 8840,
    //     color: "green",
    //     label: "人工服务",
    //   },
    //   {
    //     duration: 62800,
    //     color: "blue",
    //     label: "满意度",
    //   },
    // ]
  };

  private audioCanplay(e: any){
    console.log('音频已准备好，可以播放了',e);
  }

  private audioTimeUpdate(e: any){
    console.log('音频当前播放进度更新',e);
  }
}
</script>
