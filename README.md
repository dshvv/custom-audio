# custom-audio
使用
```shell
yarn add custom-audio
npm install custom-audio
```
```javascript
import CustomAudio from 'custom-audio';
import 'custom-audio/lib/custom-audio.css'
Vue.use(CustomAudio);
```
```vue
<template>
  <div id="app">
     <CustomAudio :config="customParams"
                     @audioCanplay="audioCanplay"
                     @audioTimeUpdate="audioTimeUpdate"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private customParams = {
    url: "https://dshvv.oss-cn-beijing.aliyuncs.com/speak.wav",
    keyframes: [
      {
        duration: 9140,
        label: "ivr",
        color: "white",
      },
      {
        duration: 15940,
        label: "振铃",
        color: "red",
      },
      {
        duration: 8840,
        color: "green",
        label: "人工服务",
      },
      {
        duration: 6280,
        color: "blue",
        label: "满意度",
      },
    ],
  };
  
  private audioCanplay(e: any){
    console.log('音频已准备好，可以播放了',e);
  }
    
  private audioTimeUpdate(e: any){
    console.log('音频当前播放进度更新',e);
  }
}
</script>

```
参数
```javascript
interface keyframe{
    // 此段的时长 毫秒
    duration: number;
    // 关键段颜色标识
    color: string;
    // 关键点名字
    label: string;
}

export interface CustomAudioParams{
    // 音频地址
    url: string;
    // 播放图标自定义
    playImg?:string;
    // 暂停图标自定义
    pauseImg?:string;
    // 进度圆球的样式
    pointImg?:string;
    // 是否开启静音工具
    mutedTool?: boolean;
    // 是否开启重置功能
    restartTool?: boolean;
    // 是否开启下载功能
    downTool?: boolean;
    // 关键帧
    keyframes?:Array<keyframe>;
    // 是否开启label显示，默认true
    showLabel?:boolean;
}
```

```javascript
audioCanplay、audioTimeUpdate原生节点的回调
```
预览   
![image](https://github.com/dshvv/custom-audio/blob/master/screenshots/1.jpg)

