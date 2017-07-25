
Vue.component('card',{ 
  template:'#cardTpl',
  props:['carddata','activeindex'],
  data: function () {
    return{
    }
  },
  methods:{   
  }
});

Vue.component('calendarCard',{
  template:'#calendarCard',
  props:['carddata','index','active'],
  data: function(){
    var nDate = new Date(this.carddata.solar_term_date * 1000);
    var monthArr = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var dayArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Firday','Saturday'];
    return {
      cardDate:{
        year:nDate.getFullYear(),
        month:monthArr[nDate.getMonth()],
        date:nDate.getDate(),
        day:dayArr[nDate.getDay()].toUpperCase()
      }
    }
  }
})

Vue.component('videoCard',{
  template:'#videoCard',
  props:['carddata',"index","active"],
  data:function(){
    return {
      maskShow:true,
      videoStyle:{
        width:'100%',
        height:'100%',
        opacity:1
      }
    }
  },
  methods:{
    playVideo:function(){
      this.maskShow = false;
      this.$els.video.play();
    },
  }
});

Vue.component('commodityCard',{
  template:'#commodityCard',
  props:['carddata','index','active'],
  data: function(){
    return{
    }
  },
  methods:{
  }
});

Vue.component('gifCard',{
  template:'#gifCard',
  props:['carddata','index','active'],
  data:function(){
    return {
      containerHeight: 0
    }
  },
  methods:{   
  },
  ready:function(){
    this.containerHeight = this.$els.container.clientWidth;
    this.$els.gif.onload = function () {
      if(this.height >= this.width){
        this.style['width'] = '278px';
        this.style['top'] = -this.height/2 + 'px';
      }else {
        this.style['height'] = '278px';
        this.style['left'] = -this.width/2 + 'px';
      }
    }
  }
});

