
var tab = new Array("AX","AT","BE","BG","HR","CY","CZ","DK","EE","FO","FI","IM","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB");


$(document).ready(function()
{
	for (var i = 0; i < tab.length; i++) 
	{
		
		$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tab[i]+"", function(json)
	  	{ 
	      $.each(json, function (key, data)
	      {
	          $.each(data, function (index, data)
	          {
	              $("#"+i+"").append("<a>"+data.scientificName+"<br><br></a>");
	              i++;
	          })
	      })
	  	})
	}
});