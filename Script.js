var tabEurope = new Array ();
var tabasia = new Array ();
var tabafrique = new Array ();
var taboceania = new Array ();
var tabamerica = new Array ();

var tabEurope2 = new Array ();

var m = 0;

		$.get( "https://restcountries.eu/rest/v2/regionalbloc/eu", function(json)
            {
            	
            
	            $.each(json, function(key, val)
	            {
	            	
	               tabEurope[m] = ""+val.alpha2Code+"";
	               m++;
	            	
	            	
	            })

	        TabEurope();
	        TabEurope2();
	        

	        console.log(tabEurope.length);
	        console.log(tabEurope2);
	        console.log(tabEurope);
	        console.log(tabEurope2.length);
	      


          	});

		$.get( "https://restcountries.eu/rest/v2/region/Asia", function(json)
            {
            	
            
	            $.each(json, function(key, val)
	            {
	            	
	               tabasia[m] = ""+val.alpha2Code+"";
	               m++;
	            	
	            	
	            })

	        TabAsia();

	        console.log(tabasia.length);

          	});

		$.get( "https://restcountries.eu/rest/v2/region/Africa", function(json)
            {
            	
            
	            $.each(json, function(key, val)
	            {
	            	
	               tabafrique[m] = ""+val.alpha2Code+"";
	               m++;
	            	
	            	
	            })

	        TabAfrique();

	        console.log(tabafrique.length);

          	});

		$.get( "https://restcountries.eu/rest/v2/region/Oceania", function(json)
            {
            	
            
	            $.each(json, function(key, val)
	            {
	            	
	               taboceania[m] = ""+val.alpha2Code+"";
	               m++;
	            	
	            	
	            })

	        TabOceania();

	        console.log(taboceania.length);

          	});

		$.get( "https://restcountries.eu/rest/v2/region/Americas", function(json)
            {
            	
            
	            $.each(json, function(key, val)
	            {
	            	
	               tabamerica[m] = ""+val.alpha2Code+"";
	               m++;
	            	
	            	
	            })

	        TabAmerica();

	        console.log(tabamerica.length);

          	});

			

function TabEurope(k) {

	var l = 0;


	for (var i = 0; i < tabEurope.length; i++) 
	{
  		$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tabEurope[i]+"", function(json)
	  	{ 
	  		
	      $.each(json, function (key, data)
	      {
	          $.each(data, function (index, data)
	          {	
	            $("#"+l+"").append("<a>"+data.scientificName+"<br/><br/></a>"); 
	            
	           
	          }) 

	      })
			l++;	
	      


	      
	  	})
	}};

function TabAsia(k) {

	var l = 34;


	for (var i = 0; i < tabasia.length; i++) 
	{
  		$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tabasia[i]+"", function(json)
	  	{ 
	  		
	      $.each(json, function (key, data)
	      {
	          $.each(data, function (index, data)
	          {	
	            $("#"+l+"").append("<a>"+data.scientificName+"<br/><br/></a>"); 
	            
	           
	          }) 

	      })
			l++;	
	      


	      
	  	})
	}};

function TabAfrique(k) {

	var l = 84;


	for (var i = 0; i < tabafrique.length; i++) 
	{
  		$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tabafrique[i]+"", function(json)
	  	{ 
	  		
	      $.each(json, function (key, data)
	      {
	          $.each(data, function (index, data)
	          {	
	            $("#"+l+"").append("<a>"+data.scientificName+"<br/><br/></a>"); 
	            
	           
	          }) 

	      })
			l++;	
	      


	      
	  	})
	}};

function TabOceania(k) {

	var l = 144;


	for (var i = 0; i < taboceania.length; i++) 
	{
  		$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+taboceania[i]+"", function(json)
	  	{ 
	  		
	      $.each(json, function (key, data)
	      {
	          $.each(data, function (index, data)
	          {	
	            $("#"+l+"").append("<a>"+data.scientificName+"<br/><br/></a>"); 
	            
	           
	          }) 

	      })
			l++;	
	      


	      
	  	})
	}};

function TabAmerica(k) {

	var l = 171;


	for (var i = 0; i < tabamerica.length; i++) 
	{
  		$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tabamerica[i]+"", function(json)
	  	{ 
	  		
	      $.each(json, function (key, data)
	      {
	          $.each(data, function (index, data)
	          {	
	            $("#"+l+"").append("<a>"+data.scientificName+"<br/><br/></a>"); 
	            
	           
	          }) 

	      })
			l++;	
	      
	  	})
	}};

function TabEurope2(k) {

	for (var i = 0; i < tabEurope.length; i++) 
	{
		$.get( "http://api.gbif.org/v1/occurrence/search?species=animalia&country="+tabEurope[i]+"", function(json)
	  	{ 
	  		
	      $.each(json, function(key, data)
	            {

	            	 $.each(data, function (index, data)
			          {	
			               tabEurope2[m] = ""+data.key+"";
			               m++;
			            
			          }) 
	            })
	      
	  	})
			
	}

};



			

  		

