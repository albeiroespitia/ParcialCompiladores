var nodes = new vis.DataSet([
    {id: 0, label: '0',color:'#F44336'},
    {id: 1, label: '1',color:'#4CAF50'},
    {id: 2, label: '2',color:'#4CAF50'},
    {id: 3, label: '3',color:'#4CAF50'},
    {id: 4, label: '4',color:'#F44336'},
    {id: 5, label: '5',color:'#4CAF50'},
    {id: 6, label: '6',color:'#F44336'},
    {id: 7, label: '7',color:'#4CAF50'},
    {id: 8, label: '8',color:'#F44336'},
    {id: 9, label: '9',color:'#F44336'},
    {id: 10, label: '10',color:'#F44336'},
    {id: 11, label: '11',color:'#F44336'},
    {id: 12, label: '12',color:'#4CAF50'},
    {id: 13, label: '13',color:'#4CAF50'},
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 0, to: 1, label: '+', arrows:{to:true,from:false}},
    {from: 0, to: 2, label: '-', arrows:{to:true,from:false}},
    {from: 0, to: 3, label: '=', arrows:{to:true,from:false}},
    {from: 0, to: 4, label: '1-9', arrows:{to:true,from:false}},
    {from: 4, to: 5, label: 'otro', arrows:{to:true,from:false}},
    {from: 0, to: 6, label: 'letra -p', arrows:{to:true,from:false}},
    {from: 0, to: 8, label: 'p', arrows:{to:true,from:false}},
    {from: 8, to: 9, label: 'r', arrows:{to:true,from:false}},
    {from: 9, to: 10, label: 'i', arrows:{to:true,from:false}},
    {from: 10, to: 11, label: 'n', arrows:{to:true,from:false}},
    {from: 11, to: 12, label: 't', arrows:{to:true,from:false}},
    {from: 8, to: 13, label: 'otro', arrows:{to:true,from:false}},
    {from: 6, to: 7, label: 'otro', arrows:{to:true,from:false}},
    {from: 9, to: 13, label: 'otro', arrows:{to:true,from:false}},
    {from: 10, to: 13, label: 'otro', arrows:{to:true,from:false}},
    {from: 11, to: 13, label: 'otro', arrows:{to:true,from:false}},
    {from: 8, to: 6, label: 'letra -r', arrows:{to:true,from:false}},
    {from: 9, to: 6, label: 'letra -i', arrows:{to:true,from:false}},
    {from: 10, to: 6, label: 'letra -n', arrows:{to:true,from:false}},
    {from: 11, to: 6, label: 'letra -p', arrows:{to:true,from:false}},
    {from: 6, to: 6, label: 'letra', arrows:{to:true,from:false}},
    {from: 4, to: 4, label: '0-9', arrows:{to:true,from:false}},
    {from: 4, to: 5, label: 'otro', arrows:{to:true,from:false}},
  ]);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);