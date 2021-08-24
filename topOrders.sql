select c.CustomerID, c.CustomerName, count(o.OrderID) as NumOrders
from customers c
join orders o on o.CustomerID = c.CustomerID
group by c.CustomerID, c.CustomerName
order by NumOrders desc
limit 10
