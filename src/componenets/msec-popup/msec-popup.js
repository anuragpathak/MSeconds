Polymer({
  is: 'msec-popup',
  properties:{
    urlList :{
      type: Object,
      value: []
    }
  },
  attached : function () {
    console.log("msec-popup is attached");
  },
  dettached: function () {
    console.log("msec-popup is detached");
  },
  addURL: function() {
    if(this.$.newURL.value === ""){
      return;
    }
    this.push('urlList',this.$.newURL.value);
    this.$.newURL.value = "";

  },
});
