var initCatList=[
    {src:'cat1.jpg',count:0,name:'tiger cat',url:'www.cat1.com'},
    {src:'cat2.jpg',count:0,name:'hidden cat',url:'www.cat2.com'},
    {src:'cat3.jpg',count:0,name:'two cats',url:'www.cat3.com'},
 ];

var Cat=function (data){
  var self=this;
  self.name=data.name;
  self.click=ko.observable(data.count);
  self.src=ko.observable(data.src);
  self.url=ko.observable(data.url);
  self.title=ko.computed(function(){
     var title='';
     var clicks=self.click();
     if(clicks<4){
      title='baby';
     }else if(clicks<7){
      title='adult';
     }else if(clicks<12){
      title='senior';
     }else{
      title='immortal';
     }
     return title;
  });
};

var viewModel=function(){
  var self=this;

  this.catList=ko.observableArray([]);

  initCatList.forEach(function(catEle){
    self.catList.puxsh(new Cat(catEle));
  });

  self.currentCat=ko.observable(this.catList()[0]);

  this.incrementCounter=function(){
      this.click(this.click()+1);
  };


};

ko.applyBindings(new viewModel());
