var columnDefs = [
    {headerName: 'Excluir', field: 'excluir'},
    {headerName: 'Alterar', field: 'alterar'},
    {headerName: 'Finalizar', field: 'finalizar'},
    {headerName: 'ID', field: 'id', sortable: true, filter: true},
    {headerName: 'Responsável', field: 'responsável', sortable: true, filter: true},
    {headerName: 'Tipo de Suporte', field: 'tipo de surpote', sortable: true, filter: true},
    {headerName: 'Relato/Cliente', field: 'relato/cliente', sortable: true, filter: true},
    {headerName: 'Nível de Chamado', field: 'nível de chamado', sortable: true, filter: true},
    {headerName: 'Data Abertura', field: 'data abertura', sortable: true, filter: true},
    {headerName: 'Solicitante', field: 'solicitante', sortable: true, filter: true},
    {headerName: 'Empresa Solicitante', field: 'empresa solicitante', sortable: true, filter: true},
    {headerName: 'Resolução', field: 'resolução', sortable: true, filter: true},
    {headerName: 'Data Resolução', field: 'data resolução', sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
  
  ];
      
  // specify the data
  var rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ];
      
  // let the grid know which columns and what data to use
  var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
  };
  
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', function() {
      var gridDiv = document.querySelector('#myGrid');
      new agGrid.Grid(gridDiv, gridOptions);
  });
  