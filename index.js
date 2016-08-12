var Domain = require('./Domains');
var Sale = Domain.loader('Sale');

Sale.Commands.IssueOrder();

Sale.Queries.PendingOrders();

process.on('uncaughtException', function (err) {
  console.log(err);
});
