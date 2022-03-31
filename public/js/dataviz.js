

var graph = document.getElementById("chartBar");

var male = graph.dataset.male;
var female = graph.dataset.female;

var chartBar = new Chart(graph, {

 type: 'bar',
 data: {
   labels: [ 'male', 'female'],
   datasets: [{
     label: 'Gender type',

     data: [male , female],
     backgroundColor: [
      'rgba(250, 152, 58,1.0)',
      'rgba(184, 233, 148,1.0)']
   
   }]
 }
});

var doughnut = document.getElementById("doughnut");
var messageLu = doughnut.dataset.messagelu;
var messageNonLu = doughnut.dataset.messagenonlu;

var myDoughnut = new Chart(doughnut, {

 type: 'doughnut',
 data: {
   labels: [ 'Message Lu', 'Message Non Lu'],
   datasets: [{
     label: 'Messages',

     data: [messageLu , messageNonLu],
     backgroundColor: [
      'rgba(74, 105, 189,1.0)',
      'rgba(120, 111, 166,1.0)']
   }]
 }
});

var chartpie = document.getElementById("chartpie");
var commandePE = chartpie.dataset.commandepe;
var commandeNP = chartpie.dataset.commandenp;

var chartpie = new Chart(chartpie, {

 type: 'pie',
 data: {
   labels: [ 'Commande Payée Envoyée', 'Commande Non Payée'],
   datasets: [{
     label: 'Commande',

     data: [commandePE, commandeNP],
     backgroundColor: [
      'rgba(56, 173, 169,1.0)',
      'rgba(234, 134, 133,1.0)']
   }]
 }
});