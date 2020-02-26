const width  = 400;
const height = 400;
const colors = d3.scaleOrdinal(d3.schemeCategory10);

let center_x = width  / 2;
let center_y = height / 2;
let radius   = 0.8 * Math.min(center_x,center_y);


let svg = d3.select("#netedit");
svg.on('contextmenu', () => { d3.event.preventDefault(); })

// set up initial nodes and links
//  - nodes are known by 'id', not by index in array.
//  - reflexive edges are indicated on the node (as a bold black circle).
//  - links are always source < target; edge directions are set by 'left' and 'right'.
let nodes = [
  { id: 0, reflexive: false },
  { id: 1, reflexive: false }
];
let links = [
  { source: nodes[0], target: nodes[1], left: false, right: false }
];
let subnets   = [];

//--- API call ---
const api_url = "http://100.25.180.176:5000/";
// const api_url = "http://127.0.0.1:5000/";
const api_sel = d3.select("#apiname");

function updateLayout() {
  const t = Math.PI*2.0 / nodes.length;
  nodes.forEach( 
    (e,i) => {
      e.x = center_x + radius*Math.sin(i*t);
      e.y = center_y - radius*Math.cos(i*t);
    }
  );
}

function onAddNode() {
  const nextid = nodes.length;
  nodes.push( {
    id: nextid,
    reflexive: false
  });

  updateLayout();
  restart();
}

function onClrNode() {
  nodes = [
    { id: 0, reflexive: false },
    { id: 1, reflexive: false }
  ];
  links = [
    { source: nodes[0], target: nodes[1], left: false, right: false }
  ];

  updateLayout();
  restart();
}

function onCompute() {
  let api_addr = api_url + api_sel.node().value;
  console.log(api_addr);
  let V = nodes.map ( 
    n => { 
      return { name: n.id};
    } 
  );
  let E = links.map ( 
    e => { 
      if (e.left && e.right)
        return { source: e.source.id, target: e.target.id, contract: 1 }; 
      else
        return { source: e.source.id, target: e.target.id }; 
    } 
  );
  let param = {
    headers: {
      "Content-Type":"application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      "nodes": V,
      "links": E
    }),
    method:"POST"
  };
  d3.select("#waiting").style('display','block');
  fetch (api_addr, param)
    .then( data => { return data.json() } )
    .then( res  => { 
      d3.select("#waiting").style('display','none');
      if (res.success) {
        subnets = res.data;
        let opts = d3.select("#netlist").select("tbody").selectAll('tr').data(subnets);
        let rows = opts.enter().append('tr');
        rows.append('td')
          .text( (d, i) => i.toString() )
          .on('click', (d,i) => { onSelectNet(i); } );
        rows.append('td')
          .text( (d, i) => d.size.toString() );
        rows.append('td')
          .text( (d, i) => d.corank.toString() );
        rows.append('td')
          .text( (d, i) => JSON.stringify(d.volume) );
        rows.append('td')
          .text( (d, i) => JSON.stringify(d.signature) );
        opts.exit().remove();
      }
    } )
    .catch( 
      err => { 
        d3.select("#waiting").style('display','none');
        console.log(err) 
      } );
}

function onSelectNet(value) {
  let net = subnets[value];
  let E = net.graph.links.map( 
    e => {
      return { 
        source : nodes[e.source],
        target : nodes[e.target],
        left   : false,
        right  : true
      }
    }
  );

  d3.selectAll("#netview > *").remove();

  let netview  = d3.select("#netview");
  let subnodes = netview.append('svg:g').selectAll('g');
  let sublinks = netview.append('svg:g').selectAll('path');

  subnodes.data(nodes, (d) => d.id)
    .enter().append('svg:circle')
    .attr('class', 'node')
    .attr('r', 12)
    .attr('cx', (d,i) => d.x)
    .attr('cy', (d,i) => d.y)
    .style('fill', (d) => colors(d.id))
    .style('stroke', (d) => d3.rgb(colors(d.id)).darker().toString());

  sublinks.data(E)
    .enter().append('svg:path')
    .attr('class', 'link')
    .style('marker-start', (d) => d.left  ? 'url(#start-arrow)' : '')
    .style('marker-end',   (d) => d.right ? 'url(#end-arrow)'   : '')
    .attr('d', (d) => {
      const deltaX = d.target.x - d.source.x;
      const deltaY = d.target.y - d.source.y;
      const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const normX = deltaX / dist;
      const normY = deltaY / dist;
      const sourcePadding = d.left  ? 17 : 12;
      const targetPadding = d.right ? 17 : 12;
      const sourceX = d.source.x + (sourcePadding * normX);
      const sourceY = d.source.y + (sourcePadding * normY);
      const targetX = d.target.x - (targetPadding * normX);
      const targetY = d.target.y - (targetPadding * normY);
      return `M${sourceX},${sourceY}L${targetX},${targetY}`;
    });
}

// define arrow markers for graph links
svg.append('svg:defs').append('svg:marker')
    .attr('id', 'end-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 6)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
  .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#000');

svg.append('svg:defs').append('svg:marker')
    .attr('id', 'start-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 4)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
  .append('svg:path')
    .attr('d', 'M10,-5L0,0L10,5')
    .attr('fill', '#000');

// line displayed when dragging new nodes
const dragLine = svg.append('svg:path')
  .attr('class', 'link dragline hidden')
  .attr('d', 'M0,0L0,0');

// handles to link and node element groups
let path = svg.append('svg:g').selectAll('path');
let node_g = svg.append('svg:g');
// let path_g = svg.append('svg:g');

// mouse event vars
let selectedLink = null;
let mousedownLink = null;
let mousedownNode = null;
let mouseupNode = null;

function resetMouseVars() {
  mousedownNode = null;
  mouseupNode = null;
  mousedownLink = null;
}

// update graph (called when needed)
function restart(reheat = true) {
  // path (link) group
  path = path.data(links);

  // update existing links
  path.classed('selected', (d) => d === selectedLink)
    .style('marker-start', (d) => d.left ? 'url(#start-arrow)' : '')
    .style('marker-end', (d) => d.right ? 'url(#end-arrow)' : '');

  // remove old links
  path.exit().remove();

  // add new links
  path = path.enter().append('svg:path')
    .attr('class', 'link')
    .classed('selected',   (d) => d === selectedLink)
    .style('marker-start', (d) => d.left ? 'url(#start-arrow)' : '')
    .style('marker-end',   (d) => d.right ? 'url(#end-arrow)' : '')
    .on('mousedown', (d) => {
      mousedownLink = d;
      selectedLink = (mousedownLink === selectedLink) ? null : mousedownLink;
      restart();
    })
    .merge(path);

    path.attr('d', (d) => {
      const deltaX = d.target.x - d.source.x;
      const deltaY = d.target.y - d.source.y;
      const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const normX = deltaX / dist;
      const normY = deltaY / dist;
      const sourcePadding = d.left  ? 17 : 12;
      const targetPadding = d.right ? 17 : 12;
      const sourceX = d.source.x + (sourcePadding * normX);
      const sourceY = d.source.y + (sourcePadding * normY);
      const targetX = d.target.x - (targetPadding * normX);
      const targetY = d.target.y - (targetPadding * normY);
  
      return `M${sourceX},${sourceY}L${targetX},${targetY}`;
    });

  // circle (node) group
  // NB: the function arg is crucial here! nodes are known by id, not by index!
  let circles = node_g.selectAll('g').data(nodes, (d) => d.id);

  // remove old nodes
  circles.exit().remove();

  // add new nodes
  const g = circles.enter().append('svg:g');

  g.append('svg:circle')
    .attr('class', 'node')
    .attr('r', 12)
    .style('fill', (d) => colors(d.id))
    .style('stroke', (d) => d3.rgb(colors(d.id)).darker().toString())
    .on('mousedown', (d) => {
      mousedownNode = d;
      selectedLink = null;
      dragLine
        .style('marker-end', 'url(#end-arrow)')
        .classed('hidden', false)
        .attr('d', `M${mousedownNode.x},${mousedownNode.y}L${mousedownNode.x},${mousedownNode.y}`);
      restart();
    })
    .on('mouseup', function (d) {
      if (!mousedownNode) 
        return;

      dragLine
        .classed('hidden', true)
        .style('marker-end', '');

      // check for drag-to-self
      mouseupNode = d;
      if (mouseupNode === mousedownNode) {
        resetMouseVars();
        return;
      }

      const source = mousedownNode;
      const target = mouseupNode;

      const link = links.filter(
        (l) => 
          (l.source === source && l.target === target) ||
          (l.target === source && l.source === target)
        )[0];
      if (! link) {
        links.push({ source, target, left: false, right: false });
      }

      // select new link
      // selectedLink = link;
      // selectedNode = null;
      restart();
    });

  // show node IDs
  g.append('svg:text')
    .attr('x', 0)
    .attr('y', 4)
    .attr('class', 'id')
    .text((d) => d.id);

  circles = g.merge(circles);
  circles.attr('transform', (d) => `translate(${d.x},${d.y})`);
}

function mousedown() {
  // because :active only works in WebKit?
  svg.classed('active', true);

  if (mousedownNode || mousedownLink) return;

  // addNode();
  // restart();
}

function mousemove() {
  if (!mousedownNode) 
    return;

  dragLine.attr('d', `M${mousedownNode.x},${mousedownNode.y}L${d3.mouse(this)[0]},${d3.mouse(this)[1]}`);
}

function mouseup() {
  if (mousedownNode) {
    // hide drag line
    dragLine
      .classed('hidden', true)
      .style('marker-end', '');
  }

  // because :active only works in WebKit?
  svg.classed('active', false);

  // clear mouse event vars
  resetMouseVars();
}

function spliceLinksForNode(node) {
  const toSplice = links.filter((l) => l.source === node || l.target === node);
  for (const l of toSplice) {
    links.splice(links.indexOf(l), 1);
  }
}

// only respond once per keydown
let lastKeyDown = -1;

function keydown() {
  d3.event.preventDefault();

  if (lastKeyDown !== -1) return;
  lastKeyDown = d3.event.keyCode;

  if (! selectedLink) 
    return;

  switch (d3.event.keyCode) {
    case 82: // R
      if (selectedLink) {
        if (selectedLink.left && selectedLink.right) {
          selectedLink.left  = false;
          selectedLink.right = false;
        } else {
          selectedLink.left  = true;
          selectedLink.right = true;
        }
      }
      restart();
      break;
  }
}

function keyup() {
  lastKeyDown = -1;
  // ctrl
  // if (d3.event.keyCode === 17) {
  //   circle.on('.drag', null);
  //   svg.classed('ctrl', false);
  // }
}

// app starts here
svg.on('mousedown', mousedown)
  .on('mousemove', mousemove)
  .on('mouseup', mouseup);
d3.select(window)
  .on('keydown', keydown)
  .on('keyup', keyup);

updateLayout();
restart();